class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }
    const { delimiter, numbersString } = this.extractDelimiterAndNumbers(numbers);

    const normalizedNumbers = this.normalizeDelimiters(
      numbersString,
      delimiter
    );

    const parts = normalizedNumbers.split(delimiter);
        
    return this.calculateSum(parts);
  }

  extractDelimiterAndNumbers(numbers) {
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = numbers.substring(2, delimiterEndIndex);
      numbersString = numbers.substring(delimiterEndIndex + 1);
      return { delimiter, numbersString };
    }
    return { delimiter: ",", numbersString: numbers };
  }

  normalizeDelimiters(numbersString,delimiter){
    return numbersString.replace(/\n/g, delimiter);
  }

  calculateSum(parts) {
        const negativeNumbers = [];
        let sum = 0;
        
        for (const part of parts) {
            const number = parseInt(part);
            if (number < 0) {
                negativeNumbers.push(number);
            } else {
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
