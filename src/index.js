const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {  

    let i=0, j=0, word = '', letter='', morse='', decode ='';

    for(i=0; i<expr.length; i+=10){
        word = expr.slice(i, i+10);
        for(j=0; j<word.length; j+=2){
            letter = word[j] + word[j+1];
    
            if (letter == '10'){
                morse += '.'; 
            }
             else if (letter == '11'){
                morse += '-';
            }
            else {
                morse='';
            }
            letter = '';
        }
        if(morse.length > 0){
            decode += MORSE_TABLE[morse];
        }
        else{
            decode+= ' ';
        }
        morse = '';   
    
    }
    return decode;
    
}

module.exports = {
    decode
}