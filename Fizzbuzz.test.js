const fizzBuzz = require('./FizzBuzz'); // Importerer funksjonen for testing

test('should return "1" for input 1', () => {
    expect(fizzBuzz(1)).toBe("1");S
});

test('should return "Fizz" for input 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
});

test('should return "Buzz" for input 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
});

test('should return "FizzBuzz" for input 15', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});
