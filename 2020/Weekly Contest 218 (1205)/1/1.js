/**
 * 12.5 evening
 * https://leetcode.com/contest/weekly-contest-218/problems/goal-parser-interpretation/
 */

// Accepted
const interpret = (command) => {
    let n = command.length;
    let res = "";
    for (let i = 0; i < n;) {
        if (command[i] == 'G') {
            res += 'G';
            i++;
        } else if (command[i] == '(') {
            if (i + 1 < n) {
                if (command[i + 1] == ')') {
                    res += 'o';
                    i += 2;
                } else {
                    res += 'al';
                    i += 4;
                }
            }
        }
        // console.log(res);
    }
    return res;
};

const main = () => {
    let command = "G()(al)";
    let command2 = "G()()()()(al)";
    let command3 = "(al)G(al)()()G";
    console.log(interpret(command));
    console.log(interpret(command2));
    console.log(interpret(command3));
};

main()