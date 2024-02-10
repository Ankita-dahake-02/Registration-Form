
let btn = document.getElementById("btn")
btn.addEventListener('click', displaydata)

function displaydata() {

    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var city = document.getElementById("city").value
    var phone = document.getElementById("phone").value
    var male = document.getElementById("male")
    var female = document.getElementById("female")

    if (name == "" || email == "" || city == "" || phone == "") {
        alert("please fill all the the boxes")
        return
    }
    else if (name.includes("@")) {
        return alert("Please write Proper name")
    }
    else if (name.includes("#")) {
        return alert("Please write Proper name")
    }
    else if (name.includes("*")) {
        return alert("Please write Proper name")
    }
    else if (email.search(/[!\@]/) == -1) {
        return alert("you are missing on @ in your email")

    }
    else if (email.search(/[!\.]/) == -1) {
        return alert("you are missing on dot(.) in your email")

    }
    else if (email.charAt(email.length - 4) != ".") {
        return alert("expecting three charaters after dot(.)")

    }
    else if (isNaN(phone)) {
        return alert("only numbers are acceptable in contact no. feild")
    }
    else if (phone.length < 10) {
        return alert("Your contact no.is less than 10 digit please write correct contact no.")
    }
    else if (male.checked == true) {
        var getdata = 'name:' + name + "<br>"
        getdata += 'email:' + email + "<br>"
        getdata += 'city:' + city + "<br>"
        getdata += 'phone:' + phone + "<br>"
        getdata += 'gender:' + male.value + "<br>"
    }
    else if (female.checked == true) {
        var getdata = 'name:' + name + "<br>"
        getdata += 'email:' + email + "<br>"
        getdata += 'city:' + city + "<br>"
        getdata += 'phone:' + phone + "<br>"
        getdata += 'gender:' + female.value + "<br>"

    }
    else {
        alert("please check one of the radio btn option")
        return false
    }

    document.getElementById('userinfo').innerHTML = getdata
}