module.exports = function toReadable (number) {
    let result = '';
    let ones = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine '];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

    const hundred = Math.floor(number / 100);
    let ten = Math.floor(number / 10) % 10;
    let one = number % 10;

    if(number == 0){
        result = 'zero';
    } else{
        result = ((hundred >= 1) ? ((ones[hundred]) + 'hundred ') : '') + ((ten === 1) ? (teens[number % 10]) : ((tens[ten]) + (ones[one])));
    }

    return result.trim();

}
