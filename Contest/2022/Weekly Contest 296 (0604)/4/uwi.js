// 06/04/22 night

const pr = console.log;

// https://stackoverflow.com/questions/60052873/how-to-implement-deque-data-structure-in-javascript
function Deque1() {
    let data = {}, front = 0, back = 1, size = 0;
    return { addFirst, poll, add, pollLast, peek, peekLast, sz, show }
    function addFirst(value) {
        if (size >= Number.MAX_SAFE_INTEGER) throw "Deque capacity overflow";
        size++;
        front = (front + 1) % Number.MAX_SAFE_INTEGER;
        data[front] = value;
    }
    function poll() {
        if (!size) return;
        let value = peek();
        size--;
        delete data[front];
        front = (front || Number.MAX_SAFE_INTEGER) - 1;
        return value;
    }
    function add(value) {
        if (size >= Number.MAX_SAFE_INTEGER) throw "Deque capacity overflow";
        size++;
        back = (back || Number.MAX_SAFE_INTEGER) - 1;
        data[back] = value;
    }
    function pollLast() {
        if (!size) return;
        let value = peekLast();
        size--;
        delete data[back];
        back = (back + 1) % Number.MAX_SAFE_INTEGER;
        return value;
    }
    function peek() {
        if (size) return data[front];
    }
    function peekLast() {
        if (size) return data[back];
    }
    function show() {
        return data;
    }
    function sz() {
        return size;
    }
}

// TLE
function TextEditor2() {
    let L = new Deque1(), R = new Deque1();
    return { addText, deleteText, cursorLeft, cursorRight }
    function addText(text) {
        for (const c of text) L.add(c);
    }
    function deleteText(k) {
        let remove = Math.min(k, L.sz());
        for (let i = 0; i < remove; i++) L.pollLast();
        return remove;
    }
    function cursorLeft(k) {
        let leftmove = Math.min(L.sz(), k);
        while (leftmove--) {
            let c = L.pollLast();
            R.addFirst(c);
        }
        let t = Math.min(10, L.sz());
        let res = '';
        for (let i = 0; i < t; i++) res = L.pollLast() + res;
        for (let i = 0; i < t; i++) L.add(res[i]);
        return res;
    }
    function cursorRight(k) {
        let leftmove = Math.min(R.sz(), k);
        while (leftmove--) {
            let c = R.poll();
            L.add(c);
        }
        let t = Math.min(10, L.sz());
        let res = '';
        for (let i = 0; i < t; i++) res = L.pollLast() + res;
        for (let i = 0; i < t; i++) L.add(res[i]);
        return res;
    }
}

////////////////////////////////////////////////////////////////////////////////////
function Deque () {
    let m = {}, first = 0, last = -1;
    return { unshift, shift, push, pop, front, back, size, show }
    function push(...args) {
        let i = 0;
        if (size() == 0) {
            first = last = 0;
            m[first] = args[i++];
        }
        for (; i < args.length; i++) m[++last] = args[i];
    }
    function unshift(...args) {
        let i = 0;
        if (size() == 0) {
            first = last = 0;
            m[first] = args[i++];
        }
        for (; i < args.length; i++) m[--first] = args[i];
    }
    function pop() {
        let res = m[last];
        delete m[last];
        last--;
        return res;
    }
    function shift() {
        let res = m[first];
        delete m[first];
        first++;
        return res;
    }
    function front() {
        return m[first];
    }
    function back() {
        return m[last];
    }
    function size() {
        if (first > last) return 0;
        return last - first + 1;
    }
    function show() {
        return m;
    }
}

// TLE  use js Array []
// Accepted use Deque https://codeforces.com/contest/1675/submission/155979745
function TextEditor() {
    // let L = [], R = [];
    let L = new Deque(), R = new Deque();
    return { addText, deleteText, cursorLeft, cursorRight }
    function addText(text) {
        for (const c of text) L.push(c);
        // pr("add", L.show(), R.show())
    }
    function deleteText(k) {
        // let remove = Math.min(k, L.length);
        let remove = Math.min(k, L.size());
        for (let i = 0; i < remove; i++) L.pop();
        // pr("delete", L, R)
        return remove;
    }
    function cursorLeft(k) {
        // let leftmove = Math.min(L.length, k);
        let leftmove = Math.min(L.size(), k);
        // pr("cursorLeft_begin", "L", L.join(""), "R", R.join(""), leftmove)
        while (leftmove--) {
            let c = L.pop();
            R.unshift(c);
        }
        let t = Math.min(10, L.size());
        // let t = Math.min(10, L.length);
        // pr("cursorLeft_begin222", "L", L.join(""), "R", R.join(""))
        let res = '';
        for (let i = 0; i < t; i++) res = L.pop() + res;
        for (let i = 0; i < t; i++) L.push(res[i]);
        // pr("cursorLeft_end", "L", L.join(""), "R", R.join(""))
        return res;
    }
    function cursorRight(k) {
        let leftmove = Math.min(R.size(), k);
        // let leftmove = Math.min(R.length, k);
        // pr("cursorRight_begin", "L", L, "R", R, leftmove)
        while (leftmove--) {
            let c = R.shift();
            L.push(c);
        }
        // pr("cursorRight_begin222", "L", L, "R", R)
        // let t = Math.min(10, L.length);
        let t = Math.min(10, L.size());
        let res = '';
        for (let i = 0; i < t; i++) res = L.pop() + res;
        for (let i = 0; i < t; i++) L.push(res[i]);
        // pr("cursorRight_end", "L", L, "R", R)
        return res;
    }
}

const main = () => {
    let textEditor = new TextEditor();
    textEditor.addText("leetcode");
    pr(textEditor.deleteText(4)); // 4
    textEditor.addText("practice");
    pr(textEditor.cursorRight(3)); // "etpractice"
    pr(textEditor.cursorLeft(8)); // "leet"
    pr(textEditor.deleteText(10)); // 4
    pr(textEditor.cursorLeft(2)); // return ""
    pr(textEditor.cursorRight(6)); // return "practi"

    pr("-------------------------")
    let debug1 = new TextEditor();
    debug1.addText("arnvmumatgmyw");
    pr(debug1.deleteText(5)); // 5
    debug1.addText("zrlufuifuy");
    pr(debug1.cursorLeft(2)); // "mazrlufuif"
    debug1.addText("unh");
    pr(debug1.deleteText(20)); // 19
    debug1.addText("kwwp");
    pr(debug1.cursorLeft(6));
    pr(debug1.deleteText(9)); // 0


    pr("-------------------------")
    let debug2 = new TextEditor();
    debug2.addText("bxyackuncqzcqo");
    pr(debug2.cursorLeft(12)); // "bx"
    pr(debug2.deleteText(3)); // 2
    pr(debug2.cursorLeft(5)); // ""
    debug2.addText("osdhyvqxf");
    pr(debug2.cursorRight(10)); // "yackuncqzc"
};

main()