
var controls=[];

function createControl(one,two){
    return rtn={"name":one,"last_name":two}
}
function loop(){

    for(var a=0; a <= 5; a++){
        controls[a]= createControl("gene"+a, "radcliffe"+a);
    }
}