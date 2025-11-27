$file = "c:\Users\hmtme\git\centro-reabilitacao-cronograma-interativo\Orcamento.xlsx"
$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false
$workbook = $excel.Workbooks.Open($file)

foreach ($sheet in $workbook.Sheets) {
    $csvPath = "c:\Users\hmtme\git\centro-reabilitacao-cronograma-interativo\sheet_$($sheet.Name).csv"
    $sheet.SaveAs($csvPath, 6) # 6 = xlCSV
    Write-Output "Saved $($sheet.Name) to $csvPath"
}

$workbook.Close($false)
$excel.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
