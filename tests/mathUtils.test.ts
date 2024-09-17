import { factorial, isPrime, fibonacci } from '../src/mathUtils';

describe('Math Utilities', () => {

  describe('factorial', () => {
    it('should calculate the factorial of a number', () => {
      expect(factorial(5)).toBe(120);
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
    });

    it('should throw an error for negative numbers', () => {
      expect(() => factorial(-1)).toThrow('Negative numbers are not allowed.');
    });

    it('should handle large numbers', () => {
      expect(factorial(10)).toBe(3628800);
    });
  });

  describe('isPrime', () => {
    it('should return true for prime numbers', () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(5)).toBe(true);
      expect(isPrime(19)).toBe(true);
    });

    it('should return false for non-prime numbers', () => {
      expect(isPrime(1)).toBe(false);
      expect(isPrime(4)).toBe(false);
      expect(isPrime(20)).toBe(false);
      expect(isPrime(100)).toBe(false);
    });

    it('should handle large prime numbers', () => {
      expect(isPrime(104729)).toBe(true); // Example of a large prime number
    });
  });

  describe('fibonacci', () => {
    it('should return the Fibonacci sequence up to the nth term', () => {
      expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
      expect(fibonacci(1)).toEqual([0]);
      expect(fibonacci(0)).toEqual([]);
    });

    it('should handle large values of n', () => {
      const result = fibonacci(20);
      expect(result.length).toBe(20);
      expect(result[result.length - 1]).toBe(4181);
    });
  });

});
