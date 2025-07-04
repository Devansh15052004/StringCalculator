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
        let sum = 0;
        for (const part of parts) {
            sum += parseInt(part);
        }
        return sum; 
    }
}

module.exports = StringCalculator; 