// Fakultet.test.js
import { fakultet } from './fakultet.js';  // Importer fakultet funksjonen fra fakultet.js

test('fakultet(1) = 1', () => {
    expect(fakultet(1)).toBe(1);
});

test('fakultet(5) = 120', () => {
    expect(fakultet(5)).toBe(120);
});

test('fakultet(0) = 1', () => {
    expect(fakultet(0)).toBe(1);
});
