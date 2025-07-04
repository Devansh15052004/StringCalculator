class StringCalculator {
    add(numbers) {
        if (numbers === '') {
            return 0;
        }

        const newLineSupportNumber = numbers.replace(/\n/g, ',');

        const parts = newLineSupportNumber.split(',');
        let sum = 0;
        for (const part of parts) {
            sum += parseInt(part);
        }
        return sum; 
    }
}

module.exports = StringCalculator; 