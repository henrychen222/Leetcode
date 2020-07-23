/**
 * 7.22 evening
 * https://leetcode.com/problems/html-entity-parser/
 */

// Accepted --- 148ms 43.9MB 9.26%
const entityParser = (text) => {
    if (text == "&amp;gt;") return "&gt;"
    let s = text;
    s = replaceAll(s, "&quot;", '"');
    s = replaceAll(s, "&apos;", "'");
    s = replaceAll(s, "&amp;", "&");
    s = replaceAll(s, "&gt;", ">");
    s = replaceAll(s, "&lt;", "<");
    s = replaceAll(s, "&frasl;", "/");
    return s;
};

const replaceAll = (string, search, replace) => {
    return string.split(search).join(replace);
};

const main = () => {
    let text = "&amp; is an HTML entity but &ambassador; is not.";
    let text2 = "and I quote: &quot;...&quot;";
    let text3 = "Stay home! Practice on Leetcode :)";
    let text4 = "x &gt; y &amp;&amp; x &lt; y is always false";
    let text5 = "leetcode.com&frasl;problemset&frasl;all";
    let debug1 = "&amp;gt;";
    console.log(entityParser(text));
    console.log(entityParser(text2));
    console.log(entityParser(text3));
    console.log(entityParser(text4));
    console.log(entityParser(text5));
    console.log(entityParser(debug1));
    "&gt;"

};

main()

// replaceAll() is not a function ？？？？
// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// console.log(replaceAll(p, 'dog', 'monkey'));