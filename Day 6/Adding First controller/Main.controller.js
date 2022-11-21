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
                alert("my app is started now");
            },
            onClick: function() {
                alert("Walla, the button is working");
            }
        });
});