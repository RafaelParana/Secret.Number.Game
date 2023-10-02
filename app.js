//Begin
alert("Are you Ready?!")
initialMessage();

//Range
let qtynumber = 10;

// Array to check if number already was sorted
let alreadySorted = [];

//Secret Number
let SN = chooseNumber();
// Active just to tests:console.log("Secret Number ", SN);

//Attempts
let ATTEMPT = 1;

//Function to show text in screen
function showText(TAG, TEXT){
    let field = document.querySelector(TAG);
    field.innerHTML = TEXT;
    responsiveVoice.speak(TEXT, "UK English Female", {rate:1.2});
}

//Function Initial Message
function initialMessage(){
showText("h1","Secret Number Game");
showText("p","Select a number between 1 to 10");
showText("button", "GO");
}

//Function to try
function TRY(){
    console.log("Clicked")
    let HIT = document.querySelector("input").value;
    let ATTWORD = ATTEMPT > 1? "Attempts":"Attempt";
    if (HIT == SN){
        alert(`You Got it ! The Secret Number is ${SN} \n (${ATTEMPT} ${ATTWORD}) `);
        showText("h1", "Congratulations!");
        showText("p",`The Secret Number is ${SN}`)
        document.getElementById("restart").removeAttribute("disabled");
    }else{

        if(HIT<SN){
            alert("Wrong...The Secret Number is Greater (Try Again)");
        }else{
            alert("Wrong...The Secret Number is Smaller (Try Again)");
    }
    eraseField();
        } ATTEMPT ++;
}



//Function to choose a number
function chooseNumber() {
   let numberChosen = parseInt(Math.random() * qtynumber + 1); 
   let qtyalreadySorted = alreadySorted.length;
   if(qtyalreadySorted == qtynumber){
    alreadySorted = [];
   }
   if(alreadySorted.includes(numberChosen)){
    chooseNumber();
   }else{
    alreadySorted.push(chooseNumber);
    return numberChosen;
   }
}

//Function Erase field
function eraseField(){
    HIT = document.querySelector("input");
    HIT.value = "";
}

//Function to Restart the game
function restartGame(){
    SN = chooseNumber();
    eraseField();
    ATTEMPT = 1;
    initialMessage();
    document.getElementById("restart").setAttribute("disabled", true);
}