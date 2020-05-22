function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validate() {
    var returnValue;
    var firstname = document.details.firstname.value;
    var lastname = document.details.lastname.value;
    var contact = document.details.contact.value;
    var email = document.details.email.value;
    var Address = document.details.Address.value;
 
    returnValue = true;
    if (firstname == "") {
        printError("Fnm", " Firstname cannot be empty");
        setTimeout("document.getElementById('Fnm').innerHTML=''", 2000);
        returnValue = false;
    }
    
    if (lastname == "") {
        printError("Lnm", " Lastname cannot be empty");
        setTimeout("document.getElementById('Lnm').innerHTML=''", 2000);
        returnValue = false;
    }
    
    if (contact == "") {
        printError("co", " Contact cannot be empty" );
        setTimeout("document.getElementById('co').innerHTML=''", 2000);
        returnValue = false;
    }
   
    if (email == "") {
        printError("em", " Email ID cannot be empty");
        setTimeout("document.getElementById('em').innerHTML=''", 2000);
        returnValue = false;

    }
   
    if (Address == "") {
        printError("ad", " Address cannot be empty");
        setTimeout("document.getElementById('ad').innerHTML=''", 2000);
        returnValue = false;
    } 
  return returnValue;
}
