import intents from '../intents/UserIntents.mjs';
import speech from "../voz/speach.mjs";

function decide(msg) {
    const intent = new intents(msg);

    if (intent.saudar() === true) {
        speech("oi, como você está?");
    } 
    else if(intent.despedir() === true){
        speech("Até logo")
    }
    else {
        speech("Posso conversar com você");
    }
}

export default decide;