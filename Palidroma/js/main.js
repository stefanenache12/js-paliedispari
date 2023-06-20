let word = prompt('Scrivi');

let reverseWord = isPalidroma(word);

if(word == reverseWord){
    alert('La parola è palindroma');
} else {
    alert('La parola non è palindroma');
};

function isPalidroma(string){
    let splitWord = word.split('');
    splitWord = splitWord.reverse('');
    splitWord = splitWord.join('');

    return splitWord;
}
  