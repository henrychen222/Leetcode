
const isSpecial = (s) => new Set(s).size == s.length;

const main = () => {
    let res = [], block_size = 5e5; // 区间段长
    for (let i = 1; i * block_size <= 2e9; i++) {
        let tot = 0, L = (i - 1) * block_size + 1, R = i * block_size;
        for (let x = L; x <= R; x++){ //统计[L, R]的特殊整数 
            if (isSpecial(x + '')) tot++;
        }
        res.push(tot);
    }
    console.log(res);
};


main()