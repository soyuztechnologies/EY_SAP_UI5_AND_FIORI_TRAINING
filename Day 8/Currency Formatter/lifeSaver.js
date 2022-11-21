sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function(NumberFormat) {
    'use strict';
    return {
        convertUC: function(name){
            if(name){
                return name.toUpperCase();
            }
        },
        formatMyAmount: function(sal, curr){
            // "NumberFormat" required from module "sap/ui/core/format/NumberFormat"
            var oCurrencyFormat = NumberFormat.getCurrencyInstance({
                currencyCode: false
            });

            return oCurrencyFormat.format(sal, curr);
        }
    }
});