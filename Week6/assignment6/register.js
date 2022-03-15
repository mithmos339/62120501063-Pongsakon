window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var lastname = document.forms["myForm"]["lastname"];
    var gender = document.forms["myForm"]["gender"];
    var birtday = document.forms["myForm"]["bday"];
    var email = document.forms["myForm"]["email"];
    var username = document.forms["myForm"]["username"];
    var password = document.forms["myForm"]["password"];
    var errormsg = document.getElementById("errormsg")
    errormsg.innerText = "";
    
    var result = true;

    if(lastname.value == ""){
        errormsg.innerText += "lastname,"
        result = false; 
    }
    if(gender.value == ""){
        errormsg.innerText += "gender,"
        result = false; 
    }
    if(birtday.value == ""){
        errormsg.innerText += "birthday,"
        result = false; 
    }
    if(email.value == ""){
        errormsg.innerText += "email,"
        result = false; 
    }
    if(username.value == ""){
        errormsg.innerText += "username,"
        result = false; 
    }
    if(password[0].value != password[1].value )
    {
        errormsg.innerText += "Incorrect password,"
        result = false;
        alert("Incorrect password,");
    }
    if (result == false)
    {
        return false;
    }
}