class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }

    const { delimiters, numbersString } = this.extractDelimiterAndNumbers(numbers);

    const normalizedNumbers = this.normalizeDelimiters(numbersString, delimiters);
    const delimiterRegex = new RegExp(delimiters.map(d =>
      d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    ).join('|'), 'g');

    const parts = normalizedNumbers.split(delimiterRegex);
    return this.calculateSum(parts);
  }

  extractDelimiterAndNumbers(numbers) {
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      const delimiterLine = numbers.substring(2, delimiterEndIndex);
      const numbersString = numbers.substring(delimiterEndIndex + 1);

      const delimiters = this.parseDelimiters(delimiterLine);
      return { delimiters, numbersString };
    }
    return { delimiters: [",","\n"], numbersString: numbers };
  }

  parseDelimiters(delimiterLine) {
    const delimiters = [];
    if (delimiterLine.startsWith('[') && delimiterLine.endsWith(']')) {
      const bracketRegex = /\[([^\]]+)\]/g;
      let match;

      while ((match = bracketRegex.exec(delimiterLine)) !== null) {
        delimiters.push(match[1]);
      }
    } else {
      delimiters.push(delimiterLine);
    }
    return delimiters;
  }

  normalizeDelimiters(numbersString, delimiters) {
    return numbersString; // \n will be handled by RegExp now
  }

  calculateSum(parts) {
    const negativeNumbers = [];
    let sum = 0;

    for (const part of parts) {
      const number = parseInt(part);
      if (isNaN(number)) continue;

      if (number < 0) {
        negativeNumbers.push(number);
      } else if (number <= 1000) {
        sum += number;
      }
    }

    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
    }

    return sum;
  }
}

module.exports = StringCalculator;
