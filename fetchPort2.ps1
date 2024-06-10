#Paths for replacing string
$pathGE = 'C:\Program Files (x86)\Utopia Gaming\Global Eye NSW\config.ini'
$pathJCE = 'C:\Program Files (x86)\Utopia Gaming\Jabba Capture Engine\JCE.exe.config' 
$pathGGCU = 'C:\Program Files (x86)\Utopia Gaming\Global Eye NSW\GGCCUCap.exe'
$newpathGGCU = "C:\Program Files (x86)\Utopia Gaming\Global Eye NSW\xxGGCCUCap.exe"

#key to find in the Jabba config file
$find = "<add key=""COMPort"" value=""1"" />"

#extract the details for the serial port from the Global Eye config file
$ext=Select-String -Path $pathGE -Pattern 'COMPORT=COM'

#Get the serial port number from the Global Eye file
$test = $ext.Line
$test -match '[^0-9]+([0-9]+)'
Write-Host $test

If ($test){
	#create string to replace that includes with the COMPort found in the Global Eye
	$replace = "<add key=""COMPort"" value=""" + $matches[1] +""" />"
	#find and replace the string with the new comport value.
	((Get-Content -Path $pathJCE ) -replace $find,$replace) | Set-Content -Path $pathJCE
}

#Rename CCUCapture to a different name
if(Test-Path $pathGGCU -PathType Leaf){ Rename-Item -Path $pathGGCU -NewName $newpathGGCU -Force -ErrorAction Ignore } 
