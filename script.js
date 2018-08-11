
var message
var input_controls=[];

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
        // //validation code for days
        // if(isBlank(e.target.value)){
        //     invalidateField(e.target.id)
        // }else{
        //     validateField(e.target.id)
        // }
        
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

function lostFocus(event){
    var element = document.querySelector("#"+event.target.id)
    console.log(element.parentElement.classList);
    
    if(element.value!="" ){
        validField(element.id)
    }else{
     
        invalidate(element.id)
    }
    console.log("validation Failed")
    return;
}

