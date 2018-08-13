var invalid_inputs=[];
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
var messages = {
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
         validateAllInputs()


    })
}

function validateAllInputs(){

    var valid =0;

    ((isNameValid(name.value))?valid++:invalid_inputs[0]="name")
    ((isYearValid(car_year.value))?valid++:invalid_inputs[1]="car-year")
    // (isMakeValid(car_make.value))?valid++:invalid_inputs[2]="car-make"
    // (isModelValid(car_model.value))?valid++:invalid_inputs[3]="car-model"
    // (isDateValid(start_date.value))?valid++:invalid_inputs[4]="start-date"
    // (isNumberOfDaysValid(days.value))?valid++:invalid_inputs[5]="days"
    // (isCreditCardValid(credit_card.value))?valid++:invalid_inputs[6]="credit-card"
    // (isValidCVV(cvv.value))?valid++:invalid_inputs[7]="ccv"
    // (isExpirationDateValid(expiration.value))?valid++:invalid_inputs[8]="expiration"
    // console.log("valid: "+ valid)
    console.log(invalid_inputs)
    if(valid ==9){
        displayTotal()
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
    total_div.innerText = getCost();

}