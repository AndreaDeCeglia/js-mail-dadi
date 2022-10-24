
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

//VARIABLES DECLARATION AND INITIALIZATION

//button to start game
const playButton = document.getElementById('btn-play');

//chosen numbers
const numbers = document.getElementById('output-numeri')

//Player 1 (user) number
let outputPlayer1;

//Player 1 (computer) number
let outputPlayer2;

//Final result
let outputResult;

//FUNCTION CLICK TO START GAME

playButton.addEventListener("click", function(){

  numbers.innerHTML = " ";

  //random number for Player1 (user)
  let player1Number = Math.ceil(Math.random() * 6);
  //random number for Player2 (computer)
  let player2Number = Math.ceil(Math.random() * 6);

  //outptut element creation for numbers
  outputPlayer1 = document.createElement('div');
  outputPlayer2 = document.createElement('div');

  outputPlayer1.innerHTML = `you got  ${player1Number}`;
  outputPlayer2.innerHTML = `pc got  ${player2Number}`;
  numbers.append(outputPlayer1);
  numbers.append(outputPlayer2);

  //outptut element creation for winner declaration
  outputResult = document.createElement('div');
  outputResult.innerHTML = outputResult;

  if (player1Number > player2Number){
    outputResult = 'Great !! You won !!';

  }else if(player2Number > player1Number ){
    outputResult = 'what a pity !!! You lost !!';

  }else{
    outputResult = 'no winner !! better than nothing !!';
  }
  
  numbers.append(outputResult);

})