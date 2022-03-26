window.addEventListener ('load', init);



let time = 5;

let score = 0;

let isPlaying;

// DOM Elements 

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector ('#seconds');



const words = [

'pay secrecy',
'pay transparency',
'feminism',
'gender',
'equity',
'bias',
'systemic racism',
'salary transparency',
'collectivism',
'equity',
'diversity',
'inclusion',
'employee retention',
'great resignation',
'pay equity',
'79 cents',
'occupational segregation',
'64 cents',
'strategic leadership',
'work motivation',
'flexibility',
'work from home',
'workforce development',
'Girls Just Wanna Get Paid!'



];


//Initialize Game

function init() {
   
    seconds.innerHTML = 5;


    // load word from array
    showWord(words);

    // start matching on word input
    wordInput.addEventListener('input', startMatch);

    // Call countdown every second 

    setInterval(countdown, 1000);

    // check game status

    setInterval(checkStatus, 50);
}

//start match 

function startMatch(){
    if(matchWords()) {
        isPlaying = true;
        time = 5 + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }


    // If score is -1, display 0
    if(score === -1)  {
     scoreDisplay.innerHTML = 0;
    } else {
      scoreDisplay.innerHTML = score;
    }
}

//Match current Word to word Input 

function matchWords() { 
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'correct';
        return true;
        } else {
         message.innerHTML = '';
         return false; 
    }
}


//Pick & show random word 
function showWord(words) {
    //Generate random array index 
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
//make sre time is not run out 
    if (time > 0) {
        //Decrement 
        time--;

    } else if (time === 0) {
        //game is over
        isPlaying = false;

        }
        //show time 
        timeDisplay.innerHTML= time;


    }

//Check game status 
function checkStatus() {
    if (!isPlaying && time === 0 )  {
        message.innerHTML = '“You only lose when you stop trying. Try Again!”';
        score = -1; 
    }

}

