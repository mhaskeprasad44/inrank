$sites = [ordered]@{
    "cytos" = "https://cytos.in"
    "fludio" = "https://fludio.in"
    "hiragrafix" = "https://hiragrafix.com"
    "greytothegreen" = "https://greytothegreen.com"
    "vasroventures" = "https://vasroventures.com"
    "hcpnest" = "https://hcpnest.com"
    "riituinstitution" = "https://riituinstitution.com"
    "shetkarifoodstuff" = "https://shetkarifoodstuff.com"
    "orthopedicanklefootspecialist" = "https://orthopedicanklefootspecialist.com"
    "dravyafinancial" = "https://dravyafinancial.com"
}

$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$outDir = "c:\Users\Prasad\Downloads\Webwork\Inrank\public\portfolio\screenshots"

if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

foreach ($site in $sites.GetEnumerator()) {
    $name = $site.Key
    $url = $site.Value
    $targetPath = Join-Path $outDir ($name + ".png")
    Write-Host "Capturing $name from $url with virtual-time-budget=8000..."
    try {
        Start-Process -FilePath $edge -ArgumentList "--headless=new", "--disable-gpu", "--virtual-time-budget=8000", "--window-size=1440,900", "--hide-scrollbars", "--screenshot=$targetPath", $url -Wait
        if (Test-Path $targetPath) {
            $item = Get-Item $targetPath
            Write-Host "Success: $name ($($item.Length) bytes)"
        } else {
            Write-Warning "Failed to capture $name"
        }
    } catch {
        Write-Error "Error capturing $name : $_"
    }
}

Get-ChildItem $outDir | Select-Object Name, Length
