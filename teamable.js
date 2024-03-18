
function editprofile(){
    var defaultname = document.getElementById("namefeild")
    var name =document.getElementsByTagName("b") [0].textContent
    defaultname.value = name

    var email = document.getElementsByTagName("b") [1].textContent
    var inputemail = document.getElementById("emailfeild")
    inputemail.value = email

    var inputinterest = document.getElementById("interestfeild")
    var interest = document.getElementsByTagName("b") [2].textContent
    inputinterest.value = interest
    
    new Datepicker('#birthday')
    // var bday = document.getElementById("birthday") 
    // var bDay = document.getElementsByTagName("b") [3].textContent
    // bday.value = bDay

    document.getElementById("Edit").style.display = "block"
    document.getElementById("whole").style.display = "none"
}
function updateprofile(){
    var newname = document.getElementById("namefeild").value
    var name = document.getElementsByTagName("b") [0]
    name.textContent = newname

    var newemail = document.getElementById("emailfeild").value
    var email = document.getElementsByTagName("b") [1]
    if(validator.isEmail(newemail)){
        email.textContent = newemail
    }
    else{
        alert("Invalid Email Adress")
    }
    var newinterest = document.getElementById("interestfeild").value
    var interest = document.getElementsByTagName("b") [2]
    interest.textContent = newinterest

    //var birthday = new Datepicker('#birthday')
    var bday = document.getElementById("birthday").value 
    var bDay = document.getElementsByTagName("b") [3]
    bDay.textContent = bday
    
    document.getElementById("whole").style.display = "block"
    document.getElementById("Edit").style.display = "none"
}
// document.getElementsByTagName("input") [0].value
// document.getElementsByTagName("b") [0].textContent