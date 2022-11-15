import getRandomNumber from '../makeRandom.js';
import runEngine from '../index.js';

export const uniqQuestion = 'Find the greatest common divisor of given numbers.';

const reviewNumber = function gcd(num1, num2) {
  if (!num2) {
    return num1;
  }
  return reviewNumber(num2, num1 % num2);
};

const reviewResult = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const result = String(reviewNumber(num1, num2));
  return [question, result];
};

const gameGcd = () => runEngine(uniqQuestion, reviewResult);
export default gameGcd;
