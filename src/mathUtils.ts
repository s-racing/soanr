export function factorial(n: number): number {
  if (n < 0) throw new Error('Negative numbers are not allowed.');
  return n === 0 ? 1 : n * factorial(n - 1);
}

export function isPrime(n: number): boolean {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export function fibonacci(n: number): number[] {
  if (n <= 0) return [];
  const sequence = [0];
  if (n === 1) return sequence;
  sequence.push(1);
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

