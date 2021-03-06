
var pname 
var car_year  
var car_make   
var car_model  
var start_date  
var days  
var credit_card  
var cvv  
var expiration  
var submit  
var total_div

var message = {
    "name":"Your Name is required",
    "car-year":"The Year of your car is required",
    "car-make":"The Make of your car is required",
    "car-model": "The Model of your Car is required",
    "start-date": "The Date is required",
    "days": "The Number of Days is required",
    "credit-card":"Please enter your Credit Card Number to proceed with the transaction",
    "cvv":"Please enter your card's CCV number",
    "expiration": "Please enter the card's expiration date"
}


initialize();

function initialize(){
pname = document.querySelector("#name");
car_year = document.querySelector("#car-year")
car_make = document.querySelector("#car-make") 
car_model = document.querySelector("#car-model")
start_date = document.querySelector("#start-date")
days = document.querySelector("#days")
credit_card = document.querySelector("#credit-card")
cvv = document.querySelector("#cvv")
expiration = document.querySelector("#expiration")
submit = document.querySelector("#submit-button")
total_div = document.querySelector("#total")
 
pname.addEventListener("blur",function(e){
    //validation code for name
    console.log("checking name: "+ isNameValid(e.target.value))
    if(isNameValid(e.target.value)){
        console.log("value: " +e.target.value)
        validateField("#" + e.target.id)
        return
    }else{
        invalidateField("#"+e.target.id)
        invalidFieldMessage("#"+e.target.id, message["name"])
    }

})
    
    car_year.addEventListener("blur", function(event){
        
             //console.log("car Year: " +event.target.value  + " car make: " + car_make.value + " car Model: " + car_model.value)
        
        if(validateCar(event.target.value, car_make.value, car_model.value)){
            console.log("validating car year")
            validateField(".input-group")
            validateField(".input-group")
            
        }else{
           invalidateField(".input-group")
           invalidFieldMessage("#"+event.target.id, message["car-year"])
        }

            
    })
    car_make.addEventListener("blur", function(event){

        if(validateCar(car_year.value,event.target.value,car_model.value)){
            console.log("validating car make")
            var delMsg = document.querySelector(".input-group");
            validateField(".input-group")
            removeInvalidMsg(delMsg)
        }else{
            invalidateField(".input-group")
            invalidFieldMessage("#"+event.target.id, message["car-make"])
        }
        
    })
    car_model.addEventListener("blur", function(event){
        // console.log("car Year: " + car_year.value + " car make: " + car_make.value + " car Model: " + event.target.value)
        // console.log("car model valid: " + isModelValid(event.target.value))
        if(validateCar(car_year.value,car_make.value, event.target.value)){
            console.log("validating car model")
            validateField(".input-group")
            var delMsg = document.querySelector(".input-group");
            validateField(".input-group")
            removeInvalidMsg(delMsg)
        }else{
            invalidateField(".input-group")
            invalidFieldMessage("#"+event.target.id, message["car-model"])
        }

    })

    start_date.addEventListener("blur", function(e){

        //validation code for date
        if(isDateValid(e.target.value)){
            validateField("#" + e.target.id)
        }else{
            invalidateField("#" + e.target.id)
            invalidFieldMessage("#"+e.target.id, message["start-date"])
        }
        


    })
    days.addEventListener("blur", function(e){
        //validation code for days
        console.log("Number of days: " + isNumberOfDaysValid(e.target.value))
        if(isNumberOfDaysValid(e.target.value)){
            validateField("#" + e.target.id)
        }else{
            invalidateField("#" + e.target.id)
            invalidFieldMessage("#"+e.target.id, message["days"])
        }
        
    })
    credit_card.addEventListener("blur", function(e){
        var isCreditCardValid = validateCardNumber(e.target.value)
        if(isCreditCardValid){
            validateField("#" + e.target.id)
        }else{
            invalidateField("#" + e.target.id)
            invalidFieldMessage("#"+e.target.id, message["credit-card"])
        }
    })

    cvv.addEventListener("blur", function(e){
        //validation code for days
            
        if(isValidCVV(e.target.value)){
            validateField("#"+ e.target.id)
        }else{
            invalidateField("#"+e.target.id)
            invalidFieldMessage("#"+e.target.id, message["cvv"])
        }
        

    })
    expiration.addEventListener("blur", function(e){
        // //validation code for days
        if(isExpirationDateValid(e.target.value)){
            validateField("#"+e.target.id)
        }else{
            invalidateField("#"+e.target.id)
            invalidFieldMessage("#"+e.target.id, message["expiration"])
        }
        
    })
    submit.addEventListener("click", function(event){
        event.preventDefault();
         validateAllInputs()


    })
}
function validateAllInputs(){
    var allInputFields = document.getElementsByTagName("input")
    var cost;
    var validCount=0;
    //Get all the valid/invalid inputs
    var input_fields = {
        "name":isNameValid(pname.value)?"valid":"invalid",
        "car-year": isYearValid(car_year.value)?"valid":"invalid",
        "car-make": isMakeValid(car_make.value)?"valid":"invalid",
        "car-model":isModelValid(car_model.value)?"valid":"invalid",
        "start-date":isDateValid(start_date.value)?"valid":"invalid",
        "days": isNumberOfDaysValid(days.value)?"valid":"invalid",
        "credit-card":validateCardNumber(credit_card.value)?"valid":"invalid",
        "cvv":isValidCVV(cvv.value)?"valid":"invalid",
        "expiration": isExpirationDateValid(expiration.value)?"valid":"invalid"
    }

    for(var field of allInputFields){
        console.log("field: " + field.id)
        if(input_fields[field.id]=="invalid"){
            if(field.id=="car-year"||field.id=="car-make"||field.id=="car-model"){
                invalidateField(".input-group")
                console.log("adding msg" )
                invalidFieldMessage(".input-group", message[field.id])    
            }else{
                invalidateField("#"+field.id)
                invalidFieldMessage("#"+field.id, message[field.id])
            }
            
        }else if(input_fields[field.id]=="valid"){
            validCount++
        }
    }
    if(validCount==9){
        displayTotal()
    }
    
}
function validateAllInputs1(){
    var invalidInputs =document.querySelectorAll(".input-invalid")
    var cost;
    if(invalidInputs.length==0){
        displayTotal();

    }else{
        Window.alert("Please fill out missing entries")
    }
    

}   


function getCost(){
var weekedayList=[];
var totalWeekdays=0;
var totalWeekends=0;

var date_counter = new Date(start_date.value);
for(var d=0; d<days.value;d++){
    if(date_counter.getDay()===0 || date_counter.getDay()===6){
        totalWeekends++
    }else{
        totalWeekdays++
    }
        
        date_counter.setDate(date_counter.getDate()+1)
        console.log(date_counter)
}
    //console.log("Wd: " + totalWeekdays + " we: " + totalWeekends)
    var cost = (totalWeekdays*5) + (totalWeekends*7);
    return cost
}
function displayTotal(){
    total_div.innerText ="Total is: " + getCost();
    total_div.style="border: 1px solid black; color: red; font-size: 22px"
}