import parser from "../Middleware/converter.mjs";

const saudacao = parser('intents/yamls/saudacao.yaml');
const despedida = parser('intents/yamls/despedida.yaml');
const absPositiva = parser('intents/yamls/abstrataPositiva.yaml');
const absNegativa = parser('intents/yamls/abstrataNegativa.yaml');

class intents{
    constructor(msg) {
        this.msg = msg;
    }

    saudar(){
        return saudacao.includes(this.msg);
    }
    despedir(){
        return despedida.includes(this.msg);
    }
    responderAbsP(){
        return absPositiva.includes(this.msg);
    }
    responderAbsN(){
        return absNegativa.includes(this.msg);
    }
};

export default intents;