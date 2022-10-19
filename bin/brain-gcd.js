#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

let total = [];
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Find the greatest common divisor of given numbers.');
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const operationWithNumbers = (firstRandomNumber, secondRandomNumber, result = [], result2 = []) => {
  console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);
  for (let i = 1; i <= firstRandomNumber; i += 1) {
    if (firstRandomNumber % i === 0) {
      result.push(i);
    }
  }
  for (let i = 1; i <= secondRandomNumber; i += 1) {
    if (secondRandomNumber % i === 0) {
      result2.push(i);
    }
  }
  total = _.intersection(result, result2);
  total = total.at(-1);
  return total;
};
operationWithNumbers(getRandomInt(0, 101), getRandomInt(0, 101));

const answerOfUser = readlineSync.question('Your answer: ');
const numberOfUser = Number(answerOfUser);

const reviewCorrectOperation = (total) => {
  if (total === numberOfUser) {
    return 'Correct!';
  }
  return `'${answerOfUser}' is wrong answer ;(. Correct answer was '${total}'.\nLet's try again, ${userName}!`;
};

const resultOperation = reviewCorrectOperation(total);
console.log(resultOperation);

let resultOperation2 = '';
if (resultOperation === 'Correct!') {
  operationWithNumbers(getRandomInt(0, 101), getRandomInt(0, 101));
  const answerOfUser2 = readlineSync.question('Your answer: ');
  if (Number(answerOfUser2) === total) {
    resultOperation2 += 'Correct!';
  } else {
    resultOperation2 += `'${answerOfUser2}' is wrong answer ;(. Correct answer was '${total}'.\nLet's try again, ${userName}!`;
  }
  console.log(resultOperation2);
}

let resultOperation3 = '';
if (resultOperation2 === 'Correct!') {
  operationWithNumbers(getRandomInt(0, 101), getRandomInt(0, 101));
  const answerOfUser3 = readlineSync.question('Your answer: ');
  if (Number(answerOfUser3) === total) {
    resultOperation3 += `Correct! Congratulations, ${userName}!`;
  } else {
    resultOperation3 += `'${answerOfUser3}' is wrong answer ;(. Correct answer was '${total}'.\nLet's try again, ${userName}!`;
  }
  console.log(resultOperation3);
}
