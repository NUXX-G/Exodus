@echo off
rem Despliegue de Exodus en una linea: deploy.bat
rem Construye la imagen, levanta el contenedor y espera a que responda.
setlocal
cd /d "%~dp0"

docker compose version >nul 2>&1
if errorlevel 1 (
  echo Falta Docker Desktop o no esta arrancado: https://docs.docker.com/desktop/
  exit /b 1
)

if "%EXODUS_PORT%"=="" set EXODUS_PORT=3000

docker compose -f docker\docker-compose.yml up -d --build
if errorlevel 1 exit /b 1

echo Esperando a que Exodus responda...
set /a tries=0
:wait
set /a tries+=1
curl -s -f -o nul http://127.0.0.1:%EXODUS_PORT%/api/health
if not errorlevel 1 goto ready
if %tries% geq 60 goto failed
timeout /t 2 /nobreak >nul
goto wait

:ready
echo Exodus esta en marcha: http://127.0.0.1:%EXODUS_PORT%
exit /b 0

:failed
echo El contenedor no respondio. Ultimos registros:
docker compose -f docker\docker-compose.yml logs --tail 40 web
exit /b 1
