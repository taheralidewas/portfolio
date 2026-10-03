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

REM --- 3. Show what changed ---
echo [2/4] Changes to be published:
git status --short
echo.

REM --- 4. Stop if there is nothing to publish ---
git diff --quiet --cached
set CACHED=%errorlevel%
git diff --quiet
set UNSTAGED=%errorlevel%
git ls-files --others --exclude-standard --error-unmatch . >nul 2>&1
if "%CACHED%"=="0" if "%UNSTAGED%"=="0" (
  echo Nothing has changed since the last publish. Done.
  goto :done
)

REM --- 5. Stage, commit, push ---
echo [3/4] Staging and committing...
git add -A
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
