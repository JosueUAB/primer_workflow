const { sum } = require('./app');
console.log('Running tests...');
describe('Pruebas Unitarias', () => {
  
  test('La función suma debe sumar correctamente 1 + 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('La función suma debe manejar números negativos', () => {
    expect(sum(-1, -1)).toBe(-2);
  });

});