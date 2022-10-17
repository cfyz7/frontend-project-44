#!/usr/bin/env node
import readlineSync from 'readline-sync';

let result = 0;
let total = ''
let total2 = ''
console.log('Welcome to the Brain Games!'); 
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);  
console.log('What is the result of the expression?');
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

let firstRandomNumber = (getRandomInt(0, 101));
let secondRandomNumber = (getRandomInt(0, 101));
const chars = ['+', '-', '*'];
let threeRandomNumber  = (getRandomInt(0, 3));
let randomChar = (chars[threeRandomNumber]); 

const operationWithNumbers = (firstRandomNumber, randomChar, secondRandomNumber) => {
    console.log(`Question: ${firstRandomNumber} ${randomChar} ${secondRandomNumber}`)
    if (randomChar === '+') {
        result = firstRandomNumber + secondRandomNumber;
    } else if (randomChar === '-') {
        result = firstRandomNumber - secondRandomNumber;
    } else result = firstRandomNumber * secondRandomNumber;
    return result;
}
operationWithNumbers(firstRandomNumber, randomChar, secondRandomNumber);


let answerOfUser = readlineSync.question('Your answer: ');
let numberOfUser = Number(answerOfUser);

const reviewCorrectOperation = (result) => {
    if (result === numberOfUser) {
        return 'Correct!'
    }
    else {
        return `'${answerOfUser}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`
    }
    
}
const resultOperation = reviewCorrectOperation(result)
console.log(resultOperation)

if (resultOperation === 'Correct!') {
    operationWithNumbers((getRandomInt(0, 101)), randomChar, (getRandomInt(0, 101)));
    const answerOfUser2 = readlineSync.question('Your answer: ');
    if (Number(answerOfUser2) === result) {
        total += 'Correct!'
    }
    else{
       total += `'${answerOfUser2}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`
    }
    console.log(total)
}   


if (total === 'Correct!') {
    operationWithNumbers((getRandomInt(0, 101)), randomChar, (getRandomInt(0, 101)));
    const answerOfUser3 = readlineSync.question('Your answer: ');
    if (Number(answerOfUser3) === result) {
        total2 += `Correct! Congratulations, ${userName}!`
    }
    else {
        total2 += `'${answerOfUser3}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`
    }
    console.log(total2)
}   
