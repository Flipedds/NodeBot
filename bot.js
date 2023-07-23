import decide from './Middleware/decision.mjs'
import readlineSync from 'readline-sync';
import playMp3 from './player/audioPlayer.mjs'

let text = readlineSync.question('Digite a mensagem: ');
  console.log(text);
  decide(text);
  
  