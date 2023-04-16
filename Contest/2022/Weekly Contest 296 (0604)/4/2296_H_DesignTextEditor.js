/**
 * 06/04/22 evening
 * https://leetcode.com/contest/weekly-contest-296/problems/design-a-text-editor/
 */

const pr = console.log;

// Accepted
// reference: https://leetcode.com/problems/design-a-text-editor/discuss/2112542/Javascript-719ms
function TextEditor() {
    let L = '', R = '';
    return { addText, deleteText, cursorLeft, cursorRight }
    function addText(text) {
       L += text;
    }
    function deleteText(k) {
        let remove = Math.min(k, L.length);
        L = L.slice(0, L.length - remove);
        // pr("delete", L, R)
        return remove;
    }
    function cursorLeft(k) {
        let leftmove = Math.min(L.length, k);
        R = L.slice(L.length - leftmove) + R;
        L = L.slice(0, L.length - leftmove);
        let t = Math.min(10, L.length);
        // pr("cursorLeft", "L", L, "R", R, "leftmove", leftmove);
        return L.slice(L.length - t);
    }
    function cursorRight(k) {
        let leftmove = Math.min(R.length, k);
        L += R.slice(0, leftmove);
        R = R.slice(leftmove);
        let t = Math.min(10, L.length);
        // pr("cursorRight", "L", L, "R", R, "leftmove", leftmove)
        return L.slice(L.length - t);
    }
}

///////////////////////////////////////////////////////////////////////////
// TLE
function TextEditor2() {
    let a = [], p = 0;
    return { addText, deleteText, cursorLeft, cursorRight }
    function addText(text) {
        for (const c of text) {
            a.splice(p, 0, c);
            p++;
        }
        // pr(111, a.join(""), 'p', p);
    }
    function deleteText(k) {
        let remove = Math.min(k, p);
        for (let i = 0; i < remove; i++) {
            a.splice(p - 1, 1);
            p--;
            // pr(222, a.join(""), p);
        }
        return remove;
    }
    function cursorLeft(k) {
        if (p - k < 0) {
            p = 0;
        } else {
            p -= k;
        }
        let t = Math.min(10, a.length), l = Math.max(0, p - t);
        let res = '';
        for (let i = l; i < p; i++) res += a[i];
        return res;
    }
    function cursorRight(k) {
        if (p + k >= a.length) {
            p = a.length;
        } else {
            p += k;
        }
        let t = Math.min(10, a.length), l = Math.max(0, p - t);
        let res = '';
        for (let i = l; i < p; i++) res += a[i];
        return res;
    }
}

// TLE
function TextEditor1() {
    let s = '', p = 0;
    return { addText, deleteText, cursorLeft, cursorRight }
    function addText(text) {
        if (p == 0) {
            s = text + s;
        } else if (p == text.length) {
            s += text;
        } else {
            s = s.slice(0, p) + text + s.slice(p);
        }
        p += text.length;
        // pr("add", s, s.length, "p", p)
    }
    function deleteText(k) {
        let remove = Math.min(k, p);
        // pr(333, "delete_begin", s, s.length, p, p - remove)
        s = s.slice(0, p - remove) + s.slice(p);
        p -= remove;
        // pr(333, "delete_end", s, s.length, "p", p)
        return remove;
    }
    function cursorLeft(k) {
        // pr(111, "p", p)
        if (p - k < 0) {
            p = 0;
        } else {
            p -= k;
        }
        let t = Math.min(10, s.length), l = Math.max(0, p - t);
        // pr(111, "cursorLeft", "t", t, [l, p], s)
        return s.slice(l, p);
    }
    function cursorRight(k) {
        // pr(222, p)
        if (p + k >= s.length) {
            p = s.length;
        } else {
            p += k;
        }
        let t = Math.min(10, s.length), l = Math.max(0, p - t);
        // pr(222, "cursorRight", "t", t, [l, p], s)
        return s.slice(l, p);
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