const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(2, 3);
    expect(result).toBe(6);
  });

  test('should multiply a negative and a positive integers correctly', () => {
    const result = multiply(-2, 3);
    expect(result).toBe(-6);
  });

  test('should return 0 when a number is multiplied by 0', () => {
    const result = multiply(4, 0);
    expect(result).toBe(0);
  });
});
