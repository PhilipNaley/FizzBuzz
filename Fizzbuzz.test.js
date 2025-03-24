// FizzBuzz.test.js
import { fizzBuzz } from './FizzBuzz.js';  // Importer fizzBuzz funksjonen fra fizzBuzz.js

test('fizzBuzz(1) = 1', () => {
    expect(fizzBuzz(1)).toBe(1);
});

test('fizzBuzz(3) = "Fizz"', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
});

test('fizzBuzz(5) = "Buzz"', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
});

test('fizzBuzz(15) = "FizzBuzz"', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});
