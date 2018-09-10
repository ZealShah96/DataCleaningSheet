"use strict";
exports.__esModule = true;
var Excel = require('exceljs');
//var nrc = require('node-run-cmd');
var nullCheck_1 = require("./ConditionCheck/nullCheck");
var cc = new nullCheck_1.nullCheck();


var wb = new Excel.Workbook();
var path = require('path');
var filePath = path.resolve('C:\\Users\\zeal.shah\\Desktop\\', 'Placements.xlsx');
var filePath1 = path.resolve('C:\\Users\\zeal.shah\\', 'zeal.xlsx');
wb.xlsx.readFile(filePath).then(function () {
    var i = 1;
    wb.worksheets.forEach((sheet) => {
        console.log(sheet.rowCount);
        console.log(sheet.columnCount);
        for (let row = 1; row < sheet.rowCount + 1; row++) {
            var rowString = "-->";
            for (let column = 1; column < sheet.columnCount + 1; column++) {
                rowString = rowString + "||" + sheet.getRow(row).getCell(column).value;
                let isNull="";
              //  if (sheet.getRow(row).getCell(column).value === null || sheet.getRow(row).getCell(column).value == "NULL" ) {
                    
                     isNull=cc.checkConditon(sheet.getRow(row).getCell(column).value);
                    //var zeal=nullcheck.nullCheck.checkConditon(sheet.getRow(row).getCell(column).value);
                  //  console.log(zeal1);
                  if(!isNull){
                    sheet.getRow(row).getCell(column).fill = {
                        type: 'pattern',
                        pattern: 'darkVertical',
                        fgColor: {
                            argb: cc.provideFillStyleElement()
                        }
                    };
                   // sheet.getRow(row).getCell(column).fill=cc.provideFillStyleElement();
                  }
                    
                //}
                rowString=rowString+isNull;
            }
            console.log(rowString + "");
        }
    });
}).then(function () {
    wb.xlsx.writeFile(filePath1);
}).then(function (filePath1) {
    // nrc.run('start excel ' + filePath1).catch(function (err) {
    //     console.log(err);
    // });
});