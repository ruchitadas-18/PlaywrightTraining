const { test } = require('@playwright/test');
const Exceljs = require('exceljs');

test('Read and update excel file', async () => {

    let output = { row: -1, col: -1 };

    const workbook = new Exceljs.Workbook();

    await workbook.xlsx.readFile(
        'D:/Typescript/EventMangement/utils/download.xlsx'
    );

    const worksheet = workbook.getWorksheet('Sheet1');

    worksheet.eachRow((row, rowNumber) => {

        row.eachCell((cell, colNumber) => {

            if (cell.value === 'Apple') {

                output.row = rowNumber;
                output.col = colNumber;
            }
        });
    });

    if (output.row !== -1) {

        worksheet.getCell(output.row, output.col).value = 'Banana';

        await workbook.xlsx.writeFile(
            'D:/Typescript/EventMangement/utils/download.xlsx'
        );

        console.log('Excel updated');
    }
});