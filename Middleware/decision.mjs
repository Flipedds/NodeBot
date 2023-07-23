import intents from '../intents/UserIntents.mjs';
import speech from "../voz/speach.mjs";
import playMp3 from '../player/audioPlayer.mjs';

 async function decide(msg) {
    const intent = new intents(msg);
    const outputFile = `./audios/output_${Date.now()}.mp3`;

    if (intent.saudar() === true) {
        let path = await speech("oi, como você está?", outputFile);
        playMp3(path);
    }
    else if(intent.despedir() === true){
        let path = await speech("Até logo", outputFile);
        playMp3(path);
    }
    else if(intent.responderAbsP() == true){
        let path = await speech("Bom saber disso", outputFile);
        playMp3(path);
    }
    else if(intent.responderAbsN() == true){
        let path = await speech("Que pena, você vai melhorar", outputFile);
        playMp3(path);
    }
    else {
        let path = await speech("Desculpe não entendi");
        playMp3(path);
    }
}

export default decide;