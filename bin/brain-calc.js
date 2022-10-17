#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let result = 0;
const chars = ['+', '-', '*'];
const threeRandomNumber = (getRandomInt(0, 3));
const randomChar = (chars[threeRandomNumber]);

const operationWithNumbers = (firstRandomNumber, randomChar, secondRandomNumber) => {
  console.log(`Question: ${firstRandomNumber} ${randomChar} ${secondRandomNumber}`);
  if (randomChar === '+') {
    result = firstRandomNumber + secondRandomNumber;
  } else if (randomChar === '-') {
    result = firstRandomNumber - secondRandomNumber;
  } else result = firstRandomNumber * secondRandomNumber;
  return result;
};

operationWithNumbers((getRandomInt(0, 101)), randomChar, (getRandomInt(0, 101)));
const answerOfUser = readlineSync.question('Your answer: ');
const numberOfUser = Number(answerOfUser);
const reviewCorrectOperation = (result) => {
  if (result === numberOfUser) {
    return 'Correct!';
  }

  return `'${answerOfUser}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`;
};

const resultOperation = reviewCorrectOperation(result);
console.log(resultOperation);

let resultOperation2 = '';
if (resultOperation === 'Correct!') {
  operationWithNumbers((getRandomInt(0, 101)), randomChar, (getRandomInt(0, 101)));
  const answerOfUser2 = readlineSync.question('Your answer: ');
  if (Number(answerOfUser2) === result) {
    resultOperation2 += 'Correct!';
  } else {
    resultOperation2 += `'${answerOfUser2}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`;
  }
  console.log(resultOperation2);
}

let resultOperation3 = '';
if (resultOperation2 === 'Correct!') {
  operationWithNumbers((getRandomInt(0, 101)), randomChar, (getRandomInt(0, 101)));
  const answerOfUser3 = readlineSync.question('Your answer: ');
  if (Number(answerOfUser3) === result) {
    resultOperation3 += `Correct! Congratulations, ${userName}!`;
  } else {
    resultOperation3 += `'${answerOfUser3}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`;
  }
  console.log(resultOperation3);
}
