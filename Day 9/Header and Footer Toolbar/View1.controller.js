sap.ui.define([
    'emc2/sd/products/controller/BaseController',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function(BaseController, Filter, FilterOperator) {
    'use strict';
    return BaseController.extend("emc2.sd.products.controller.View1",{
        //This is the constructor of the class
        //where we can put all the initialization code
        onInit: function(){
        },
        onDelete: function(oAnubhav){
            //get the event parameter from SDK which item to be deleted
            var itemToBeDeleted = oAnubhav.getParameter("listItem");
            //get the source object of list control
            var oList = oAnubhav.getSource();
            //Remove the item which was suppose to be from list
            oList.removeItem(itemToBeDeleted);

        },
        onSelectItem: function(oEvent){
            //Get the path of selected Element
            var sPath = oEvent.getParameter("listItem").getBindingContextPath();
            //Pass this path for the onNext Function and inside that do the binding with element

            //How to call another function of same controller,
            //access object of controller class using 'this' pointer
            this.onNext(sPath);
        },
        onDeleteSelected: function(oEvent){
            //Step 1: Get The list control object
            var oList = this.getView().byId("idFruitsColl");
            //Step 2: Find out all the selected items inside the list control
            var aItems = oList.getSelectedItems();
            //Step 3: Loop over all the items, and remove each item one by one
            aItems.forEach(function(oEachItem){
                oList.removeItem(oEachItem);
            });
        },
        onSearch: function(oEvent){
            //check the event documentation for search, there is a query parameter
            var sQuery = oEvent.getParameter("query");
            //construct a model filter object - operand OPERATOR operand 
            var oFilter1 = new Filter("name", FilterOperator.Contains, sQuery);
            var oFilter2 = new Filter("type", FilterOperator.Contains, sQuery);
            var oFilter = new Filter({
                filters : [oFilter1, oFilter2],
                and: false
            });
            var aFilter = [oFilter];
            //Pass the filter object on our items aggregation
            var oAgg = this.getView().byId("idFruitsColl").getBinding("items");
            //Inject our filter to the binding
            oAgg.filter(aFilter);

        },
        onNext: function(sPath){
            //to nav to view 2
            // var oView = this.getView();
            // var oAppCon = oView.getParent();
            // oAppCon.to("idView2");

            this.getView().getParent().to("idView2");
        }
    });
});