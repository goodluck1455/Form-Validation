


function validate(){

let fullName = document.querySelector("#fullName").value;
let emailAddress = document.querySelector("#emailAddress").value;
let mobileNumbers = document.querySelector("#mobileNumbers").value;
let dateOfBirth = document.querySelector("#dateOfBirth").value;
let nationality = document.querySelector("#nationality").value;
let stateOfOrgin = document.querySelector("#stateOfOrgin").value;


let showValidateForm = document.querySelector(".validate");
showValidateForm.style.padding = "10px";

let text;

let currentDate = new Date();
let commenceDate = new Date(2020, 8, 29, 12,);
let deadLine = new Date(2020, 8, 31, 11, 59);
let regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z])$/;


if(fullName.length <=8 || fullName == ""){
    text = "Please enter your full name";
    showValidateForm.innerHTML = text;
    return false;
}


if(regx.test(emailAddress) === true || emailAddress === null || emailAddress === ""){
    text = "Please enter a valid email address";
    showValidateForm.innerHTML = text;
    return false;
}
if(mobileNumbers.length <=10){
    text = "Please enter your phone number";
    showValidateForm.innerHTML = text;
    return false;
}
if(dateOfBirth == null || dateOfBirth == ""){
    text = "Please enter your Date of birth";
    showValidateForm.innerHTML = text;
    return false;
}
if(nationality == null || nationality == "" ){
    text = "Please enter the name of your Country";
    showValidateForm.innerHTML = text;
    return false;
}
if(stateOfOrgin == null || stateOfOrgin == "" ){
    text = "Please enter the name of your Country";
    showValidateForm.innerHTML = text;
    return false;
}

 if(currentDate >= commenceDate && currentDate <= deadLine){
     alert("Your registration was successful");
     return true;
 }

else{
    alert("Registration period has ended");
    showValidateForm.style.display = "none";
    
   
}
// else{
//     text = "Please enter the right email format";
//     showValidateForm.innerHTML = text;
//     return false;
// }




    

  
}