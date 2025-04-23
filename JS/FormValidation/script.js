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