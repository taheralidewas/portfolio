# build-pdf.ps1
# Regenerates cards.js and the portfolio PDF from the current index.html.
# Called by publish.bat; can also be run on its own.

$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
Set-Location $root

# 1. Pull the `const cards = [...]` array out of index.html into cards.js,
#    so the print page always reflects the latest content.
$html = [IO.File]::ReadAllText("$root\index.html", [Text.Encoding]::UTF8)
$script = [regex]::Match($html, '(?s)<script>(.*?)</script>').Groups[1].Value
$arr = [regex]::Match($script, '(?s)const cards = (\[.*?\n\]);').Groups[1].Value
if (-not $arr) { Write-Error "Could not find the cards array in index.html"; exit 1 }
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[IO.File]::WriteAllText("$root\cards.js", "const cards = $arr;", $utf8NoBom)
Write-Host "cards.js refreshed." -ForegroundColor Green

# 2. Locate Chrome.
$chrome = @(
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
  "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1

if (-not $chrome) {
  Write-Host "Chrome not found - skipping PDF, the website will still be pushed." -ForegroundColor Yellow
  exit 0
}

# 3. Render print.html to the PDF.
$src = "file:///" + ($root -replace '\\','/') + "/print.html"
$out = "$root\Taher_Shajapurwala_Portfolio.pdf"
Remove-Item $out -ErrorAction SilentlyContinue
& $chrome --headless=new --disable-gpu --no-pdf-header-footer `
  --virtual-time-budget=10000 --run-all-compositor-stages-before-draw `
  --print-to-pdf="$out" $src 2>$null | Out-Null
Start-Sleep -Seconds 2

if (Test-Path $out) {
  $kb = [math]::Round((Get-Item $out).Length / 1KB, 1)
  Write-Host "PDF regenerated ($kb KB)." -ForegroundColor Green
} else {
  Write-Host "PDF generation failed - the website will still be pushed." -ForegroundColor Yellow
}
