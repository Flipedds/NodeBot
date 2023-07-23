import decide from './Middleware/decision.mjs'
import readlineSync from 'readline-sync';

while (true){
  let text = readlineSync.question('Digite a mensagem: ');
  console.log(text);
  await decide(text);
};
  
  