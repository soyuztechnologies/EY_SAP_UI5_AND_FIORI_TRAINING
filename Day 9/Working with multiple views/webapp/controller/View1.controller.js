sap.ui.define([
    'emc2/sd/products/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("emc2.sd.products.controller.View1",{
        //This is the constructor of the class
        //where we can put all the initialization code
        onInit: function(){
        },
        onNext: function(){
            //to nav to view 2
            // var oView = this.getView();
            // var oAppCon = oView.getParent();
            // oAppCon.to("idView2");
            this.getView().getParent().to("idView2");
        }
    });
});