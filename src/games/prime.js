import gamesForMind from '../index.js';
import getRandomNumber from '../makeRandom.js';

export const uniqQuestion = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const array = [];
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
  const question = getRandomNumber(1, 100);
  const result = isPrime(question) ? 'yes' : 'no';
  return [question, result];
};

const gamePrime = () => gamesForMind(uniqQuestion, reviewResult);
export default gamePrime;
