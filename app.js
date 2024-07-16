let drownNumberList = [];
let limitNumber = 3; 
let secretNumber = numberGenerator();
let quantitiesAnswer = 0;


function showTextScreen(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text,'US English Male');
}

function showInitialText(){
showTextScreen('h1','Play of Secret Number');
showTextScreen('p',`Choose a number between 1 and ${limitNumber}`);
}

showInitialText()

function verifierNumber(){
    let informedNumber = document.querySelector('input').value;
    quantitiesAnswer++;
    //console.log(informedNumber == secretNumber ? 'It is correct!': 'Sorry, it is not correct');
   if(informedNumber == secretNumber){
    let pluralWord = quantitiesAnswer > 1 ? 'times' :'time';
    showTextScreen('h1','Your answer is correct!');
    showTextScreen('p', `The secret number is ${secretNumber}.\n You tried for ${quantitiesAnswer} ${pluralWord}.`);
    document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if (informedNumber > secretNumber){
            //showTextScreen('h1','Your answer is not correct.');
            showTextScreen('p', `The number inputed for you is bigger than secret number.`);
        }else{
            //showTextScreen('h1','Your answer is not correct.');
            showTextScreen('p', `The number inputed for you is smaller than secret number.`);
        }
        clearplace();
    }
   
};

function numberGenerator(){
    let generatedNumber =  parseInt(Math.random() * limitNumber + 1);
    let quantitiesgeneratedNum = drownNumberList.length;

    if(quantitiesgeneratedNum == limitNumber){
        drownNumberList = [];
    }
    if(drownNumberList.includes(generatedNumber)){
        return numberGenerator();
    }else{
        drownNumberList.push(generatedNumber);

        console.log(drownNumberList);
        return generatedNumber;
    }
};


function clearplace(){
    informedNumber = document.querySelector('input');
    informedNumber.value = '';
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function playRestart(){
    secretNumber = numberGenerator();
    clearplace();
    quantitiesAnswer = 0;   
    showInitialText();
}
 
 