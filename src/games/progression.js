import _ from 'lodash';
import gamesForMind from '../index.js';
import { randomNumber } from '../makeRandom.js';

export const uniqQuestion = () => 'What number is missing in the progression?'

const reviewResult = () => {
  const step = randomNumber(1, 5)
  const numLength = randomNumber(4, 9)
  const numDoddge = randomNumber(0, numLength)
  let num = randomNumber(1, 100);
  let makeArray = [];  
  for (let i = num, j = 0; j <= numLength; j += 1, i += step) {
    makeArray.push(i);
  } 
  console.log(makeArray)
  const result = String(makeArray[numDoddge])
  makeArray[numDoddge] = '..';
  const question = makeArray.join(' ')
  return [question, result];
};
 
const gameProgression = () => gamesForMind(uniqQuestion, reviewResult); 
export default gameProgression;