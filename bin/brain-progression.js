#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

let result = 0;
let total = '';
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What number is missing in the progression?');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomn = getRandomInt(5, 10)
const makeProgressoin = (number, step, numLength, doddge) => {
  const tot = [];
  for (let i = number, j = 0; j <= numLength; j += 1, i += step) {
    tot.push(i);
  }
  result = tot[doddge];
  tot[doddge] = '..';
  total = tot.join(' ');
  console.log(`Question: ${total}`);
  return total, result;
};
makeProgressoin(getRandomInt(0, 101), getRandomInt(0, 11), randomn, getRandomInt(0, randomn));


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
  makeProgressoin(getRandomInt(0, 101), getRandomInt(0, 11), getRandomInt(5, 10), getRandomInt(0, 10));
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
  makeProgressoin(getRandomInt(0, 101), getRandomInt(0, 11), getRandomInt(5, 10), getRandomInt(0, 10));
  const answerOfUser3 = readlineSync.question('Your answer: ');
  if (Number(answerOfUser3) === result) {
    resultOperation3 += `Correct! Congratulations, ${userName}!`;
  } else {
    resultOperation3 += `'${answerOfUser3}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`;
  }
  console.log(resultOperation3);
}
