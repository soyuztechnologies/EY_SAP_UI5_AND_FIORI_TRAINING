sap.ui.define([
    'emc2/sd/products/controller/BaseController',
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    'sap/ui/core/Fragment',
    "sap/m/MessageToast"
], function(BaseController,JSONModel,MessageBox,Fragment,MessageToast) {
    'use strict';
    return BaseController.extend("emc2.sd.products.controller.Add",{
        //This is the constructor of the class
        //where we can put all the initialization code
        onInit: function(){
            //alert("welcome to my app");
            this.anubhav = "my initial value";
            var oModel = new JSONModel();
            oModel.setData(this.getInitialData());
            this.getView().setModel(oModel,"prod");
        },
        onClear: function(){
            let oModel = this.getView().getModel("prod");
            oModel.setData(this.getInitialData());
        },
        onSave: function(){
            //Step 1: Access the Data and preapre payload
            let oModel = this.getView().getModel("prod");
            let payload = oModel.getProperty("/productData");
            if(!payload.PRODUCT_ID){
                MessageBox.error("Please enter a valid product ID");
            }
            //Step 2: Get the object of Odata Model which is default model
            var oDataModel = this.getView().getModel();
            //Step 3: Use the model object and POST the data to
            //        Product Entityset

            //JS Is Asynchronous NonBlocking IO
            oDataModel.create("/ProductSet", payload,{
                //Step 4: Once the data is posted, check the response
                //        if success, show success message
                success: function(data){
                    MessageToast.show("Wallah! You made it Amigo!");
                },
                //Step 5: Handle the error 
                error: function(oError){
                    var errorMessage = JSON.parse(oError.responseText).error.innererror.errordetails[0].message;
                    MessageBox.error(errorMessage);                    
                    //debugger;
                }
            });
        },
        getInitialData: function(){
            return {
                "productData": {
                    "PRODUCT_ID": "",
                    "TYPE_CODE": "PR",
                    "CATEGORY": "Notebooks",
                    "NAME": "",
                    "DESCRIPTION": "",
                    "SUPPLIER_ID": "0100000046",
                    "SUPPLIER_NAME": "SAP",
                    "PRICE": "0.00",
                    "CURRENCY_CODE": "USD",
                    "DIM_UNIT": "CM"
                }
            };
        }
    });
});