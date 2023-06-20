let playButton = document.getElementById('play');
let user = document.getElementById('user');
let cpu = document.getElementById('cpu');
let result = document.getElementById('result');

function cpuRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function isEven (number){
    if(number % 2 == 0){
        return true;
    }else{
        return false;
    }
}

playButton.addEventListener('click',
    function(){

    let userNumber = parseInt(document.getElementById('user-number').value);
    let userChoice= document.getElementById('user-choice').value;
    let cpuNumber = cpuRandomNumber(1,6);
    let sum = userNumber + cpuNumber;

    user.innerHTML = userNumber;
    cpu.innerHTML = cpuNumber;

    if(isEven(sum) && userChoice == 'Pari'){
        result.innerHTML = 'HAI VINTO';
    }else if ( !isEven(sum) && userChoice == 'Dispari')
        result.innerHTML = 'HAI VINTO';
    else {
        result.innerHTML = 'HAI PERSO';
    }

})








