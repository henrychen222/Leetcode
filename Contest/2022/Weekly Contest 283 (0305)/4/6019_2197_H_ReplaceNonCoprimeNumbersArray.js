// 03/05/22 night

const pr = console.log;

const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);

const replaceNonCoprimes = (a) => {
    let st = [];
    for (let x of a) {
        // pr(x, st);
        if (st.length == 0) {
            st.push(x);
        } else {
            while (st.length && gcd(st[st.length - 1], x) != 1) { // check if it can be merged with the value to its left.
                let last = st.pop(), g = gcd(x, last);
                // pr("before", x, last, g)
                x = x / g * last; // merge new value to x
                // pr("after", x);
            }
            st.push(x);
        }
    }
    return st;
};

const main = () => {
    let a = [6, 4, 3, 2, 7, 6, 2];
    let a2 = [2, 2, 1, 1, 3, 3, 3];
    pr(replaceNonCoprimes(a))
    pr(replaceNonCoprimes(a2))
};

main()
