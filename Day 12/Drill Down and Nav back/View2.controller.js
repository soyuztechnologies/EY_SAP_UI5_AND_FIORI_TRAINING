sap.ui.define([
    'emc2/sd/products/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("emc2.sd.products.controller.View2",{
        //This is the constructor of the class
        //where we can put all the initialization code
        onInit: function(){

            this.oRouter = this.getOwnerComponent().getRouter();
            //I need a function which gets triggered every time the end point changes
            //Route changes, Hash Tag changes
            //Whenever the route changes to loadMyV2, an Event matched will gets triggered
            //whenever its triggered we are calling a function herculis
            //also pass the controller object to this function
            this.oRouter.getRoute("loadMyV2").attachMatched(this.herculis, this);
        },
        herculis : function(oEvent){
            //Extract the Fruit id from the route of the router
            var sFruitId = oEvent.getParameter("arguments").fruitId;
            //Build the path for element binding- /fruits/2
            var sPath = '/fruits/' + sFruitId;
            //Bind the current view 2 object directly
            this.getView().bindElement(sPath);
        },
        onBack: function(){
            //nav to view 1
            this.getView().getParent().to("idView1");
        },
        onSupplierSelect: function(oEvent){
            var oSelected = oEvent.getParameter("listItem");
            var sPath = oSelected.getBindingContextPath();
            var sId = sPath.split("/")[sPath.split("/").length - 1];
            this.oRouter.navTo("supplier",{
                supplierId : sId
            });
            //alert(sPath);
        },
        onAddNewCol: function(){
            var oColumn = new sap.m.Column({header: new sap.m.Text({text: "Dynamite"})
                                            });
            var oTable = this.getView().byId("idTab");
            oTable.addColumn(oColumn);
            oTable.bindAggregation("items",{
                path : '/suppliers',
                template: new sap.m.ColumnListItem({
                    cells: [
                        new sap.m.Text({text: "{name}"}),
                        new sap.m.Input({value: "{city}"}),
                        new sap.m.Text({text: "{sinceWhen}"}),
                        new sap.m.Text({text: "{contactPerson}"}),
                        new sap.m.Text({text: "{email}"})
                    ]
                })
            });
        }
    });
});