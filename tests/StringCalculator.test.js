const StringCalculator = require("../src/StringCalculator");

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number itself for single number", () => {
    expect(calculator.add("1")).toBe(1);
    expect(calculator.add("5")).toBe(5);
  });

  test("should return sum for two numbers", () => {
    expect(calculator.add("1,5")).toBe(6);
    expect(calculator.add("1,2")).toBe(3);
  });
  test("should handle any amount of numbers", () => {
    expect(calculator.add("1,2,3,4,5")).toBe(15);
    expect(calculator.add("1,2,3,4")).toBe(10);
  });

  test("should handle new lines between numbers", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
    expect(calculator.add("1,2\n3")).toBe(6);
  });

  test("should support custom delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
    expect(calculator.add("//|\n1|2|3|4|5")).toBe(15);
  });

  test("should support simple custom delimiter (no brackets)", () => {
  expect(calculator.add("//;\n1;2;3")).toBe(6);
});


  test("should throw exception for negative numbers", () => {
    expect(() => {
      calculator.add("-1,2,3");
    }).toThrow("negative numbers not allowed -1");
  });

  test("should throw exception with all negative numbers listed", () => {
    expect(() => {
      calculator.add("-1,2,-3,4,-5");
    }).toThrow("negative numbers not allowed -1,-3,-5");
  });
    
  test("ignores numbers > 1000", () => {
    expect(calculator.add("2,1001")).toBe(2);
  });

  test('supports custom delimiters of any length', () => {
    expect(calculator.add('//[***]\n1***2***3')).toBe(6);
});

test('supports multiple custom single-char delimiters', () => {
    expect(calculator.add('//[*][%]\n1*2%3')).toBe(6);
});

test('supports multiple custom multi-char delimiters', () => {
    expect(calculator.add('//[**][%%]\n1**2%%3')).toBe(6);
});
});
