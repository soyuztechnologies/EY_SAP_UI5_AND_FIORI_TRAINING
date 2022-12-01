sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("emc2.sd.products.Component",{
        metadata: {},
        init: function(){
            //call the base class constructor to get free benefits from super class
            //super->constructor()
            //Baseclass.prototype.constructorname.apply(this)
            UIComponent.prototype.init.apply(this);
        },
        createContent: function(){
            var oView = new sap.ui.view({
                viewName: "emc2.sd.products.view.App",
                type: sap.ui.core.mvc.ViewType.XML
            });
            return oView;
        },
        destroy: function(){

        }
    });
});