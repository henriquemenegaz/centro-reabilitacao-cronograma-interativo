$file = "c:\Users\hmtme\git\centro-reabilitacao-cronograma-interativo\Orcamento.xlsx"
$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$workbook = $excel.Workbooks.Open($file)

foreach ($sheet in $workbook.Sheets) {
    Write-Output "SHEET: $($sheet.Name)"
    $rowMax = $sheet.UsedRange.Rows.Count
    $colMax = $sheet.UsedRange.Columns.Count
    
    # Limit to first 100 rows and 20 columns to avoid huge output
    if ($rowMax -gt 100) { $rowMax = 100 }
    if ($colMax -gt 20) { $colMax = 20 }

    for ($i = 1; $i -le $rowMax; $i++) {
        $row = @()
        for ($j = 1; $j -le $colMax; $j++) {
            $cell = $sheet.Cells.Item($i, $j).Text
            $row += $cell
        }
        # Only print rows that are not completely empty
        if (($row -join "") -ne "") {
            Write-Output ($row -join "|")
        }
    }
    Write-Output "--------------------------------------------------"
}

$workbook.Close($false)
$excel.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
