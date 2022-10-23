import readlineSync from 'readline-sync';
import { uniqQuestion, reviewResult } from '../games/prime.js';
 
const gamesForMind = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(uniqQuestion()) 
  const totalRound = 3 
  for (let i = 1; i <= totalRound; i += 1) { 
    const [question, result] = reviewResult();
    console.log(`Question: ${question}`); 
    const answerOfUser = readlineSync.question('Your answer: '); 
    if (answerOfUser != result) {
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congretulations, ${userName}!`)
};
export default gamesForMind;