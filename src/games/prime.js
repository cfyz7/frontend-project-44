import gamesForMind from '../index.js';
import { randomNumber } from '../makeRandom.js';

export const uniqQuestion = () => 'Answer "yes" if given number is prime. Otherwise answer "no".' 
 
const reviewNumber = (num) => {
  let array = [];
  for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      array.push(i);
    }
  }
  if (array.length !== 2) {
    return false;
  }
  return true;
};  

const reviewResult = () => {
  const question = randomNumber(1, 100);
  const result = reviewNumber(question) ? 'yes' : 'no';
  return [question, result];
};

const gamePrime = () => gamesForMind(uniqQuestion, reviewResult);
export default gamePrime;