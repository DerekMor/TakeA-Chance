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
    console.log(userGuess);
    console.log(compGuess);
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