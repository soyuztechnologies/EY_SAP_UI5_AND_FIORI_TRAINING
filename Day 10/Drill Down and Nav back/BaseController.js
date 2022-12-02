sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/core/routing/History"
], function(Controller, History) {
    'use strict';
    return Controller.extend("emc2.sd.products.controller.BaseController",{
        anubhav: "this is global",
        oCore : sap.ui.getCore(),
        getRouter : function () {
			return this.getOwnerComponent().getRouter();
		},
        onNavBack: function () {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("master", {}, true /*no history*/);
			}
		}
    });
});