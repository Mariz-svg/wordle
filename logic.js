let guess = "";
let numOfGuesses = 0;
let currentDiv=0;
const ANSWER_LENGTH = 5;
let currentGuess = "";
let wordOfTheDay;
const validateWord= "https://words.dev-apis.com/validate-word";
const getWord= "https://words.dev-apis.com/word-of-the-day";
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

function backspace(){
  if(currentDiv>0)
    {
      currentDiv--;
      let id = "letter-"+currentDiv;
      console.log(`Wiping now div: ${id}`);
      let square = document.getElementById(id);
      square.innerText = " ";
      currentGuess = currentGuess.substring(0,currentGuess.length-1);
      if(square.classList.contains("invalid")){
        //remove the red and go back to normal
        square.classList.remove("invalid");
      }
    }
    return;
}
async function validate(word){
    const promise = await fetch(validateWord, {
      method: "POST",
      body: JSON.stringify({"word": currentGuess})
    });
    const processedResponse= await promise.json();
    let result = processedResponse.validWord;
    return result;
}
function winning(){
  console.log(`We got inside winning function and we are on row ${numOfGuesses}`);
  switch(numOfGuesses){
    case 1:
      
      let box1 = document.getElementById("letter-0");
      box1.classList.add("win");
      let box2 = document.getElementById("letter-1");
      box2.classList.add("win");
      let box3 = document.getElementById("letter-2");
      box3.classList.add("win");
      let box4 = document.getElementById("letter-3");
      box4.classList.add("win");
      let box5 = document.getElementById("letter-4");
      box5.classList.add("win");
      break;
      case 2:
        let box6 = document.getElementById("letter-5");
        box6.classList.add("win");
        let box7 = document.getElementById("letter-6");
        box7.classList.add("win");
        let box8 = document.getElementById("letter-7");
        box8.classList.add("win");
        let box9 = document.getElementById("letter-8");
        box9.classList.add("win");
        let box10 = document.getElementById("letter-9");
        box10.classList.add("win");
        break;
      case 3:
        let box11 = document.getElementById("letter-10");
        box11.classList.add("win");
        let box12 = document.getElementById("letter-11");
        box12.classList.add("win");
        let box13 = document.getElementById("letter-12");
        box13.classList.add("win");
        let box14 = document.getElementById("letter-13");
        box14.classList.add("win");
        let box15 = document.getElementById("letter-14");
        box15.classList.add("win");
        break;
      case 4:
        let box16 = document.getElementById("letter-15");
        box16.classList.add("win");
        let box17 = document.getElementById("letter-16");
        box17.classList.add("win");
        let box18 = document.getElementById("letter-17");
        box18.classList.add("win");
        let box19 = document.getElementById("letter-18");
        box19.classList.add("win");
        let box20 = document.getElementById("letter-19");
        box20.classList.add("win");
        break;
      case 5:
          let box21 = document.getElementById("letter-20");
          box21.classList.add("win");
          let box22 = document.getElementById("letter-21");
          box22.classList.add("win");
          let box23 = document.getElementById("letter-22");
          box23.classList.add("win");
          let box24 = document.getElementById("letter-23");
          box24.classList.add("win");
          let box25 = document.getElementById("letter-24");
          box25.classList.add("win");
          break;
      case 6:
        let box26 = document.getElementById("letter-25");
        box26.classList.add("win");
        let box27 = document.getElementById("letter-26");
        box27.classList.add("win");
        let box28 = document.getElementById("letter-27");
        box28.classList.add("win");
        let box29 = document.getElementById("letter-28");
        box29.classList.add("win");
        let box30 = document.getElementById("letter-29");
        box30.classList.add("win");
        break;


  }
}
function checkGuess(word){
  if(currentGuess === wordOfTheDay)
        {
            // all of the boxes are green and alert that you win
            winning();
            alert("YOU WIN!");
        }
    
  
}
function invalidWord(){
  console.log("WE GOT INSIDE INVALIDWORD FUNCTION");
  console.log(`the row we are on is ${numOfGuesses}`);
  switch(numOfGuesses){
    case 1:
      
      let box1 = document.getElementById("letter-0");
      box1.classList.add("invalid");
      let box2 = document.getElementById("letter-1");
      box2.classList.add("invalid");
      let box3 = document.getElementById("letter-2");
      box3.classList.add("invalid");
      let box4 = document.getElementById("letter-3");
      box4.classList.add("invalid");
      let box5 = document.getElementById("letter-4");
      box5.classList.add("invalid");
      break;
      case 2:
        let box6 = document.getElementById("letter-5");
        box6.classList.add("invalid");
        let box7 = document.getElementById("letter-6");
        box7.classList.add("invalid");
        let box8 = document.getElementById("letter-7");
        box8.classList.add("invalid");
        let box9 = document.getElementById("letter-8");
        box9.classList.add("invalid");
        let box10 = document.getElementById("letter-9");
        box10.classList.add("invalid");
        break;
      case 3:
        let box11 = document.getElementById("letter-10");
        box11.classList.add("invalid");
        let box12 = document.getElementById("letter-11");
        box12.classList.add("invalid");
        let box13 = document.getElementById("letter-12");
        box13.classList.add("invalid");
        let box14 = document.getElementById("letter-13");
        box14.classList.add("invalid");
        let box15 = document.getElementById("letter-14");
        box15.classList.add("invalid");
        break;
      case 4:
        let box16 = document.getElementById("letter-15");
        box16.classList.add("invalid");
        let box17 = document.getElementById("letter-16");
        box17.classList.add("invalid");
        let box18 = document.getElementById("letter-17");
        box18.classList.add("invalid");
        let box19 = document.getElementById("letter-18");
        box19.classList.add("invalid");
        let box20 = document.getElementById("letter-19");
        box20.classList.add("invalid");
        break;
      case 5:
          let box21 = document.getElementById("letter-20");
          box21.classList.add("invalid");
          let box22 = document.getElementById("letter-21");
          box22.classList.add("invalid");
          let box23 = document.getElementById("letter-22");
          box23.classList.add("invalid");
          let box24 = document.getElementById("letter-23");
          box24.classList.add("invalid");
          let box25 = document.getElementById("letter-24");
          box25.classList.add("invalid");
          break;
      case 6:
        let box26 = document.getElementById("letter-25");
        box26.classList.add("invalid");
        let box27 = document.getElementById("letter-26");
        box27.classList.add("invalid");
        let box28 = document.getElementById("letter-27");
        box28.classList.add("invalid");
        let box29 = document.getElementById("letter-28");
        box29.classList.add("invalid");
        let box30 = document.getElementById("letter-29");
        box30.classList.add("invalid");
        break;


  }
}
async function enterCheck(){
  if (currentGuess.length === ANSWER_LENGTH){
    numOfGuesses+=1;
    const promise = await fetch(validateWord, {
      method: "POST",
      body: JSON.stringify({"word": currentGuess})
    });
    const processedResponse= await promise.json();
    let result = processedResponse.validWord;
    console.log(`Result of validate function is : ${result}`);
    if(result) //It is a valid word
    {
      console.log("Yaay It is a valid word");
      if(numOfGuesses<6){
        console.log("We still have chances to guess");
        numOfGuesses+=1;
        checkGuess(currentGuess);
        currentGuess="";
      }
      else{
        alert("You Lose");
      }
      
    }
    else {
      console.log("So it is invalid");
      
      invalidWord();
      numOfGuesses-=1;
      currentGuess="";
    }
    
  }
      
}
async function addLetter(key){
  if (currentGuess.length === ANSWER_LENGTH){
      //Here we want to keep over writing the same div
      console.log(`Current guess's length is ${currentGuess.length} and answer length is supposed to be ${ANSWER_LENGTH}`)
      let id = "letter-"+currentDiv;
      let square = document.getElementById(id);
      square.innerText = key;
      
      
      
    }
    else{
      let id = "letter-"+currentDiv;
      console.log(id);
      let square = document.getElementById(id);
      square.innerText = key;
      currentGuess+=key;
      console.log(currentGuess);
      console.log(`current div we are at = ${currentDiv} has the letter: ${key}`);
      currentDiv+=1;
    }
    
    
}
function keyPress(key,code){
  
      //alert(`Key pressed ${key} \r\n Key code value: ${code}`);
      // We want to make sure that they are only letters
      if(isLetter(key) && currentDiv<30){
          addLetter(key);
          //console.log(`current div we are at = ${currentDiv} and current guess is: ${currentGuess}`);
          console.log(`current guess number we are at is = ${numOfGuesses}`);
          //alert(`number of letters ${numberOfLetters}`);

      }else if(code == "Backspace"){
        backspace();
        
      }
      if(code == "Enter" && currentGuess.length==ANSWER_LENGTH)
      {
        console.log("We got inside Enter");
        enterCheck();
      }
   
}
async function getWordd(){
    const promise = await fetch(getWord);
    const processedWord = await promise.json();
    word = processedWord.word;
}
async function init() {
    const promise = await fetch(getWord);
    const processedWord = await promise.json();
    wordOfTheDay = processedWord.word;
    console.log(wordOfTheDay);
    document
      .addEventListener("keydown", function (event) {
        keyPress(event.key, event.code);
      });
    
  }
  init();