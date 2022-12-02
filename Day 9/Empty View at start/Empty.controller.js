sap.ui.define([
    'emc2/sd/products/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("emc2.sd.products.controller.Empty",{
        //This is the constructor of the class
        //where we can put all the initialization code
        onInit: function(){
            //alert("welcome to my app");
            this.anubhav = "my initial value";
        },
    });
});