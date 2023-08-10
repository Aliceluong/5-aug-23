// Dropdown
let services = document.querySelector('#services');
var dropDownServices = document.querySelector('.dropdown_services');
var dropdownContent = document.querySelector('#service-content')

var dropdownContents = document.querySelectorAll('#service-content')
console.log(dropdownContents)
console.log(dropdownContent)

function dropDown(event){
    event.preventDefault(); 
    dropDownServices.style.display = 'grid'; 
    
}

for (var  i = 0; i < dropdownContents.length; i++) {
    console.log(dropdownContents[i])
    dropdownContents[i].addEventListener('mouseover', dropDown); 
}
services.addEventListener('mouseover', dropDown); 
// dropdownContent.addEventListener('mouseover', dropDown); 
// for (let i = 0; i < dropdownContent.length; i++) {
//     dropDownContent[i].addEventListener('mouseover', dropDown)
// }
// close the dropdwon content
function dropDownClose(event){
    event.preventDefault();
    // var dropDownServices = document.querySelector('.dropdown_services');
    dropDownServices.style.display = 'none';
}

dropdownContent.addEventListener('mouseout',dropDownClose)
// form to be filled 
let submitButton = document.querySelector('#submit-btn')
const enquiryForm= document.querySelector('.enquiry-form')
submitButton.addEventListener('click',formAlert)
function formAlert(event){
    event.preventDefault()
    let firstName = document.querySelector('#firstname').value
    let lastName = document.querySelector('#lastname').value
    let email = document.querySelector('#email').value
    let number = document.querySelector('#number').value
    let boxConcern = document.querySelector('#box-concern-textarea').value
    if (firstName.length < 1){
        alert("Please put your First Name")
    }else if (lastName.length < 1){
        alert("Please put your Last Name")
    }else if (email.length< 1){
        alert("Please put your Email")
    }else if(number.length < 1){
        alert("Please put your Phone Number")
    }else if(boxConcern.length < 1){
        alert("Please put your concern")
    }else{
        alert("The Form has been successfully submitted")
    }
    }