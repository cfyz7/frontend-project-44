#!/usr/bin/env node
import readlineSync from 'readline-sync'; 
import sayHello from '../src/index.js';

const uniqQuestion = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
export default uniqQuestion

sayHello()

export const dificultNumber = () => {
  const firstNumber = () => Math.floor(Math.random() * 100) + 1
  console.log(firstNumber)
  const array = [];
  const reviewOfNumber = (firstNumber) => {
    for (let i = 0; i <= firstNumber; i += 1) {
      array.push(i) 
    } 
    return array;
  }

}
 
// export const question = () => { 
//    const num1 = () => Math.floor(Math.random() * 100) + 1;
//    const step = () => Math.floor(Math.random() * 100) + 1; 
//    const superArr = (num1, step) => {
//    const arrow = [num1]; 
//    for (let i = 1; arrow.length <= 7; i++) {
//       let item = arrow[i];
//       arrow[i] = arrow[i - 1] + step;
//       arrow.push(item);
//    }
//    return arrow;
//    };
 
//    const randomArr = (superArr) => {
//    const point = '..';
//    let e = Math.floor(Math.random()*7) + 1;
//    superArr[e] = correctPoint;
//    superArr[e] = point;
 
//    function shuffle(superArr){
// 	let j, temp;
// 	for(let i = superArr.length - 1; i > 0; i--){
// 		j = Math.floor(Math.random()*(i + 1));
// 		temp = superArr[j];
// 		superArr[j] = superArr[i];
// 		superArr[i] = temp;
// 	}
// 	return {superArr, correctPoint,
//    };
//    };
 
//   const answer = readlineSync.question(`Question: ${randomArr}\n`);
//   console.log(`Your answer: ${answer}`);
//   return answer, correctPoint;
//    };
// };
 
// export const correctanswer = ({correctPoint}) => {
//   return correctPoint;};
 
// export const brainProgression = () => { brainlogic(gametranscription, question, correctanswer); }