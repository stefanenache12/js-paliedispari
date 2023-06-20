let button = document.getElementById('button');

button.addEventListener('click',
    function(){
    let word = document.getElementById('word');
    let wordInput = word.value;
    
    let reverseWord = isPalidroma(word);

    if(wordInput == reverseWord){
    alert('La parola è palindroma');
    } else {
    alert('La parola non è palindroma');
    };

    function isPalidroma(string){
        let splitWord = wordInput.split('');
        splitWord = splitWord.reverse('');
        splitWord = splitWord.join('');
    
        return splitWord;
    }
    
})




