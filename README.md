# String Calculator (TDD)

Welcome to my solution for the String Calculator Kata.  
This project demonstrates how to build a small utility using Test-Driven Development (TDD) in JavaScript with Jest.  
The development follows the "Red-Green-Refactor" cycle to ensure robust, clean code.

---

## Table of Contents

- [Problem Statement](#problem-statement)
- [Requirements](#requirements)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Running Tests](#running-tests)
- [Test Coverage](#test-coverage)
- [Screenshot](#screenshot)
- [Author](#author)
- [License](#license)

---

## Problem Statement

Create a calculator that takes a string of numbers and returns their sum.  
Support custom delimiters and ensure the calculator gracefully handles edge cases like empty strings, large numbers, or invalid formats.

---

## Requirements

| Rule                             | Example Input             | Expected Output                  |
|----------------------------------|----------------------------|----------------------------------|
| Empty string returns 0          | `""`                       | `0`                              |
| Sum of comma-separated numbers  | `"1,2"`                    | `3`                              |
| Allow `\n` between numbers      | `"1\n2,3"`                 | `6`                              |
| Custom delimiter                | `"//;\n1;2"`               | `3`                              |
| Negative numbers throw error   | `"-1,2"`                   | Error: negative numbers not allowed -1 |
| Ignore numbers > 1000           | `"2,1001"`                 | `2`                              |
| Multi-char delimiters           | `"//[***]\n1***2***3"`     | `6`                              |
| Multiple delimiters             | `"//[*][%]\n1*2%3"`        | `6`                              |
| Multi multi-char delimiters     | `"//[**][%%]\n1**2%%3"`    | `6`                              |

---

## Features

- TDD-based development using Jest
- Full test coverage with edge cases
- Handles custom single and multi-character delimiters
- Validates negative numbers and throws descriptive errors
- Ignores numbers greater than 1000

---

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)
- A code editor like Visual Studio Code

---

### Clone & Install (All-in-One)

```bash
git clone https://github.com/your-username/string-calculator.git && \
cd string-calculator && \
npm install && \
npm test && \
npx jest --coverage
```
### Running Tests
```bash
npm test
```
