const Exceljs = require('exceljs');

async function extractExcelFile() {
    let output = {row:-1, col:-1};
    const workbook = new Exceljs.Workbook();
    await workbook.xlsx.readFile("D:/Typescript/EventMangement/utils/download.xlsx");
    const worksheet = workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row, rowNumber) => {
        console.log(`Row ${rowNumber}: ${row.values}`);

        // Iterate through each cell in the row
        row.eachCell((cell, colNumber) => {
            if(cell.value === 'Apple') {
                output.row = rowNumber;
                output.col = colNumber;
                console.log(`Found 'Apple' in Row ${rowNumber}, Cell ${colNumber}`);
            }   
        });
    });

    const cell = worksheet.getCell(output.row, output.col);
    cell.value = 'Banana';
    await workbook.xlsx.writeFile("D:/Typescript/EventMangement/utils/download.xlsx");
    console.log('Excel file updated successfully!');
}

extractExcelFile();