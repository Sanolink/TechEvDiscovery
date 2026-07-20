@echo off
setlocal
cd /d "%~dp0.."

if exist ".git" (
  > .git\hooks\post-merge echo #!/bin/sh
  >> .git\hooks\post-merge echo sh "$(git rev-parse --show-toplevel)/setup/mods_sync.sh" --sync
  > .git\hooks\post-checkout echo #!/bin/sh
  >> .git\hooks\post-checkout echo [ "$3" = "1" ] ^|^| exit 0
  >> .git\hooks\post-checkout echo sh "$(git rev-parse --show-toplevel)/setup/mods_sync.sh" --sync
  echo Hooks installed
) else (
  echo No .git ^(ZIP download^): skipping hooks
)

if not exist "setup\mods.lock.json" (
  echo ERROR: setup\mods.lock.json not found.
  pause
  exit /b 1
)

where java >nul 2>&1 || (
  echo ERROR: Java not found. Install Java and run again.
  pause
  exit /b 1
)

if not exist "mods" mkdir mods

set "HAD_CF="
if exist "minecraftinstance.json" (
  copy /y "minecraftinstance.json" "setup\.mci.backup" >nul
  set "HAD_CF=1"
)
copy /y "setup\mods.lock.json" "minecraftinstance.json" >nul

echo Running InstanceSync...
java -jar InstanceSync.jar

if defined HAD_CF move /y "setup\.mci.backup" "minecraftinstance.json" >nul

if exist "setup\local-mods\*.jar" copy /y "setup\local-mods\*.jar" "mods\" >nul

echo Done.
pause
