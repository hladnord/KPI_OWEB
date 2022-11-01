// TASK 1
function FormData(){
    //FullName
    const fieldFullName = document.getElementById("FullName").value;
    const checkFullName = /\w+\s+[A-Z]\.+[A-Z]\./;
    const caseFullName =  checkFullName.test(fieldFullName);
    if(caseFullName) {
        document.getElementById('ValidFullName').innerHTML =`Full Name: ${fieldFullName}`;
        document.getElementById('ValidFullName').style.color = "#00FF40";
    } else {
        document.getElementById('ValidFullName').innerHTML = "Incorrect full name";
        document.getElementById('ValidFullName').style.color = "#9E0000";
    }

    //Group
    const fieldGroup = document.getElementById("Group").value;
    const checkGroup = /[A-Z][A-Z]+\-+[0-9][0-9]/;
    const caseGroup =  checkGroup.test(fieldGroup);
    if(caseGroup) {
        document.getElementById('ValidGroup').innerHTML = `Group: ${fieldGroup}`;
        document.getElementById('ValidGroup').style.color = "#00FF40";
    } else {
        document.getElementById('ValidGroup').innerHTML = "Incorrect group";
        document.getElementById('ValidGroup').style.color = "#9E0000";
    }

    //Phone Number
    const fieldPhoneNumber = document.getElementById("PhoneNumber").value;
    const checkPhoneNumber = /((\(\d{3}\) ?)|(\d{3}-))?\-\d{3}-\d{2}-\d{2}/;
    const casePhoneNumber =  checkPhoneNumber.test(fieldPhoneNumber);
    if(casePhoneNumber) {
        document.getElementById('ValidPhoneNumber').innerHTML =`Phone Number: ${fieldPhoneNumber}`;
        document.getElementById('ValidPhoneNumber').style.color = "#00FF40";
    } else {
        document.getElementById('ValidPhoneNumber').innerHTML = "Incorrect phone number";
        document.getElementById('ValidPhoneNumber').style.color = "#9E0000";
    }

    //Address
    const fieldAddress = document.getElementById("Address").value;
    const checkAddress = /^c.\s\w{1,15}/;
    const caseAddress =  checkAddress.test(fieldAddress);
    if(caseAddress) {
        document.getElementById('ValidAddress').innerHTML = `Address: ${fieldAddress}`;
        document.getElementById('ValidAddress').style.color = "#00FF40";
    } else {
        document.getElementById('ValidAddress').innerHTML = "Incorrect address";
        document.getElementById('ValidAddress').style.color = "#9E0000";
    }

    //валідність телеграму
    const fieldEmail = document.getElementById("Email").value;
    const checkEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const caseEmail =  checkEmail.test(fieldEmail);
    if(caseEmail) {
        document.getElementById('ValidEmail').innerHTML = `Email: ${fieldEmail}`;
        document.getElementById('ValidEmail').style.color = "#00FF40";
    } else {
        document.getElementById('ValidEmail').innerHTML = "Incorrect email";
        document.getElementById('ValidEmail').style.color = "#9E0000";
    }
}

function FullNameCase(){
    const fieldFullName = document.getElementById("FullName").value;
    const checkFullName = /\w+\s+[A-Z]\.+[A-Z]\./;
    const caseFullName =  checkFullName.test(fieldFullName);
    let p = document.querySelector(".info1");
    if(caseFullName) {
        document.getElementById("FullName").style.border='solid green';
        p.innerHTML = "";
    } else {
        document.getElementById("FullName").style.border='solid red';
        p.innerHTML = "";
        p.style.color = "red";
        p.innerHTML += "Please enter full name in the format: TTTT T.T.";
    }
}

function GroupCase(){
    const fieldGroup = document.getElementById("Group").value;
    const checkGroup = /[A-Z][A-Z]+\-+[0-9][0-9]/;
    const caseGroup =  checkGroup.test(fieldGroup);
    let p = document.querySelector(".info2");
    if(caseGroup) {
        document.getElementById("Group").style.border='solid green';
        p.innerHTML = "";
    } else {
        document.getElementById("Group").style.border='solid red';
        p.innerHTML = "";
        p.style.color = "red";
        p.innerHTML = "Please enter group in the format: TT-NN";
    }
}

function PhoneNumberCase(){
    const fieldPhoneNumber = document.getElementById("PhoneNumber").value;
    const checkPhoneNumber = /((\(\d{3}\) ?)|(\d{3}-))?\-\d{3}-\d{2}-\d{2}/;
    const casePhoneNumber =  checkPhoneNumber.test(fieldPhoneNumber);
    let p = document.querySelector(".info3");
    if(casePhoneNumber) {
        document.getElementById("PhoneNumber").style.border='solid green';
        p.innerHTML = "";
    } else {
        document.getElementById("PhoneNumber").style.border='solid red';
        p.innerHTML = "";
        p.style.color = "red";
        p.innerHTML = "Please enter phone number in the format: (NNN)-NNN-NN-NN";
    }
}

function AddressCase(){
    const fieldAddress = document.getElementById("Address").value;
    const checkAddress = /^c.\s\w{1,15}/;
    const caseAddress =  checkAddress.test(fieldAddress);
    let p = document.querySelector(".info4");
    if(caseAddress) {
        document.getElementById("Address").style.border='solid green';
        p.innerHTML = "";
    } else {
        document.getElementById("Address").style.border='solid red';
        p.innerHTML = "";
        p.style.color = "red";
        p.innerHTML = "Please enter address in the format: c. TTTT";
    }
}

function EmailCase(){
    const fieldEmail = document.getElementById("Email").value;
    const checkEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const caseEmail =  checkEmail.test(fieldEmail);
    let p = document.querySelector(".info5");
    if(caseEmail) {
        document.getElementById("Email").style.border='solid green';
        p.innerHTML = "";
    } else {
        document.getElementById("Email").style.border='solid red';
        p.innerHTML = "";
        p.style.color = "red";
        p.innerHTML = "Please enter email in the format: TTTT@TTTT.com";
    }
}

//TASK 2
const cell10 = document.getElementById("cell10");
const colorSelected = document.getElementById('colorSelected');

function randomColor(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
}

cell10.addEventListener("mouseover", function() {
    cell10.style.backgroundColor = `rgb(${randomColor(0, 255)}, ${randomColor(0, 255)}, ${randomColor(0, 255)})`;
});

cell10.addEventListener("click", function() {
    cell10.style.backgroundColor= colorSelected.value;
});

cell10.addEventListener("dblclick", function() {
    document.getElementById('cell8').style.backgroundColor = colorSelected.value;
    document.getElementById('cell10').style.backgroundColor = colorSelected.value;
    document.getElementById('cell12').style.backgroundColor = colorSelected.value;
});