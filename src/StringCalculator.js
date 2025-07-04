class StringCalculator {
    add(numbers) {
        if (numbers === '') {
            return 0;
        }
        let delimiter = ',';
        let numbersString = numbers;

        if (numbers.startsWith('//')) {
            const delimiterEndIndex = numbers.indexOf('\n');
            delimiter = numbers.substring(2, delimiterEndIndex);
            numbersString = numbers.substring(delimiterEndIndex + 1);
        }
        
        const newLineSupportNumber = numbersString.replace(/\n/g, delimiter);

        const parts = newLineSupportNumber.split(delimiter);
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