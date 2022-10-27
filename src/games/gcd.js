import _ from 'lodash';
import { randomNumber } from '../makeRandom.js';
import gamesForMind from '../index.js';


export const uniqQuestion = () => 'Find the greatest common divisor of given numbers.' 

const reviewNumber = (numbers) => {
  let total = [];
  const result1 = []
  const result2 = []
  const modString = numbers.split(' ')
  let num1 = Number(modString[0])
  let num2 = Number(modString[1])
  for (let i = 1; i <= num1; i += 1) { 
    if (num1 % i === 0) {
      result1.push(i);
    }
  }
  for (let i = 1; i <= num2; i += 1) {
    if (num2 % i === 0) {
      result2.push(i);
    }
  }
  total = _.intersection(result1, result2);
  total = String(total.at(-1));
  console.log(total)
  return total;
};

const reviewResult = () => {
  const question = `${randomNumber(1, 100)} ${randomNumber(1, 100)}`;
  const result = reviewNumber(question)
  return [question, result];
};

const gameGcd = () => gamesForMind(uniqQuestion, reviewResult);
export default gameGcd;