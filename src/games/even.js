import { randomNumber } from '../makeRandom.js';
import gamesForMind from '../index.js';

export const uniqQuestion = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const reviewNumber = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
  
const reviewResult = () => {
  const question = randomNumber(1, 101);
  const result = reviewNumber(question) ? 'yes' : 'no';
  return [question, result];
};

const gameEven = () => gamesForMind(uniqQuestion, reviewResult);
export default gameEven;