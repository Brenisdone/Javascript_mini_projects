//For three dices
const max = 7
const min = 1
const Label = document.getElementById('Label')
const Label1 = document.getElementById('Label1')
const Label2 = document.getElementById('Label2')
const button = document.getElementById('btn')

//For guessing game
let minno
let maxno
let guessno
let ranNum
let attempts
const guessmax = document.getElementById('Max')
const guessmin = document.getElementById('Min')
const guess = document.getElementById('Guess')
const guessset = document.getElementById('Guessset')
const setstatus = document.getElementById('setstatus')
const guessbtn = document.getElementById('Guessstart')
const statusMsg = document.getElementById('Guessstatus')


button.onclick = function(){
    let ranNum1 = Math.floor(Math.random() * (max-min)) + min;
    let ranNum2 = Math.floor(Math.random() * (max-min)) + min;
    let ranNum3 = Math.floor(Math.random() * (max-min)) + min;
    Label.textContent = ranNum1;
    Label1.textContent = ranNum2;
    Label2.textContent = ranNum3;
}

guessset.onclick = function(){
    maxno = guessmax.value
    minno = guessmin.value
    maxno=Number(maxno)
    minno=Number(minno)
    ranNum = Math.floor(Math.random()*(maxno-minno+1)) + minno;
    setstatus.textContent = `Random number is set`
}

guessbtn.onclick = function(){
    attempts++
    guessno = Number(guess.value)
    console.log(guessno)
    if(guessno>ranNum){
        statusMsg.textContent = `Guess lower`
    }
    else if(guessno<ranNum){
        statusMsg.textContent = `Guess higher`
    }
    else{
        statusMsg.textContent =  `You got it champ`
    }
}

