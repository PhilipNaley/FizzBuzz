// fibonacci.js
export function fibonacci(n) {
    if (n <= 1) return 1;  // Base case: fibonacci(0) og fibonacci(1) er begge 1
    let a = 1, b = 1;
    for (let i = 2; i < n; i++) {
        const next = a + b;
        a = b;
        b = next;
    }
    return b;
}
