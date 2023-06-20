let userChoice = 'Pari';

let userNumber = 4 ;
console.log('USER',userNumber)

let cpuNumber = cpuRandomNumber(1,6);
console.log('CPU',cpuNumber)

let sum = userNumber + cpuNumber;

if(isEven(sum) && userChoice == 'Pari'){
    alert('Hai Vinto')
}else {
    alert('Hai Perso')
}

console.log('SUM',sum)

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

