class StringCalculator {
    add(numbers) {
        if (numbers === '') {
            return 0;
        }
        if (numbers.includes(',')) {
            const parts = numbers.split(',');
            let sum = 0;
            for (const part of parts) {
                sum += parseInt(part);
            }
            return sum;
        }
        return parseInt(numbers); 
    }
}

module.exports = StringCalculator; 