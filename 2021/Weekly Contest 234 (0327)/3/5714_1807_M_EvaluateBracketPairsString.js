/**
 * 03/27/21 evening
 * https://leetcode.com/contest/weekly-contest-234/problems/evaluate-the-bracket-pairs-of-a-string/
 */

const pr = console.log;

// TLE
const evaluate1 = (s, knowledge) => {
    let m = new Map();
    for (const e of knowledge) {
        m.set(e[0], e[1]);
    }
    let st = [];
    for (const c of s) {
        if (st.length != 0) {
            if (c == ')') {
                let ke = '';
                let end = st[st.length - 1];
                while (end != '(') {
                    ke = end + ke;
                    st.pop();
                    end = st[st.length - 1];
                    // pr("1111", ke, st);
                }
                st.pop();
                if (m.has(ke)) {
                    st = st.concat(m.get(ke).split(""));
                } else {
                    st.push('?');
                }
            } else {
                st.push(c);
            }
        } else {
            st.push(c);
        }
        // pr(st)
    }
    return st.join("");
};

// TLE
const evaluate2 = (s, knowledge) => {
    let m = new Map();
    for (const e of knowledge) {
        m.set(e[0], e[1]);
    }
    let st = [];
    for (const c of s) {
        if (st.length != 0) {
            if (c == ')') {
                let leftIdx = st.lastIndexOf('(');
                let tmp = st.slice(leftIdx + 1);
                st = st.slice(0, leftIdx);
                let ke = tmp.join("");
                if (m.has(ke)) {
                    st = st.concat(m.get(ke).split(""));
                } else {
                    st.push('?');
                }
            } else {
                st.push(c);
            }
        } else {
            st.push(c);
        }
    }
    return st.join("");
};

// Accepted
const evaluate = (s, knowledge) => {
    let m = new Map();
    for (const e of knowledge) {
        m.set(e[0], e[1]);
    }
    let st = '';
    for (const c of s) {
        if (st.length != 0) {
            if (c == ')') {
                let leftIdx = st.lastIndexOf('(');
                let ke = st.slice(leftIdx + 1);
                st = st.slice(0, leftIdx);
                if (m.has(ke)) {
                    st += m.get(ke);
                } else {
                    st += '?';
                }
            } else {
                st += c;
            }
        } else {
            st += c;
        }
    }
    return st;
};

const main = () => {
    let s = "(name)is(age)yearsold", knowledge = [["name", "bob"], ["age", "two"]];
    let s2 = "hi(name)", knowledge2 = [["a", "b"]];
    let s3 = "(a)(a)(a)aaa", knowledge3 = [["a", "yes"]];
    let s4 = "(a)(b)", knowledge4 = [["a", "b"], ["b", "a"]];
    pr(evaluate(s, knowledge));
    pr(evaluate(s2, knowledge2));
    pr(evaluate(s3, knowledge3));
    pr(evaluate(s4, knowledge4));
};

main()