import runEngine from '../index.js';
import getRandomNumber from '../makeRandom.js';

export const uniqQuestion = 'What number is missing in the progression?';
 
const getProgression = (num, step, numLength) => {
  const makeArray = [];
  for (let i = num, j = 0; j <= numLength; j += 1, i += step) {
    makeArray.push(i);
  } 
  return makeArray
}  

const reviewResult = () => { 
  const numLength = getRandomNumber(4, 9); 
  const num = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 10);
  const numDoddge = getRandomNumber(0, numLength);
  const array = getProgression(num, step, numLength)
  const result = String(array[numDoddge])
  array[numDoddge] = '..'
  const question = array.join(' ');
  return [question, result];
};

const gameProgression = () => runEngine(uniqQuestion, reviewResult);
export default gameProgression;
