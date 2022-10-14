import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')

var userName = readlineSync.question('May I have your name? ')
console.log('Hello,',userName)

console.log('Answer "yes" if the number is even, otherwise answer "no".')
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
var total = (getRandomInt(0, 101));
console.log(`Question:`, total);


// var numberRevue = (total) => {
//   if(total % 2 === 0) {
//     return true;
//   }
//   return false;
// }
// var result = numberRevue(total) 

// var userAnswer = readlineSync.question('Your answer: ') 
// var reverseUserAnswer = (userAnswer) => {
//   if (userAnswer === 'yes') {
//     return 'no'
//   }
//   return 'yes'
// }
// var reverseAnswer = (reverseUserAnswer(userAnswer))

// var resultRevue = (result, userAnswer) => {
//   if (result === true && userAnswer === 'yes') {
//     return 'Correct!'
//   }
//   else if (result === false && userAnswer === 'no') {
//     return 'Correct!'
//   }
//   return `'${userAnswer}' is wrong answer ;(. Correct answer was '${reverseAnswer}'\nLet's try again, Bill!`
// }
// var lastChange = (resultRevue(result, userAnswer));
// console.log(lastChange);

console.log(`Question:`, getRandomInt(1, 101))
console.log(`Question:`, getRandomInt(1, 101))


 
