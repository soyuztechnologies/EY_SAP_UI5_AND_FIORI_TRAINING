sap.ui.define(
    //since we create a special JS file
    //which of type controller, we need to inherit from
    //sap standard module - sap/ui/core/mvc/Controller
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        //Inheritence of standard sap ui5 class to
        //define our controller class
        return Controller.extend("mickey.controller.Main",{
            onInit: function() {
                //this is the constructor of my current class/module
                //we can write some code here which will trigger
                //when the app starts
                //alert("my app is started now");
            },
            onPressDefault: function() {
                this.getView().byId("idEmpId").setValue("10002");
            },
            onClick: function() {
                //I need to read the value of the input field
                // BAD - document.getElementById()
                //Step 1: Obtain the object of current view
                var oView = this.getView();
                //Step 2: call byId method of the application to get control object
                var oInp = oView.byId("idSpiderman");
                //Step 3: On this object you can use the functions
                var sVal = oInp.getValue();
                alert(sVal + " is here");
                // alert("Walla, the button is working");
                
            }
        });
});