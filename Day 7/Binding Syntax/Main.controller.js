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

                // 1. Create a brand new model object
                var oModel = new sap.ui.model.json.JSONModel();
                // 2. We will set / load the data in the model
                oModel.setData({
                    "empStr": {
                        "empId": "10001",
                        "empName": "Roger",
                        "salary": 10000,
                        "currency": "USD",
                        "smoker": true
                    }
                });
                // 3. Make the model aware to the application/view/control so they can consume this model
                // sap.ui.getCore().setModel(oModel);
                this.getView().setModel(oModel);

                //Syntax 3 for binding as property specific method
                this.getView().byId("idEmpSal").bindValue('/empStr/salary');
                //Syntax 4 for binding using a generic method
                this.getView().byId("idCurr").bindProperty("value", "/empStr/currency");
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