class StringCalculator {
    add(numbers) {
        if (numbers === '') {
            return 0;
        }
        
        const parts = numbers.split(',');
        let sum = 0;
        for (const part of parts) {
            sum += parseInt(part);
        }
        return sum; 
    }
}

module.exports = StringCalculator; 