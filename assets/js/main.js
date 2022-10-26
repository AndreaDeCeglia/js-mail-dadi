
//VARIABLES DECLARATION AND INITIALIZATION

//Authorized mail addresses
let mailList = [
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
  
  // button submit check mail
  const submitButton = document.getElementById("checkBtn");
  
  
  //FUNCTION CLICK TO CHECK MAIL AUTHORIZATION
  submitButton.addEventListener("click", function(){

    
  // usermail
  let userMail = document.getElementById("inputMail").value;
  
  // output for usermail
  let outputMail = document.getElementById("outputMail");
  
    //Conditional statement for authorization
    for(let i = 0; i < mailList.length; i++){
      
      if (userMail == mailList[i]){
        
        //checked = true;

      outputMail.innerHTML = 'Buona fortuna!';

      break;

      } else if( i== (mailList.length - 1)){

        outputMail.innerHTML = `Ci spiace, devi prima iscriverti !!`;
      }
    }
    

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


let player1wins = [];
let pcWins = [];

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
    player1wins.push('win');

  }else if(player2Number > player1Number ){
    outputResult = 'what a pity !!! You lost !!';
    pcWins.push('win');

  }else{
    outputResult = 'no winner !! better than nothing !! ';
  }
  
  numbers.append(outputResult);

  
document.getElementById('p1w').innerText = `you won ${player1wins.length} times !!`
document.getElementById('p2w').innerText = `pc won ${pcWins.length} times !!`

} ) } )
