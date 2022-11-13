// 04/10/21 night

// Accepted --- 8424ms
function MKAverage(m, k) {
    let data = [];
    return { addElement, calculateMKAverage }
    function addElement(num) {
        data.push(num);
        if (data.length > m) data.shift();
    }

    function calculateMKAverage() {
        if (data.length < m) return -1;
        let a = [...data].sort((x, y) => x - y).slice(k, -k);
        let sum = a.reduce(((x, y) => x + y), 0);
        return sum / a.length >> 0;
    }
}

// Accepted --- 9156ms
function MKAverage(m, k) {
    let data = [];
    return { addElement, calculateMKAverage }
    function addElement(num) {
        data.push(num);
        if (data.length > m) data = data.slice(-m);
    }

    function calculateMKAverage() {
        if (data.length < m) return -1;
        let a = [...data].sort((x, y) => x - y).slice(k, -k);
        let sum = a.reduce(((x, y) => x + y), 0);
        return sum / a.length >> 0;
    }
}