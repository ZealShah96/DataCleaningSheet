"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var configureCondition = /** @class */ (function () {
    function configureCondition() {
    }
    configureCondition.prototype.conditionReplace = function (value) {
        var conditionTOcheck = "";
        fs_1.readFile('./config.json', function (err, data) {
            if (!err) {
                var parseddata = JSON.parse(data.toString());
                conditionTOcheck = parseddata[""+value+""].conditionToCheck;
               
            }
            else {
                console.log("There is some error!"+err);
            }
        });
        return conditionTOcheck;
    };
    return configureCondition;
}());
exports.configureCondition = configureCondition;
