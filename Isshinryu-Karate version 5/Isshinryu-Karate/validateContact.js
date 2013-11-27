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

function validateEMail(){
	var x=document.forms["signUp"]["email"].value;
	var re = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
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
	if(!validateEMail())return false;
	return true;
	}