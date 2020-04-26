// 4.18 night
// Accepted
const reformat = (s) => {
    let digit = [];
    let letter = [];
    let build = "";

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) >= 'a' && s.charAt(i) <= 'z') {
            letter.push(s.charAt(i));
        } else {
            digit.push(s.charAt(i));
        }
    }
    // console.log(digit);
    // console.log(letter);

    if (letter.length - digit.length == 1) {
        // letter, digit .....
        for (let i = 0; i < digit.length; i++) {
            build += letter[i] += digit[i]
        }
        build += letter[letter.length - 1]  // last letter
        return build;
    }

    if (digit.length - letter.length == 1) {
        for (let i = 0; i < letter.length; i++) {
            build += digit[i] += letter[i]
        }
        build += digit[digit.length - 1]  // last digit
        return build;
    }

    if (digit.length == letter.length) {
        for (let i = 0; i < letter.length; i++) {
            build += digit[i] += letter[i]
        }
        return build;
    }

    // console.log(build)

    return "";
};


const main = () => {
    s1 = "a0b1c2";
    s2 = "leetcode";
    s3 = "1229857369";
    s4 = "covid2019";
    s5 = "ab123";

    console.log(reformat(s1))

    console.log(reformat(s2))

    console.log(reformat(s3))

    console.log(reformat(s4))

    console.log(reformat(s5))
}

main()