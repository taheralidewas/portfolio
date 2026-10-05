# build-pdf.ps1
# Regenerates cards.js and the portfolio PDF from the current index.html.
# Called by publish.bat; can also be run on its own.
#
# Exit codes:
#   0  success (PDF rebuilt) OR Chrome not installed (website-only publish)
#   1  PDF generation was attempted but failed - caller must NOT delete the old PDF

$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
Set-Location $root

$pdf = "$root\Taher_Shajapurwala_Portfolio.pdf"

# 1. Pull the `const cards = [...]` array out of index.html into cards.js.
$html = [IO.File]::ReadAllText("$root\index.html", [Text.Encoding]::UTF8)
$script = [regex]::Match($html, '(?s)<script>(.*?)</script>').Groups[1].Value
$arr = [regex]::Match($script, '(?s)const cards = (\[.*?\n\]);').Groups[1].Value
if (-not $arr) { Write-Host "ERROR: cards array not found in index.html" -ForegroundColor Red; exit 1 }
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
  Write-Host "Chrome not found - keeping the existing PDF, website will still publish." -ForegroundColor Yellow
  exit 0
}

# 3. Render print.html to the PDF, into a temp file first so a failed/slow
#    run can never leave us with a missing or half-written PDF.
$src = "file:///" + ($root -replace '\\','/') + "/print.html"
$tmp = "$root\_build.pdf"
Remove-Item $tmp -ErrorAction SilentlyContinue

$proc = Start-Process -FilePath $chrome -PassThru -WindowStyle Hidden -ArgumentList @(
  "--headless=new","--disable-gpu","--no-pdf-header-footer",
  "--virtual-time-budget=12000","--run-all-compositor-stages-before-draw",
  "--print-to-pdf=`"$tmp`"","`"$src`""
)

# Wait for Chrome to actually exit (up to 60s) rather than guessing with a sleep.
if (-not $proc.WaitForExit(60000)) {
  try { $proc.Kill() } catch {}
  Write-Host "PDF generation timed out - keeping the existing PDF." -ForegroundColor Yellow
  Remove-Item $tmp -ErrorAction SilentlyContinue
  exit 1
}

# 4. Validate the temp PDF before replacing the real one.
Start-Sleep -Milliseconds 400
if ((Test-Path $tmp) -and ((Get-Item $tmp).Length -gt 20000)) {
  Move-Item $tmp $pdf -Force
  $kb = [math]::Round((Get-Item $pdf).Length / 1KB, 1)
  Write-Host "PDF regenerated ($kb KB)." -ForegroundColor Green
  exit 0
} else {
  Write-Host "PDF came out empty or too small - keeping the existing PDF." -ForegroundColor Yellow
  Remove-Item $tmp -ErrorAction SilentlyContinue
  exit 1
}
