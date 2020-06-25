/**
 * 6.23 evening
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 */

// Accepted --- 88ms 37.4MB 16.16% (linearSearch)
const nextGreatestLetter = (letters, target) => {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt() > target.charCodeAt()) {
            return letters[i];
        }
    }
    return letters[0];
};

const main = () => {
    let letters = ["c", "f", "j"],
        target = "a";
    let letters2 = ["c", "f", "j"],
        target2 = "c";
    let letters3 = ["c", "f", "j"],
        target3 = "d";
    let letters4 = ["c", "f", "j"],
        target4 = "g";
    let letters5 = ["c", "f", "j"],
        target5 = "j";
    let letters6 = ["c", "f", "j"],
        target6 = "k";
    console.log(nextGreatestLetter(letters, target));
    console.log(nextGreatestLetter(letters2, target2));
    console.log(nextGreatestLetter(letters3, target3));
    console.log(nextGreatestLetter(letters4, target4));
    console.log(nextGreatestLetter(letters5, target5));
    console.log(nextGreatestLetter(letters6, target6));
};

main()