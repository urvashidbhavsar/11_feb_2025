// click event, keyup event, blur event, submit event

function checkValidate() {
    let fn = document.getElementById("fname");
    let ln = document.getElementById("lname");
    if (fn.value == "") {
        document.getElementById("err1").innerHTML = "Enter Firstname!!!"
    }
    if (ln.value == "") {
        document.getElementById("err2").innerHTML = "Enter Lastname!!!"
    }
    return false
}
// blur event
function checknull(input, error) {
    if (input.value == "") {
        document.getElementById(error).innerHTML = "Field required!!!!"
        input.style.borderColor = "red"
    }
    return false;
}
function checkselection(select, error) {
    if (select.value == "-1") {
        document.getElementById(error).innerHTML = "Select Field!!!!"
        select.style.borderColor = "red"
    }
    return false;
}
function checkedvalue(select, error) {
    if (select.checked == false) {
        document.getElementById(error).innerHTML = "Select Field!!!!"
    }
    return false
}

// keyboard Event
function checkNamePtn(input, error) {
    let ptn = /^[a-z]*$/i
    // let ptn = /^[A-Z][a-z]*$/
    if (!ptn.test(input.value)) {
        document.getElementById(error).innerHTML = "Invalid Name!!!"
        input.style.borderColor = "red"
    } else if (input.value.length < 2) {
        document.getElementById(error).innerHTML = "Minimum 2 character required!!!!"
        input.style.borderColor = "red"
    } else {
        document.getElementById(error).innerHTML = ""
        input.style.borderColor = "black"
    }
    return false
}

// input event 
function allowed(inp) {
    inp.value = inp.value.replace(/[\d\W]/, "")
}

let allinp = document.querySelectorAll(".myinp")
allinp.forEach(item => {
    item.addEventListener("input", () => {
        item.value = item.value.toUpperCase()
    })
})
// ------------------------------------------------- 
function checkNumber(input, error, len) {
    let num = /^[6-9][0-9]*$/
    if (!num.test(input.value)) {
        document.getElementById(error).innerHTML = "Invalid Value!!!!"
        input.style.borderColor = "red"
    } else if (input.value.length < len) {
        document.getElementById(error).innerHTML = "Enter 10 Digits"
        input.style.borderColor = "red"
    } else {
        document.getElementById(error).innerHTML = ""
        input.style.borderColor = "black"
    }
    return false;
}

function emailvalidate(input, error) {
    // let eptn = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let eptn = /^[a-z0-9\.$#&_]*@[a-z]*(\.\w{2,3})+$/i
    if (eptn.test(input.value)) {
        document.getElementById(error).innerHTML = ""
        input.style.borderColor = "black"
    } else {
        document.getElementById(error).innerHTML = "Invalid Email!!!"
        input.style.borderColor = "red"
    }
    return false
}

function passwordValidate(input, error) {
    let pptn = /^[A-Z][a-z0-9]*[\.#@$%&][a-z0-9]*$/
    if (pptn.test(input.value)) {
        document.getElementById(error).innerHTML = ""
        input.style.borderColor = "black"
    } else {
        document.getElementById(error).innerHTML = "Password has one uppercase and others are lowercase, special letters(.$%#&@) and digits. first letter must be Capital."
        input.style.borderColor = "red"
    }
    return false
}

function ComparePass(pass, cpass, error) {
    let pwd = document.getElementById(pass)
    if (cpass.value != pwd.value) {
        document.getElementById(error).innerHTML = "Password Not Match"
        cpass.style.borderColor = "red"
    } else {
        document.getElementById(error).innerHTML = ""
        cpass.style.borderColor = "black"
    }
    return false
}

function Showpass(pass, cpass) {
    let pwd = document.getElementById(pass)
    let cpwd = document.getElementById(cpass)
    if (pwd.type == "password" && cpwd.type == "password") {
        pwd.type = "text"
        cpwd.type = "text"
    } else {
        pwd.type = "password"
        cpwd.type = "password"
    }
    return false
}

