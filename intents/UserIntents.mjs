import parser from "../Middleware/converter.mjs";

const saudacao = parser('intents/yamls/saudacao.yaml');
const despedida = parser('intents/yamls/despedida.yaml');

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
};

export default intents;