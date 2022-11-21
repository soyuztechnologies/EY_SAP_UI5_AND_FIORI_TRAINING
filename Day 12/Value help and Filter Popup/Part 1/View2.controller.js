sap.ui.define([
    'emc2/sd/products/controller/BaseController',
    'sap/m/MessageBox',
    'sap/m/MessageToast',
    'sap/ui/core/Fragment'
], function(BaseController, MessageBox, MessageToast, Fragment) {
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
        onSave: function(){
            MessageBox.confirm("Would you like to save?",{
                title: "Confirm",
                onClose: this.closePopup.bind(this)
            });
        },
        oSupplierPopup: null,
        onFilterSupplier: function(oEvent){
            //What do you do in ABAP when you ALV to avoid
            //Creating ALV object again and again in PBO??
            //IF lo_alv IS NOT BOUND NOT INITIAL
            //Create the object of popup fragment
            var that = this;
            if(!this.oSupplierPopup){
                Fragment.load({
                    type: "XML",
                    name: "emc2.sd.products.fragments.popup"
                }).then(function(oFragment){
                    //By Default we will not have access to this pointer
                    //inside the promise function, but we will have access
                    //to local variables created outside promise
                    that.oSupplierPopup = oFragment;
                    that.oSupplierPopup.setTitle("Suppliers");
                    //giving access of resources to the fragment by view
                    //immune system is granting access to parasite for body parts
                    that.getView().addDependent(that.oSupplierPopup);
                    that.oSupplierPopup.bindAggregation("items",{
                        path: '/suppliers',
                        template: new sap.m.DisplayListItem({
                            label: "{name}",
                            value: "{city}"
                        })
                    });
                    that.oSupplierPopup.open();
                });
            }else{
                //This way we save lots of memory and avoid creation
                //of objects unnecessarily
                this.oSupplierPopup.open();
            }
        },
        closePopup: function(status){
            //here we will not be allowed to access this pointer 
            //we have to explicitly pass the 'this' pointer to the controller object
            if(status === "OK"){
                MessageToast.show("The order has been created successfully");
            }else{
                MessageBox.error("Action was cancelled");
            }
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