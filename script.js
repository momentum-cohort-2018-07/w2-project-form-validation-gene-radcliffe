
var message
var invalid_inputs=[];

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
    
    var name = document.querySelector("#name");
    var car_year = document.querySelector("#car-year")
    var car_make = document.querySelector("#car-make") 
    var car_model = document.querySelector("#car-model")
    var start_date = document.querySelector("#start-date")
    var days = document.querySelector("#days")
    var credit_card = document.querySelector("#credit-card")
    var cvv = document.querySelector("#cvv")
    var expiration = document.querySelector("#expiration")
    var submit = document.querySelector("#submit-button");

    name.addEventListener("blur", function(e){

        //validation code for name
        console.log("checking name: "+ isNameValid(e.target.value))
        if(isNameValid(e.target.value)){
            console.log("value: " +e.target.value)
            validateField("#" + e.target.id)
            return
        }else{
            invalidateField("#"+e.target.id)
        }
        
    
    })

 
    car_year.addEventListener("blur", function(event){
        
             //console.log("car Year: " +event.target.value  + " car make: " + car_make.value + " car Model: " + car_model.value)
        
        if(validateCar(event.target.value, car_make.value, car_model.value)){
            console.log("validating car year")
            validateField(".input-group")
        }else{
           invalidateField(".input-group")
        }

            
    })
    car_make.addEventListener("blur", function(event){

        if(validateCar(car_year.value,event.target.value,car_model.value)){
            console.log("validating car make")
            validateField(".input-group")
        }else{
            invalidateField(".input-group")
        }
        
    })
    car_model.addEventListener("blur", function(event){
        // console.log("car Year: " + car_year.value + " car make: " + car_make.value + " car Model: " + event.target.value)
        // console.log("car model valid: " + isModelValid(event.target.value))
        if(validateCar(car_year.value,car_make.value, event.target.value)){
            console.log("validating car model")
            validateField(".input-group")
        }else{
            invalidateField(".input-group")
        }

    })

    start_date.addEventListener("blur", function(e){

        //validation code for date
        if(isDateValid(e.target.value)){
            validateField("#" + e.target.id)
        }else{
            invalidateField("#" + e.target.id)
        }
        


    })
    days.addEventListener("blur", function(e){
        //validation code for days
        console.log("Number of days: " + isNumberOfDaysValid(e.target.value))
        if(isNumberOfDaysValid(e.target.value)){
            validateField("#" + e.target.id)
        }else{
            invalidateField("#" + e.target.id)
        }
        
    })
    credit_card.addEventListener("blur", function(e){
        var isCreditCardValid = validateCardNumber(e.target.value)
        if(isCreditCardValid){
            validateField("#" + e.target.id)
        }else{
            invalidateField("#" + e.target.id)
        }
    })

    cvv.addEventListener("blur", function(e){
        //validation code for days
            
        if(isValidCVV(e.target.value)){
            validateField("#"+ e.target.id)
        }else{
            invalidateField("#"+e.target.id)
        }
        

    })
    expiration.addEventListener("blur", function(e){
        // //validation code for days
        if(isExpirationDateValid(e.target.value)){
            validateField("#"+e.target.id)
        }else{
            invalidateField("#"+e.target.id)
        }
        
    })
    submit.addEventListener("click", function(event){
        event.preventDefault();
       


    })
}

function validateAllInputs(){

    var valid;

    (isNameValid(name.value)?valid++:invalid_inputs[0]="name")
    (isYearValid(car_year.value)?valid++:invalid_inputs[1]="car-year")
    (isMakeValid(car_make.value)?valid++:invalid_inputs[2]="car-make")
    (isModelValid(car_model.value)?valid++:invalid_inputs[3]="car-model")
    (isDateValid(start_date.value)?valid++:invalid_inputs[4]="start-date")
    (isNumberOfDaysValid(days.value)?valid++:invalid_inputs[5]="days")
    (isCreditCardValid(credit_card.value)?valid++:invalid_inputs[6]="credit-card")
    (isValidCVV(cvv.value)?valid++:invalid_inputs[7]="ccv")
    (isExpirationDateValid(expiration.value)?valid++:invalid_inputs[8]="expiration")

    if(valid==9){

    }else{}
}

