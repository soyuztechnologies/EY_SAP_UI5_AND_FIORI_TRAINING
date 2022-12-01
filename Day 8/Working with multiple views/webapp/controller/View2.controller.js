sap.ui.define([
    'emc2/sd/products/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("emc2.sd.products.controller.View2",{
        //This is the constructor of the class
        //where we can put all the initialization code
        onInit: function(){
        },
        onBack: function(){
            //nav to view 1
            this.getView().getParent().to("idView1");
        }
    });
});