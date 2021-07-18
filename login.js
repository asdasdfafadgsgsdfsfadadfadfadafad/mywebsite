var first = document.getElementsByClassName("first");
var last = document.getElementsByClassName("last");
var email = document.getElementsByClassName("emailzz");
var password = document.getElementsByClassName("password");
var repeatpassword = document.getElementsByClassName("repeatpassword");
var signupbutton = document.getElementsByClassName("signup");
var errormessage = document.getElementsByClassName("error");
var database = []
const validpassword = (password) => ( 8 <= Number(password.toString().length) && Number(password.toString().length) <= 25 ) 
const validemail = (email) =>{
    var a=0
    for (x of email){
       if (x === "@"){
         a=+1
       }
    }
    if (a === 1 && email.includes(".com")){
      return true
    }
    return false
}
const validname = (name) => (3 <= Number(name.toString().length) && Number(name.toString().length) <= 25 && typeof name !== "number")
const similarpassword= (password1,password2) => (password1 === password2)
const shake = () => {
  errormessage[0].classList.add("animate__animated")
  errormessage[0].classList.add("animate__shakeX")
  console.log(errormessage[0].classList)
  setTimeout((a) =>  {errormessage[0].classList.remove("animate__animated") ;
    errormessage[0].classList.remove("animate__shakeX")} ,500)
  console.log(errormessage[0].classList)
}
signupbutton[0].addEventListener("click",function(){
      if (!(validname(first[0].value))){
        first[0].value = ""
        errormessage[0].textContent=""
        errormessage[0].textContent="Please enter a Valid Name"
        shake()
        return ""
      }   
      if (!(validname(last[0].value))){
        last[0].value = ""
        errormessage[0].textContent=""
        errormessage[0].textContent="Please enter a Valid Name"
        shake()
        return ""
      }   
      if (!(validemail(email[0].value))){
        email[0].value = ""
        errormessage[0].textContent=""
        errormessage[0].textContent="Please enter a Valid Email"
        shake()
        return ""
      }   
      if (!(validpassword(password[0].value))){
        password[0].value = ""
        repeatpassword[0].value = ""
        errormessage[0].textContent=""
        errormessage[0].textContent="Please enter a Valid Password"
        shake()
        return ""
      }
      if (!(similarpassword(password[0].value,repeatpassword[0].value))){
        repeatpassword[0].value = ""
        errormessage[0].textContent=""
        errormessage[0].textContent="Password dosent match"
        shake()
        return ""
      }
      errormessage[0].textContent=""
      errormessage[0].style.color="blue"
      errormessage[0].textContent="You have successfully signed up you can login now"
})












