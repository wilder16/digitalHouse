const {generateText} = require('../util');


// test('xyz', () =>{
//     const xyz = generateText('xyz', 0);
//     expect('lo que no se').toBe('debe ser');
// })

test('inputTest', () =>{
    const inputs = generateText('Eve', 1);
    expect(inputs).toBe('Eve (1 years old)');
});

test('negativeTest', () =>{
    const inputs = generateText(1, 'Eve');
    expect(inputs).toBe('Eve (1 years old)');
});

test.only('inputTest1', () =>{
    const inputs = generateText('Eve', 1);
    expect(inputs).toMatch(/Eve/);
});

describe("Nombre del conjunto de test", () =>{
    
})