var Excel = require('exceljs');
var nrc = require('node-run-cmd');


var wb = new Excel.Workbook();
var path = require('path');
var filePath = path.resolve('C:\\Users\\zeal.shah.EXXAT\\Desktop\\', 'Placements.xlsx');
var filePath1 = path.resolve('C:\\Users\\zeal.shah.EXXAT\\', 'zeal.xlsx');
wb.xlsx.readFile(filePath).then(function () {
    var i = 1;
    wb.worksheets.forEach((sheet) => {
        console.log(sheet.rowCount);
        console.log(sheet.columnCount);
        for (let row = 1; row < sheet.rowCount + 1; row++) {
            var rowString = "-->";
            for (let column = 1; column < sheet.columnCount + 1; column++) {
                rowString = rowString + "||" + sheet.getRow(row).getCell(column).value;
                if (sheet.getRow(row).getCell(column).value === null || sheet.getRow(row).getCell(column).value == "NULL" ) {
                    sheet.getRow(row).getCell(column).fill = {
                        type: 'pattern',
                        pattern: 'darkVertical',
                        fgColor: {
                            argb: 'FFFF0000'
                        }
                    };
                    sheet.getRow(row).getCell(column);
                }
            }
            console.log(rowString + "");
        }
    });
}).then(function () {
    wb.xlsx.writeFile(filePath1);
}).then(function (filePath1) {
    nrc.run('start excel ' + filePath1).catch(function (err) {
        console.log(err);
    });
});