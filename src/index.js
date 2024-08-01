module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) return "zero";

    let words = [];

    if (Math.floor(number / 100) > 0) {
        words.push(units[Math.floor(number / 100)] + " hundred");
        number %= 100;
    }

    if (number >= 20) {
        words.push(tens[Math.floor(number / 10) - 1]);
        number %= 10;
    } else if (number >= 11 && number <= 19) {
        words.push(teens[number - 11]);
        number = 0;
    } else if (number === 10) {
        words.push(tens[0]);
        number = 0;
    }

    if (number > 0) {
        words.push(units[number]);
    }

    return words.join(" ");
};
