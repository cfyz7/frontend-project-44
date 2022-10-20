#!/usr/bin/env node
//logic of games
import readlineSync from 'readline-sync';
import uniqQuestion from '../bin/brain-prime.js'; 

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`); 
  uniqQuestion(); 
  // for (let i = 1; i <= 3; i += 1) {
    
  //   if (obj.answer != cAnswer) {
  //     console.log(`${aaaaa} is wrong answer ;(. Correct answer was '${aaaaa}'.\nLet's try again, ${userName}`);
  //     return;
  //   }
  //   console.log('Correct!');
  // }
  // console.log(`Congratulations, ${userName}!`);
};

export default sayHello; 
