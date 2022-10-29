import gamesForMind from '../index.js';
import { randomNumber } from '../makeRandom.js';

export const uniqQuestion = () => 'What is the result of the expression?';
const chars = ['+', '-', '*'];
const reviewNumber = (nums) => { 
  console.log(nums)
  let total = 0; 
  const modString = nums.split(' ')
  let char = modString[1]
  let num1 = Number(modString[0])
  let num2 = Number(modString[2])
  if (char === '+') {
    total = num1 + num2
  } else if (char === '-') {
    total = num1 - num2
  } else {
    total = num1 * num2
  } 
  total = String(total)
  return total;
};

const reviewResult = () => {
    const question = `${randomNumber(1, 100)} ${chars[randomNumber(0, 2)]} ${randomNumber(1, 100)}`;
    const result = reviewNumber(question)
    return [question, result];
  };
  
  const gameCalc = () => gamesForMind(uniqQuestion, reviewResult);
  export default gameCalc;

