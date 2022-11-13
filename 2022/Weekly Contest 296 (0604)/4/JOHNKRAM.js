// 06/05/22 evening

const pr = console.log;

// Accepted --- 580ms
function TextEditor() {
    let L = [], R = [];
    return { addText, deleteText, cursorLeft, cursorRight }
    function addText(text) {
        for (const c of text) L.push(c);
    }
    function deleteText(k) {
        let remove = Math.min(k, L.length);
        for (let i = 0; i < remove; i++) L.pop();
        return remove;
    }
    function cursorLeft(k) {
        let leftmove = Math.min(L.length, k);
        while (leftmove--) {
            let c = L.pop();
            R.push(c); // change  replace unshift()
        }
        let t = Math.min(10, L.length);
        return L.slice(L.length - t).join("");
    }
    function cursorRight(k) {
        let leftmove = Math.min(R.length, k);
        while (leftmove--) {
            let c = R.pop(); // change  replace shift()
            L.push(c);
        }
        let t = Math.min(10, L.length);
        return L.slice(L.length - t).join("");
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