function invalidateField(elementID){
    var element = document.querySelector(elementID)

    var valid = element.parentElement.classList.contains("input-valid")
    if(valid){
        element.parentElement.classList.remove("input-valid")
    }
    element.parentElement.classList.add("input-invalid")
}

function validateField(elementId){

    var element = document.querySelector(elementId);
    
    var invalid =element.parentElement.classList.contains("input-invalid");
   
    if(invalid){
        element.parentElement.classList.remove("input-invalid")
    }
        element.parentElement.classList.add("input-valid")
    
    return
}
function isBlank(data){
    //return true if blank
   
    if(String(data).length > 0){
    
        return false // not blank
    }
    return true // blank
}
function isNameValid(name){
 
    if(!isBlank(name)){
       
        return true//return valid
    }
   
    return false //return invalid
   
    
}
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


function isMakeValid(make){
     //return true if valid
     
    return((typeof(make)=="string") && !isBlank(make));
    
}
function isYearValid(year){
    //return true if valid
    var today = new Date();
    year =parseInt(year)

   return(typeof(year)=="number" && year >= 1900 && year <= today.getFullYear())

}
function isModelValid(model){
   
    return((typeof(model)=="string") && !isBlank(model));
    
    
}
/**
 * is Date Valid
 */
function isDateValid(date){
    if(!isBlank(date)){
        return true
    }
    return false
}
function isNumberOfDaysValid(days){
    
    days = parseInt(days)
    if(typeof(days)!="number"){
        return false
    }

    return(days >= 1 && days<=30 )

}
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
function isExpirationDateValid(date){
    var regex = /^\d{2}\/\d{2}$/
    var result = date.match(regex)
    var length=0;
    (isNull(result)? length=0:length=result.length )
    if(length===1){
        var expDate = new Date("20" + date.substring(3), date.substring(0,2));
        var todaysDate = new Date();
        if(expDate.getFullYear()<todaysDate.getFullYear()){
            if(expDate.getFullMonth()>todaysDate.getFullMonth()){
            return false
            }
        }
        return true // valid 3 digit
    }else{
        return false
    }
}
function isNull(data){
    return(data===null);
}