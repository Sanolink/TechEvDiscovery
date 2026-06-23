#Requires -Version 5.1
param(
    [string]$InputJson = "$PSScriptRoot\..\minecraftinstance.json",
    [string]$Output = "$PSScriptRoot\..\MODLIST.md"
)

$data = Get-Content $InputJson -Raw -Encoding UTF8 | ConvertFrom-Json

$packName    = "TechEv - Discovery"
$mcVersion   = $data.gameVersion
$forgeVer    = $data.baseModLoader.forgeVersion

$mods = $data.installedAddons | Sort-Object { $_.name }

$lines = [System.Collections.Generic.List[string]]::new()
$lines.Add("# $packName")
$lines.Add("")
$lines.Add("**Minecraft :** $mcVersion | **Forge :** $forgeVer | **Mods :** $($mods.Count)")
$lines.Add("")
$lines.Add("| Mod |  File  | Author |")
$lines.Add("|-----|--------|--------|")

foreach ($mod in $mods) {
    $name    = $mod.name
    $url     = $mod.webSiteURL
    $author  = $mod.primaryAuthor
    $file    = $mod.installedFile.fileName -replace '\.jar$', ''

    $nameSafe = $name -replace '\|', '\|'
    if ($url) {
        $nameCell = "[$nameSafe]($url)"
    } else {
        $nameCell = $nameSafe
    }

    $lines.Add("| $nameCell | ``$file`` | $author |")
}

$lines | Out-File $Output -Encoding UTF8
Write-Host "Generated Modlist : $Output ($($mods.Count) mods)"
