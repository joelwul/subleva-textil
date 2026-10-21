
$ErrorActionPreference = "Stop"

# CONFIGURACIÓN
$ProjectPath = "C:\Users\joelw\subleva-textil"
$RepoUrl = "https://github.com/joelwul/subleva-textil.git"

Write-Host "`n=== SUBLEVA TEXTIL | PUBLICAR EN GITHUB ===" -ForegroundColor Cyan

# 1. Verificar Git
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Git no está instalado." -ForegroundColor Red
    Write-Host "Instalalo desde https://git-scm.com/download/win"
    Read-Host "Presioná Enter para salir"
    exit 1
}

# 2. Verificar carpeta del proyecto
if (-not (Test-Path $ProjectPath)) {
    Write-Host "No encuentro la carpeta: $ProjectPath" -ForegroundColor Red
    $ProjectPath = Read-Host "Pegá la ruta completa de tu carpeta subleva-textil"
    if (-not (Test-Path $ProjectPath -PathType Container)) {
        throw "La carpeta indicada no existe."
    }
}

Set-Location $ProjectPath
Write-Host "Proyecto: $ProjectPath" -ForegroundColor Green

# 3. Verificar que sea el proyecto correcto
if (-not (Test-Path "package.json") -and
    -not (Test-Path "src")) {
    throw "No encuentro package.json ni la carpeta src. Revisá la ruta."
}

# 4. Crear .gitignore sin borrar el existente
$IgnoreFile = Join-Path $ProjectPath ".gitignore"
$IgnoreRules = @(
    "node_modules/"
    ".next/"
    "out/"
    "dist/"
    "build/"
    ".vercel/"
    ".env"
    ".env.*"
    "!.env.example"
    "*.log"
    ".DS_Store"
    "Thumbs.db"
    "coverage/"
)

if (-not (Test-Path $IgnoreFile)) {
    New-Item -Path $IgnoreFile -ItemType File | Out-Null
}

$ExistingRules = Get-Content $IgnoreFile -ErrorAction SilentlyContinue
foreach ($Rule in $IgnoreRules) {
    if ($ExistingRules -notcontains $Rule) {
        Add-Content -Path $IgnoreFile -Value $Rule
    }
}

# 5. Inicializar Git si todavía no existe
if (-not (Test-Path ".git")) {
    git init
    if ($LASTEXITCODE -ne 0) { throw "Falló git init." }
}

# 6. Configurar la rama principal
git branch -M main
if ($LASTEXITCODE -ne 0) { throw "No se pudo configurar main." }

# 7. Configurar el repositorio remoto
$Remotes = git remote
if ($LASTEXITCODE -ne 0) { throw "No se pudieron consultar los remotos." }

if ($Remotes -contains "origin") {
    git remote set-url origin $RepoUrl
} else {
    git remote add origin $RepoUrl
}
if ($LASTEXITCODE -ne 0) { throw "No se pudo configurar origin." }

# 8. Mostrar archivos que Git detecta
Write-Host "`nArchivos que se van a preparar:" -ForegroundColor Cyan
git status --short

# 9. Preparar y guardar los cambios localmente
git add -A
if ($LASTEXITCODE -ne 0) { throw "Falló git add." }

# Evitar un commit vacío
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host "`nNo hay cambios nuevos para guardar." -ForegroundColor Yellow
} else {
    git commit -m "Publicar proyecto Subleva Textil"
    if ($LASTEXITCODE -ne 0) {
        throw "Falló el commit. Revisá la configuración de Git."
    }
}

# 10. Subir a GitHub sin forzar ni borrar historial remoto
Write-Host "`nConectando con GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "`nLa subida no se completó." -ForegroundColor Red
    Write-Host "No se forzó el push ni se borró el historial remoto."
    Write-Host "Revisá la autenticación o si el repositorio remoto tiene commits."
    Read-Host "Presioná Enter para cerrar"
    exit 1
}

Write-Host "`n¡Proyecto publicado correctamente!" -ForegroundColor Green
Write-Host "https://github.com/joelwul/subleva-textil"
Read-Host "Presioná Enter para cerrar"
