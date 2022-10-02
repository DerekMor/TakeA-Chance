//Click listeners for each button
document.getElementById('rock').onclick = play;
document.getElementById('paper').onclick = play;
document.getElementById('scissors').onclick = play;
document.getElementById('lizard').onclick = play;
document.getElementById('spock').onclick = play;

/**
 * The main function which is loaded from a user click
 */
function play(){
    let userGuess = this.id;
    let compGuess = getCompGuess();
    
    displayGuesses(userGuess, compGuess);
    checkWinner(userGuess, compGuess);
}


/**
 * Generates random number for computers guess
 * @returns computers guess
 */
function getCompGuess(){

    let compGuess = "";
    let num = Math.random();

    if(num < 0.20){
        compGuess = 'rock';
    }else if ((num > 0.19) && (num < 0.40)){
        compGuess = 'paper';
    }else if ((num > 0.39) && (num < 0.60)){
        compGuess = 'scissors';
    }else if ((num > 0.59) && (num < 0.80)){
        compGuess = 'lizard';
    }else {
        compGuess = 'spock';
    }

    return compGuess;
}

/**
 * Takes in the guesses for both user and computer then passes them into another function
 * which gives a returned value for us to change the icons in each guess box
 */
function displayGuesses(guess1, guess2){
    let userGuessIcon = findIcon(guess1);
    let compGuessIcon = findIcon(guess2);

    document.getElementById('your-choice').innerHTML = userGuessIcon;
    document.getElementById('comp-choice').innerHTML = compGuessIcon;
}

/**
 * Takes the id of the users and computers guesses and
 * @returns the html code for the icons
 */
function findIcon(guess){
    let iconHtml = '';
    if (guess === 'rock'){
        iconHtml = '<i class="fa-regular fa-hand-back-fist"></i>';
    } else if (guess === 'paper'){
        iconHtml = '<i class="fa-regular fa-hand"></i>';
    } else if (guess === 'scissors'){
        iconHtml = '<i class="fa-regular fa-hand-scissors"></i>';
    } else if (guess === 'lizard') {
        iconHtml = '<i class="fa-regular fa-hand-lizard"></i>';
    } else if (guess === 'spock') {
        iconHtml = '<i class="fa-regular fa-hand-spock"></i>';
    }

    return iconHtml;
}

function checkWinner(userGuess, compGuess){
    let user = userGuess;
    let comp = compGuess;

    // result messages
    let win = '<h3>You Win!</h3>';
    let lose = '<h3>You Lose!</h3>';
    let draw = '<h3>Draw!</h3>';
    //user picks rock
    if(user === 'rock'){
        if(comp === 'rock'){
            document.getElementById('result').innerHTML = draw;
        } else if (comp === 'scissors' || comp === 'lizard'){
            document.getElementById('result').innerHTML = win;
            incrementUserScore();
        } else {
            document.getElementById('result').innerHTML = lose;
            incrementCompScore();
        }
    }
    //user picks paper
    if(user === 'paper'){
        if(comp === 'paper'){
            document.getElementById('result').innerHTML = draw;
        } else if (comp === 'rock' || comp === 'spock'){
            document.getElementById('result').innerHTML = win;
            incrementUserScore();
        } else {
            document.getElementById('result').innerHTML = lose;
            incrementCompScore();
        }
    }
    //user picks scissors
    if(user === 'scissors'){
        if(comp === 'scissors'){
            document.getElementById('result').innerHTML = draw;
        } else if (comp === 'paper' || comp === 'lizard'){
            document.getElementById('result').innerHTML = win;
            incrementUserScore();
        } else {
            document.getElementById('result').innerHTML = lose;
            incrementCompScore();
        }
    }
    //user picks lizard
    if(user === 'lizard'){
        if(comp === 'lizard'){
            document.getElementById('result').innerHTML = draw;
        } else if (comp === 'paper' || comp === 'spock'){
            document.getElementById('result').innerHTML = win;
            incrementUserScore();
        } else {
            document.getElementById('result').innerHTML = lose;
            incrementCompScore();
        }
    }
    //user picks spock
    if(user === 'spock'){
        if(comp === 'spock'){
            document.getElementById('result').innerHTML = draw;
        } else if (comp === 'scissors' || comp === 'rock'){
            document.getElementById('result').innerHTML = win;
            incrementUserScore();
        } else {
            document.getElementById('result').innerHTML = lose;
            incrementCompScore();
        }
    }
}

function incrementUserScore(){
    let score = parseInt(document.getElementById('you').innerText) + 1;
    document.getElementById('you').innerText = score;
}

function incrementCompScore(){
    let score = parseInt(document.getElementById('comp').innerText) + 1;
    document.getElementById('comp').innerText = score;
}