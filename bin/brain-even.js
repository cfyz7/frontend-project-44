#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')  
var userName = readlineSync.question('May I have your name? ')
console.log(`Hello, ${userName}!`) 
console.log('Answer "yes" if the number is even, otherwise answer "no".')

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
var total = (getRandomInt(0, 101));
console.log(`Question:`, total);
var total2 = getRandomInt(1, 101);
var total3 = getRandomInt(1, 101); 

var numberReview = (total, total2, total3) => {
  if(total % 2 === 0) {
    return true;
  }
  return false;
}
var result = numberReview(total);
var result2 = numberReview(total2);
var result3 = numberReview(total3);

var answerOfUser = readlineSync.question('Your answer: ') 
var reverseAnswerOfUser = (answerOfUser) => {
  if (answerOfUser === 'yes') {
    return 'no';
  }
  return 'yes';
}
var reverseAnswer = (reverseAnswerOfUser(answerOfUser))

var resultReview = (result, answerOfUser) => {
  if ((result === true && answerOfUser === 'yes') || (result === false && answerOfUser=== 'no')) {
    return 'Correct!';
  } 
  return `'${answerOfUser}' is wrong answer ;(. Correct answer was '${reverseAnswer}'\nLet's try again, ${userName}!`
}
var totalResultReview = (resultReview(result, answerOfUser));
console.log(totalResultReview); 

// console.log(`Question:`, total2);
// var answerOfUser = readlineSync.question('Your answer: ') 
// var totalResultReview2 = (resultReview(result2, answerOfUser)); 
// console.log(totalResultReview2);

// console.log(`Question:`, total3);
// var answerOfUser = readlineSync.question('Your answer: ') 
// var totalResultReview3 = (resultReview(result3, answerOfUser));
// console.log(totalResultReview3);
// console.log(`Congratulations, ${userName}!`)