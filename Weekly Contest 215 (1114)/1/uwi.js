// 11.14 evening
// Accepted --- 308ms
function OrderedStream(n) {
    this.ptr = 1;
    this.data = new Array(n).fill(null);
};

OrderedStream.prototype.insert = function (id, value) {
    this.data[id] = value;
    let res = [];
    while (this.data[this.ptr] != null) {
        res.push(this.data[this.ptr]);
        this.ptr++;
    }
    console.log(this.data)
    return res;
};

const main = () => {
    let os = new OrderedStream(5);
    console.log(os.insert(3, "ccccc")); // Inserts (3, "ccccc"), returns []
    console.log(os.insert(1, "aaaaa")); // Inserts (1, "aaaaa"), returns ["aaaaa"].
    console.log(os.insert(2, "bbbbb")); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
    console.log(os.insert(5, "eeeee")); // Inserts (5, "eeeee"), returns [].
    console.log(os.insert(4, "ddddd")); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].
};

main()