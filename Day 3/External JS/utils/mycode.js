function aynchProcess(){
                alert("before waiting");
                // setTimeout(5000);
                // alert("after wating");

                setTimeout(
                    function(){
                        alert("after waiting");
                    }, 
                5000); //5000 ms = 5 sec
                
            }
            function addContent(){
                if(!document.getElementById("super").value){
                    return;
                }
                //step 1: create a brand new html element object
                var oNewElement = document.createElement("h3");
                //step 2: create a text node
                var oTextNode = document.createTextNode(document.getElementById("super").value);
                //step 3: add text node to newly created element
                oNewElement.appendChild(oTextNode);
                //step 4: get the container object
                var oContent = document.getElementById("idContent");
                //step 5: add newly created element to container
                oContent.appendChild(oNewElement);
            }
            function onMagic(){
                //step 1: get the object of html elements 
                var aBoxs = document.getElementsByClassName("box-content");
                //step 2: loop over these elements
                for(var i=0;i<aBoxs.length;i++){
                    //step 3: change the css of each inside the loop
                    var item = aBoxs[i];
                    item.style.background = "black";
                    item.style.color = "white";
                }
                
            }
            function spiderman(){
                //step 1: read the value of input fields
                var oUser = document.getElementById("idUn");
                var sUser = oUser.value;
                //concept of chaining in JS
                var sPwd = document.getElementById("idPwd").value;

                //step 2: compare the value using if
                if(sUser === "Anubhav" && sPwd == "demo@111"){
                    //step 3: truthy - login
                    debugger; //hard breakpoint
                    document.write("login success!");
                }else{
                    //step 4: give error
                    //alert("Login failed");
                    document.getElementById("msg").innerText = "the login has failed";
                }                 
            }