sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("emc2.sd.products.controller.BaseController",{
        anubhav: "this is global",
        oCore : sap.ui.getCore()
    });
});