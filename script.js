const form = document.querySelector('form')
const fullName = document.querySelector('#full__name');
const email= document.querySelector('#mail');
const phoneNumber = document.querySelector('#phone')
const password = document.querySelector('#password');

form.addEventListener('submit', function (e) {
    e.preventDefault();


    validate();
})

 function validate() {
  let word = fullName.value.trim(); 
  const phones = phoneNumber.value.trim();
  let pass = password.value.trim();   
  let wordcount = word.split(/\b[\s,\.-:;]*/);  
  let mailValue = email.value;
  let mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
   
   if (wordcount.length === 2) {
      success(fullName,"successful")  
      
     }
     else{
        failed(fullName,"input your fullname")
        returnS(fullName)
     }
    if (!mailformat.test(mailValue)) {
        failed(email,"email should contain @ and be in the right format")
    }
    else{
        success(email,'success')
    }
   if (!phones) {
        failed(phoneNumber,"please dont leave empty")
       
   }
   else if (!phonetest(phones)) {
       failed(phoneNumber,"phonenumber should start with a + and 14digits")
       returnS(phoneNumber)
   } else {
       success(phoneNumber,"successfful")
   }
   if (!pass) {
       failed(password,"empty")
   }
   else if (!passTest(pass)) {
       failed(password,"you need a strong password must contain 1 upper numeric and more than 6 characters")
       returnS(password)
   }
   else{
       success(password,'good to go')
   }
 }
function success(value,info) {
    let parents = value.parentElement
    let pcontent = parents.querySelector('p')

    pcontent.textContent=info;
    pcontent.className ='pcontents'
}
function failed(value,info) {
    let parents = value.parentElement
    let pcontent = parents.querySelector('p')

    pcontent.textContent=info;
    pcontent.className ='perror'
}
function phonetest(phone) {
    const getphone = /^\+?([0-9]{3})\)?([0-9]{4})?([0-9]{4})?([0-9]{3})$/;
    return getphone.test(phone)
}

function passTest(passwordss) {
    const getWord = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");
    return getWord.test(passwordss)
}

function returnS(contents){
   let reset = contents.value ="";
   return reset
}