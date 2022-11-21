sap.ui.define([
    'emc2/sd/products/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("emc2.sd.products.controller.Supplier",{
        //This is the constructor of the class
        //where we can put all the initialization code
        onInit: function(){

            this.oRouter = this.getOwnerComponent().getRouter();
            //I need a function which gets triggered every time the end point changes
            //Route changes, Hash Tag changes
            //Whenever the route changes to loadMyV2, an Event matched will gets triggered
            //whenever its triggered we are calling a function herculis
            //also pass the controller object to this function
            this.oRouter.getRoute("supplier").attachMatched(this.herculis, this);
        },
        herculis : function(oEvent){
            //Extract the Fruit id from the route of the router
            var sSupplierId = oEvent.getParameter("arguments").supplierId;
            //Build the path for element binding- /fruits/2
            var sPath = '/suppliers/' + sSupplierId;
            //Bind the current view 2 object directly
            this.getView().bindElement(sPath);
        },
        onBack: function(){
            //nav to view 1
            //this.getView().getParent().to("idView1");
            this.onNavBack();
        }
    });
});