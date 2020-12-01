// 11.30 evening
/**
 * https://www.techiedelight.com/replace-character-specified-index-javascript/
 * https://www.w3docs.com/snippets/javascript/how-to-replace-a-character-at-a-particular-index-in-javascript.html
 * https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
 */
String.prototype.replaceAt = function (idx, replace) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.slice(0, idx) + replace + this.slice(idx + replace.length);
}

String.prototype.replaceAt2 = function (idx, replace) {
    if (index >= this.length) {
        return this.valueOf();
    }
    let arr = this.split('');
    arr[idx] = replace;
    return arr.join('');
}