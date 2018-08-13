
var message
var input_controls=[];
var messages={
    "name":"Your Name is required",
    "car-year":"The Year of your car is required",
    "car-make":"The Make of your car is required",
    "car-model": "The Model of your Car is required",
    "start-date": "The Date is required",
    "days": "The Number of Days is required",
    "credit-card":"Please enter your Credit Card Number to proceed with the transaction",
    "ccv":"Please enter your card's CCV number",
    "expiration": "Please enter the card's expiration date"
}


initialize();
function initialize(){
    input_controls = document.getElementsByTagName("input")
    
    var submit = document.querySelector("#submit-button");
     
    // for(var input of inputs){
    //     input.addEventListener("blur", function(e){
    //        lostFocus(e)
    //     },true)

    // }
    

    submit.addEventListener("click", function(event){
        event.preventDefault();
        validate();

    })
}






function clearAllAlerts(){
   
    // var alert_messages = document.querySelectorAll(".alert-message")
    // for(var alert of alert_messages){
    //     if(alert){
    //         alert.remove();
    //     }
    // }
     var input_field= document.querySelectorAll(".input_field")
    for(var input of input_field){
        if(input.classList.contains("input-invalid")){
            input.classList.remove("input-invalid");

        }
        // if(input.hasChildNodes()){
        //    for(var group of input.querySelector(".input-group")){

        //    }
        // }
    }
    

}

function displayAlert(element){
    // var alert_message = document.createElement("div");
    // alert_message.classList.add("alert-message");
    // alert_message.innerText = message;
    // element.parentElement.appendChild(alert_message)
    element.parentElement.classList.add("input-invalid")
    return
}

function validate(){
    var input_field = document.getElementsByTagName("input");
    clearAllAlerts()
    for(var field of input_field){
        var input = field.value;
       
        if(!input){

            // message = messages[field.id];
            // displayAlert(message,field)
            displayAlert(field)
        }
    }

}