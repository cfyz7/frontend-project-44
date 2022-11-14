import getRandomNumber from '../makeRandom.js';
import gamesForMind from '../index.js';

export const uniqQuestion = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const reviewResult = () => {
  const question = getRandomNumber(1, 101);
  const result = isEven(question) ? 'yes' : 'no';
  return [question, result];
};

const gameEven = () => gamesForMind(uniqQuestion, reviewResult);
export default gameEven;
