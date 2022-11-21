sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("emc2.sd.products.Component",{
        metadata: {
            manifest: "json"
        },
        init: function(){
            //call the base class constructor to get free benefits from super class
            //super->constructor()
            //Baseclass.prototype.constructorname.apply(this)
            UIComponent.prototype.init.apply(this);

            //Step 1: get the router object from base class
            var oRouter = this.getRouter();
            //Step 2: initialize the router - SAPUI5 will scan manifest to check routing config
            oRouter.initialize();
        },
        // createContent: function(){

        //     //App view - Root View which has a container control
        //     var oAppView = new sap.ui.view({
        //         viewName: "emc2.sd.products.view.App",
        //         type: sap.ui.core.mvc.ViewType.XML
        //     });

        //     //The app view has a App Container control with id = appCon (GREEN BOX)
        //     var oAppCon = oAppView.byId("appCon");

        //     //Create object of views
        //     var oView1 = new sap.ui.view({
        //         viewName: "emc2.sd.products.view.View1",
        //         type: "XML",
        //         id: "idView1"
        //     });

        //     var oView2 = new sap.ui.view({
        //         viewName: "emc2.sd.products.view.View2",
        //         type: "XML",
        //         id: "idView2"
        //     });

        //     var oEmpty = new sap.ui.view({
        //         viewName: "emc2.sd.products.view.Empty",
        //         type: "XML",
        //         id: "idEmpty"
        //     });

        //     //Add the views to the App Container Control (GREEN)
        //     //Here kokila ben is acting as parent for mukesh and anil
        //     oAppCon.addMasterPage(oView1).addDetailPage(oEmpty).addDetailPage(oView2);

        //     return oAppView;
        // },
        destroy: function(){

        }
    });
});