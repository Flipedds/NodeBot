import parser from '../Middleware/converter.mjs';

test('get Array of saudacao', () => {
    expect(parser('intents/yamls/saudacao.yaml')).toEqual(["oi","ola","como vai?","eae","tudo bem?"]);
});