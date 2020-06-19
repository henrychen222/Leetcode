/**
 * 6.18 night
 * https://leetcode.com/problems/bulls-and-cows/
 */

// need to fix
const getHint = (secret, guess) => {
    let bull = 0;
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] == guess[i]) {
            bull++;
            secret = secret.slice(0, i) + secret.slice(i + 1, secret.length);
            guess = guess.slice(0, i) + guess.slice(i + 1, guess.length);
        }
    }
    // console.log(secret);
    // console.log(guess);
    // secret = secret.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
    // guess = guess.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");

    let cnt = 0;
    let cow = [];
    for (let i = 0; i < secret.length; i++) {
        if (secret.includes(guess[i]) && !cow.includes(guess[i])) {
            cnt++;
            cow.push(guess[i])
        }
    }
    // console.log(bull, cow)
    // return bull + 'A' + cow + 'B';
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let secret = "1807",
        guess = "7810";
    let secret2 = "1123",
        guess2 = "0111";
    let secret_debug1 = "11",
        guess_debug2 = "10"

    console.log(getHint(secret, guess)); // 1A3B
    console.log("");
    console.log(getHint(secret2, guess2)); // 1A1B
    console.log("");
    console.log(getHint(secret_debug1, guess_debug2)); // 1A0B
};

main()