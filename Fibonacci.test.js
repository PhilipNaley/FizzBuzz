// Fibonacci.test.js
import { fibonacci } from './Fibonacci.js';  // Importer fibonacci funksjonen fra fibonacci.js

test('fibonacci(1) = 1', () => {
    expect(fibonacci(1)).toBe(1);
});

test('fibonacci(2) = 1', () => {
    expect(fibonacci(2)).toBe(1);
});

test('fibonacci(3) = 2', () => {
    expect(fibonacci(3)).toBe(2);
});

test('fibonacci(5) = 5', () => {
    expect(fibonacci(5)).toBe(5);
});

test('fibonacci(10) = 55', () => {
    expect(fibonacci(10)).toBe(55);
});
