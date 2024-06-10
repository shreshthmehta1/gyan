#assignPath
$pathGE = 'C:\Temp\Utopia Gaming\Global Eye NSW\config.ini'
$pathJCE = 'C:\Temp\Utopia Gaming\Jabba Capture Engine\JCE.exe.config' 
$pathGGCU = 'C:\Temp\Utopia Gaming\Global Eye NSW\GGCCUCap.exe'
$newpathGGCU = "C:\Temp\Utopia Gaming\Global Eye NSW\xxGGCCUCap.exe"

#changeLevelMin
$content = Get-content -path $pathJCE
$content = $content -replace '<levelMin value="FATAL" />','<levelMin value="DEBUG" />'
Set-content -path $pathJCE -value $content

#checkForFile
if(Test-Path $pathGGCU -PathType Leaf){ Rename-Item -Path $pathGGCU -NewName $newpathGGCU -Force -ErrorAction Ignore } 

#extract 
$ext=Select-String -Path $pathGE -Pattern 'COMPORT=COM'

#exit if no comport value
if(!$ext){
Write-Output "COMPORT does not exist"
}
else {
#manipulate
$str= $ext -split "="
$str = $str[1] -split "m" 
$str = $str[1]
####################################################################################################

#replace
$rep=Select-String -Path $pathJCE -Pattern 'COMPort'

#split
$split = $rep -split "value"
#$replace = $rep -replace $split[1],"='$str'>"
$replace = $rep -replace $split[1],"=`"$str`" />" 
####################################################################################################

#getContent
$content = Get-content -path $pathJCE
$line = Get-Content $pathJCE | Select-String "COMPort" | Select-Object -ExpandProperty Line

$x = $replace -split ":"
$value = $x[3]
$content = $content -replace $line,$value

#setContent
Set-content -path $pathJCE -value $content
}