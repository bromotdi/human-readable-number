const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(number) {
    let result = [], part = [], parts = [], word = '';

    parts.push(number.toString());

    if (parts[0] == 0) return 'zero'

    for (let i = 0; i < parts.length; i++) {
        part = parts[i].split('').reverse().map(parseFloat);
        if (part[1] === 1) part[0] += 10
        if (word = digits[part[0]]) result.push(word)
        if (word = tens[part[1]]) result.push(word)
        if (word = digits[part[2]]) result.push(word + ' hundred')
    }

    return result.reverse().join(' ');
}
