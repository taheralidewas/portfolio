@echo off
REM ============================================================
REM  publish.bat
REM  Double-click to update the portfolio on GitHub.
REM  It regenerates the PDF, then commits and pushes any changes.
REM ============================================================

cd /d "%~dp0"
echo.
echo ============================================
echo   Publishing portfolio update to GitHub
echo ============================================
echo.

REM --- 1. Make sure this is a git repo ---
if not exist ".git" (
  echo ERROR: This folder is not a git repository.
  echo Expected a .git folder in: %cd%
  goto :done
)

REM --- 2. Regenerate cards.js and the PDF from index.html ---
echo [1/4] Regenerating the PDF from the current content...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0build-pdf.ps1"
echo.

REM --- 3. Stage the known project files by name.
REM     Explicit names (never "git add -A") so a missing or failed
REM     PDF build can never stage a deletion of the committed PDF.
echo [2/4] Staging changes...
git add index.html cards.js print.html build-pdf.ps1 publish.bat README.md .gitignore .nojekyll
if exist "Taher_Shajapurwala_Portfolio.pdf" git add Taher_Shajapurwala_Portfolio.pdf
echo.

echo [3/4] Changes to be published:
git status --short
echo.

REM --- 4. Stop if nothing is staged ---
git diff --cached --quiet
if not errorlevel 1 (
  echo Nothing has changed since the last publish. Done.
  goto :done
)

REM --- 5. Commit and push ---
set STAMP=%date% %time%
git commit -m "Update portfolio - %STAMP%"
echo.

echo [4/4] Pushing to GitHub...
git push origin main
if errorlevel 1 (
  echo.
  echo PUSH FAILED. If this is the first push on a new machine,
  echo a browser window may open to sign in to GitHub - complete it
  echo and run this file again.
  goto :done
)

echo.
echo ============================================
echo   Done. Live in a minute or two at:
echo   https://taheralidewas.github.io/portfolio/
echo ============================================

:done
echo.
pause
