import parser from '../Middleware/converter.mjs';
// para comparar arrays usar toEqual
test('get Array of saudacao', () => {
    expect(parser('intents/yamls/saudacao.yaml')).toEqual(["oi","ola","como vai?","eae","tudo bem?"]);
});

test('get Array of despedida', () => {
    expect(parser('intents/yamls/despedida.yaml')).toEqual(["ate mais","tchau","bye"]);
});

