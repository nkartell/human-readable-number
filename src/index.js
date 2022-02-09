module.exports = function toReadable(number) {

    let ones = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }
    let teens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }
    let tens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    if (number === 0) {
        return 'zero';
    }

    let result = '';

    if (number in ones) {
        return ones[number];

    }
    if (number in teens) {
        return teens[number];
    } else {
        if (number.toString().length === 2) {    //two digit number greater than 20

            result += tens[number.toString().charAt(0)];
            if (number.toString().charAt(1) != '0') {
                result += ' ' + ones[number.toString().charAt(1)];

            }
            return result;
        }
        if (number.toString().length === 3) {
            let subStr = number.toString().substring(1);

            result += ones[number.toString().charAt(0)] + ' ' + 'hundred' + ' ' + toReadable(Number(subStr));
            if (number.toString().substring(1) === '00') {
                return result.slice(0, -5);   // отрезаем zero в 100, 200, 300 
            }
            return result;
        }

    }

}

