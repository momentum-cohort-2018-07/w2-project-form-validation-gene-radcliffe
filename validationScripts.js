/**
 * Invalidates the field
 * @param {CSS Selector (e.g. #input-field or .car-field)} cssSelector 
 */
function invalidateField(cssSelector){
    var element = document.querySelector(cssSelector)

    var valid = element.parentElement.classList.contains("input-valid")
    if(valid){
        element.parentElement.classList.remove("input-valid")
    }
    element.parentElement.classList.add("input-invalid")
}
function invalidFieldMessage(cssSelector,msg){
    var element= document.querySelector(cssSelector)
    var invalid_msg = document.createElement("div");
    invalid_msg.innerText=msg
    invalid_msg.id=""
    invalid_msg.className="invalid-msg"
    invalid_msg.style="color: red; font-size: 0.5rem; display:block;"
    var input_field = element.parentElement
    if(!input_field.querySelector(".invalid-msg")){
        input_field.appendChild(invalid_msg);
    }
   
}
/**
 * Validates the field 
 * @param {CSS Selector (e.g. #input-field or .car-field)} cssSelector
  
 */
function validateField(cssSelector){

    var element = document.querySelector(cssSelector);
    
    var invalid =element.parentElement.classList.contains("input-invalid");
    
    if(invalid){
        element.parentElement.classList.remove("input-invalid")
        
      
    }
        element.parentElement.classList.add("input-valid")
        removeInvalidMsg(element)
    
    return
}

function removeInvalidMsg(element){
    var child = (element.parentElement.querySelector(".invalid-msg"))
    element.parentElement.removeChild(child)
    return
}

/**
 * Validates the Customer's Name
 * @param {String. Name of Customer} name 
 */
function isNameValid(name){
 
    if(!isBlank(name)){
       
        return true//return valid
    }
   
    return false //return invalid
   
    
}
/**
 * Validates Car Year, Make and Model all together.
 * @param {Model Year of Car in YYYY format} year 
 * @param {Make of Car} make 
 * @param {Model of Car} model
 *  
 */
function validateCar(year, make, model){
    //isCarValid && isMakeValid && isModelValid
    // console.log("the Year is Valid? " +isYearValid(year));
    // console.log("year: " + year + " make: " + make + " model: "+ model)
    console.log("validate Car is: " + isYearValid(year) && isMakeValid(make) && isModelValid(model))
    
    if(isYearValid(year) && isMakeValid(make) && isModelValid(model)){
       
        return true;
    }else{
     
        return false
    }
}

/**
 * 
 * @param {String. Make of the Car} make 
 */
function isMakeValid(make){
     //return true if valid
     
    return((typeof(make)=="string") && !isBlank(make));
    
}
/**
 * 
 * @param {String. Model Year of Car} year 
 */
function isYearValid(year){
    //return true if valid
    var today = new Date();
    year =parseInt(year)

   return(typeof(year)=="number" && year >= 1900 && year <= today.getFullYear())

}
/**
 * Validates the Car Model
 * @param {Car Model} model 
 */
function isModelValid(model){
   
    return((typeof(model)=="string") && !isBlank(model));
    
    
}
/**
 * Validates the parking date
 * @param {date of parking} date 
 */
function isDateValid(date){
    if(!isBlank(date)){
        return true
    }
    return false
}
/**
 * Validates the number of days to park
 * @param {0-30} days 
 */
function isNumberOfDaysValid(days){
    
    days = parseInt(days)
    if(typeof(days)!="number"){
        return false
    }

    return(days >= 1 && days<=30 )

}
/**
 * Validates CVV number of credit card
 * @param {3 Digit CVV number to validate} cvv 
 */
function isValidCVV(cvv){
    var regex = /^\d{3}$/; //match to 3 digits
    
    var result = cvv.match(regex); //return all possible matches 
    var length =0;
    (isNull(result)? length=0:length=result.length )
    console.log("length of match" + length)
    if(length===1){
        console.log("CCV Valid")
        return true // valid 3 digit
    }else{
        return false
    }
}
/**
 * 
 * @param {in MM/YY format} date 
 */
function isExpirationDateValid(date){
    var regex = /^0*\d\d\/\d\d$/ /* /^\d{2}\/\d{2}$/ */
    var result = date.match(regex)
    var length=0;
    (isNull(result)? length=0:length=result.length )
    
    if(length===1 && isInRange(date)){
        
        var expDate = new Date("20" + date.substring(3), date.substring(0,2));
        var todaysDate = new Date();
        console.log("exp date: " + expDate)
        if(expDate.getFullYear()>todaysDate.getFullYear()){
          return true
        }else if(expDate.getFullYear()==todaysDate.getFullYear()){
            if(expDate.getMonth()>=todaysDate.getMonth()){
                return true
            }
            return false
        }
     
    }else{
        return false
    }
}
/**
 * Validates credit card
 * @param {16 digit credit card number} number 
 */
function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
       if (!regex.test(number))
        return false;

    return luhnCheck(number);
}
/**
 * 
 * @param {Validates if Credit Card number is valid} val 
 */
function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}
/**
 * Checks if MM is within 0-12 and YY is within 0-99
 * @param {MM/YY} data 
 */
function isInRange(data){
    //check to see if my MM is within 1-12 and YY is within 0-99
    var month = parseInt(data.substring(0,2))
    var year = parseInt(data.substring(3))
   // console.log("range: " + month + " Year: "+ year)
    var validMonthRange = (month>=1&& month<=12? true:false)
    var validYearRange =  (year>=0&& year<=99? true:false)
   // console.log("month: " + validMonthRange + " Year: "+ validYearRange)
    return (validMonthRange && validYearRange)
}
function submit(){

}

function lastVerify(){


}
function isNull(data){
    return(data===null);
}
function isBlank(data){
    //return true if blank
   
    if(String(data).length > 0){
    
        return false // not blank
    }
    return true // blank
}