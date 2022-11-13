// 06/04/22 night

const pr = console.log;

// TLE
// https://leetcode.com/contest/weekly-contest-296/ranking/116/
function TextEditor() {
    let s = '', p = 0;
    return { addText, deleteText, cursorLeft, cursorRight }
    function addText(text) {
        s = s.slice(0, p) + text + s.slice(p);
        p += text.length;
    }
    function deleteText(k) {
        let remove = 0;
        if (p >= k) {
            s = s.slice(0, p - k) + s.slice(p);
            remove = k;
            p -= k;
        } else {
            s = s.slice(p);
            remove = p;
            p = 0;
        }
        return remove;
    }
    function cursorLeft(k) {
        if (p >= k) {
            p -= k;
        } else {
            p = 0;
        }
        return s.slice(Math.max(0, p - 10), p);
    }
    function cursorRight(k) {
        if (p + k <= s.length) {
            p += k;
        } else {
            p = s.length;
        }
        return s.slice(Math.max(0, p - 10), Math.min(p, s.length));
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