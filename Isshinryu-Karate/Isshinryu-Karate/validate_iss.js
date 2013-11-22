function validateFName(){
	var x=document.forms["signUp"]["fName"].value;
	var re = new RegExp(/^\s*[A-Z][a-z]{2,10}\s*$/);
    var m = re.exec(x);
    if (m==null){
        alert("Please fill out first name properly!(ex. Aaron, Mary)");
            return false;
        }else{
            return true;
        }
}
function validateLName(){
	var x=document.forms["signUp"]["lName"].value;
	var re = new RegExp(/^\s*([A-Z][a-z]{2,10}|[A-Z]\'[A-Z][a-z]{2,10}|[A-Z][a-z]{0,3}\s*[A-Z][a-z]{2,10}|[A-Z][a-z]{0,3}[A-Z][a-z]{2,10})\s*$/);
    var m = re.exec(x);
    if (m==null){
        alert("Please fill out last name properly!(ex. Washington, O'Reily, McNeil)");
            return false;
        }else{
            return true;
        }
}
function validatePNumber(){
	var x=document.forms["signUp"]["phone"].value;
	var re = new RegExp(/^\s*([0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{3}-[0-9]{4})\s*$/);
    var m = re.exec(x);
    if (m==null){
        alert("Please fill out phone number properly!");
            return false;
        }else{
            return true;
        }
}
function validateEMail(){
	var x=document.forms["signUp"]["email"].value;
	var re = new RegExp(/^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/);
    var m = re.exec(x);
    if (m==null){
        alert("Please fill out E-Mail properly!");
            return false;
        }else{
            return true;
        }
}
function validateAddress(){
	var x=document.forms["signUp"]["address1"].value;
	var re = new RegExp(//);
    var m = re.exec(x);
    if (m==null){
        alert("Please fill out E-Mail properly!");
            return false;
        }else{
            return true;
        }
}
function validateForm(){
    if(!validateFName())return false;
    if(!validateLName())return false;
    return true;