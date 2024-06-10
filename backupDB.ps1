
$SQLServer = $env:computername + "\SQLExpress"
$fileLocation = '.\SQL Backup.sql'

write-host 'Backing up databases'
Invoke-Sqlcmd -ServerInstance $SQLServer -Querytimeout 600 -InputFile $fileLocation  -Verbose