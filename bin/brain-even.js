#!/usr/bin/env node
import readlineSync from 'readline-sync';

let totalResult = '';
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomNumber = (getRandomInt(0, 101));
const randomNumber2 = (getRandomInt(0, 101));
const randomNumber3 = (getRandomInt(0, 101));

console.log('Question:', randomNumber);

const numberReview = (randomNumber) => {
  if (randomNumber % 2 === 0) {
    return true;
  }
  return false;
};

const result = numberReview(randomNumber);
const result2 = numberReview(randomNumber2);
const result3 = numberReview(randomNumber3);

const userAnswer = readlineSync.question('Your answer: ');
const reverseUserAnswer = (userAnswer) => {
  if (userAnswer === 'yes') {
    return 'no';
  }
  return 'yes';
};

const reverseAnswer = (reverseUserAnswer(userAnswer));
const resultReview = (result, userAnswer) => {
  if ((result === true && userAnswer === 'yes') || (result === false && userAnswer === 'no')) {
    return 'Correct!';
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${reverseAnswer}'\nLet's try again, !`;
};
const totalFuncResultReview = (resultReview(result, userAnswer));
console.log(totalFuncResultReview);

if (totalFuncResultReview === 'Correct!') {
  console.log('Question:', randomNumber2);
  const userAnswer2 = readlineSync.question('Your answer: ');
  if ((result2 === true && userAnswer2 === 'yes') || (result2 === false && userAnswer2 === 'no')) {
    totalResult += 'Correct!';
    console.log(totalResult);
  } else {
    console.log(`'${userAnswer2}' is wrong answer ;(. Correct answer was '${reverseAnswer}'\nLet's try again, ${userName}!`);
  }
}

if (totalResult === 'Correct!') {
  console.log('Question:', randomNumber3);
  const userAnswer3 = readlineSync.question('Your answer: ');
  if ((result3 === true && userAnswer3 === 'yes') || (result3 === false && userAnswer3 === 'no')) {
    console.log(`Correct!\nCongratulations, ${userName}!`);
  } else {
    console.log(`'${userAnswer3}' is wrong answer ;(. Correct answer was '${reverseAnswer}'\nLet's try again, ${userName}!`);
  }
}
