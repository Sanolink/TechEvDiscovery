#Requires -Version 5.1
param(
    [string]$InputJson  = "$PSScriptRoot\..\minecraftinstance.json",
    [string]$LockFile   = "$PSScriptRoot\mods.lock.json",
    [string]$ExtraMods  = "$PSScriptRoot\extra-mods.json",
    [string]$Modlist    = "$PSScriptRoot\..\MODLIST.md"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $InputJson)) {
    Write-Error "minecraftinstance.json not found at '$InputJson'."
}

$data      = Get-Content $InputJson -Raw -Encoding UTF8 | ConvertFrom-Json
$packName  = "TechEv - Discovery"
$mcVersion = $data.gameVersion
$forgeVer  = $data.baseModLoader.forgeVersion

$extras = @()
if (Test-Path $ExtraMods) {
    $extraRaw = Get-Content $ExtraMods -Raw -Encoding UTF8 | ConvertFrom-Json
    if ($extraRaw.mods) { $extras = @($extraRaw.mods) }
}

$cfAddons = [System.Collections.Generic.List[object]]::new()
foreach ($m in ($data.installedAddons | Where-Object { $_.installedFile -and $_.installedFile.downloadUrl })) {
    $cfAddons.Add($m)
}
$cfAddons.Sort([System.Comparison[object]]{
    param($a, $b)
    [string]::CompareOrdinal($a.installedFile.fileNameOnDisk, $b.installedFile.fileNameOnDisk)
})

$lockAddons = foreach ($mod in $cfAddons) {
    [ordered]@{
        installedFile = [ordered]@{
            fileNameOnDisk = $mod.installedFile.fileNameOnDisk
            downloadUrl    = $mod.installedFile.downloadUrl
        }
    }
}

$lock = [ordered]@{
    installedAddons = @($lockAddons)
    cachedScans     = @()
}

$json = $lock | ConvertTo-Json -Depth 6
$json = $json -replace "`r`n", "`n"
[System.IO.File]::WriteAllText((Resolve-Path $PSScriptRoot).Path + "\mods.lock.json", $json + "`n", (New-Object System.Text.UTF8Encoding($false)))

$rows = [System.Collections.Generic.List[object]]::new()

foreach ($mod in $data.installedAddons) {
    $file = $mod.installedFile.fileName -replace '\.jar$', ''
    $rows.Add([pscustomobject]@{
        Name   = $mod.name
        Url    = $mod.webSiteURL
        Author = $mod.primaryAuthor
        File   = $file
        Local  = $false
    })
}
foreach ($e in $extras) {
    $rows.Add([pscustomobject]@{
        Name   = $e.name
        Url    = $e.url
        Author = $e.author
        File   = ($e.fileName -replace '\.jar$', '')
        Local  = $true
    })
}

$wrench = [char]::ConvertFromUtf32(0x1F527)
$rows.Sort([System.Comparison[object]]{
    param($a, $b)
    [string]::Compare([string]$a.Name, [string]$b.Name, [System.StringComparison]::InvariantCultureIgnoreCase)
})
$cfCount    = @($rows | Where-Object { -not $_.Local }).Count
$localCount = @($rows | Where-Object { $_.Local }).Count

$lines = [System.Collections.Generic.List[string]]::new()
$lines.Add("# $packName")
$lines.Add("")
$lines.Add("**Minecraft :** $mcVersion | **Forge :** $forgeVer | **Mods :** $($rows.Count) ($cfCount CurseForge + $localCount local)")
$lines.Add("")
$lines.Add("| Mod |  File  | Author |")
$lines.Add("|-----|--------|--------|")

foreach ($r in $rows) {
    $nameSafe = $r.Name -replace '\|', '\|'
    if ($r.Url) { $nameCell = "[$nameSafe]($($r.Url))" } else { $nameCell = $nameSafe }
    if ($r.Local) { $nameCell = "$nameCell $wrench" }
    $lines.Add("| $nameCell | ``$($r.File)`` | $($r.Author) |")
}

$lines | Out-File $Modlist -Encoding UTF8

Write-Host "Generated:"
Write-Host "  mods.lock.json : $($lockAddons.Count) mods"
Write-Host "  MODLIST.md     : $($rows.Count) mods ($cfCount CurseForge + $localCount local)"
