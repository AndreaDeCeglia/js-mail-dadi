
//VARIABLES DECLARATION AND INITIALIZATION

//Authorized mail addresses
const mailList = [
    "jessica.lastname@gmail.com",
    "michele.lastname@gmail.com",
    "topo.gigio@gmail.com",
    "ale.prof@gmail.com",
    "ale.ale@gmail.com",
    "anna.anna@gmail.com",
    "alessia.ditorino@gmail.com",
    "deceglia89@gmail.com",
    "ilario.ditorino@gmail.com",
    "emma.epperò@gmail.com"
  ];
  
  // if mail is not present on authorized list
  let checked = false;
  
  // button submit check mail
  const submitButton = document.getElementById("checkBtn");
  
  // usermail
  let userMail = document.getElementById("inputMail").value;
  
  // output for usermail
  const outputMail = document.getElementById("outputMail");
  
  //FUNCTION CLICK TO CHECK MAIL AUTHORIZATION
  submitButton.addEventListener("click", function(){
  
    //Conditional statement for authorization
    for(let i = 0; i < mailList.length; i++){
      if (userMail === mailList[i]){
        checked = true;
      }
    }
    
    // Output print on page
    if(checked === true){
      outputMail.innerHTML = 'Buona fortuna!';
    }
    else{
      outputMail.innerHTML = 'Ci dispiace, non sei autorizzat(a/e/i/o/u/y) a giocare! Inserire una mail valida.';
    }
    checked=false;
    userMail.value=" ";
  });

