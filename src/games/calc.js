import runEngine from '../index.js';
import getRandomNumber from '../makeRandom.js';

export const uniqQuestion = 'What is the result of the expression?';
const chars = ['+', '-', '*'];

const calcNumbers = (num1, char, num2) => {
  switch (char) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    default:
      return String(num1 * num2);
  }
};

const reviewResult = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const char = chars[getRandomNumber(0, chars.length - 1)]
  const question = `${num1} ${char} ${num2}`;
  const result = calcNumbers(num1, char, num2);
  return [question, result];
};

const gameCalc = () => runEngine(uniqQuestion, reviewResult);
export default gameCalc;
