/*
 * 05/06/23 evening
 * https://leetcode.com/contest/weekly-contest-344/problems/frequency-tracker/
 */

const pr = console.log;

const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);
const removeOneOrManyMap = (m, x, cnt = 1) => { let occ = m.get(x); occ > cnt ? m.set(x, occ - cnt) : m.delete(x); };

// Accepted
function FrequencyTracker() {
    let m = new Map(), fm = new Map();
    return { add, deleteOne, hasFrequency }
    function add(x) {
        let beforeOcc = m.get(x) || 0;
        addOneOrManyMap(m, x);
        let afterOcc = m.get(x) || 0;
        removeOneOrManyMap(fm, beforeOcc);
        addOneOrManyMap(fm, afterOcc);
        // pr("add", m, fm)
    }
    function deleteOne(x) {
        let beforeOcc = m.get(x) || 0;
        removeOneOrManyMap(m, x);
        let afterOcc = m.get(x) || 0;
        removeOneOrManyMap(fm, beforeOcc);
        addOneOrManyMap(fm, afterOcc);
        // pr("delete", m, fm)
    }
    function hasFrequency(freq) {
        // pr(m, fm)
        return fm.has(freq);
    }
}

const main = () => {
    let frequencyTracker = new FrequencyTracker();
    pr(frequencyTracker.hasFrequency(2)) // false
    frequencyTracker.add(3);
    pr(frequencyTracker.hasFrequency(1)); // true

    pr()
    let frequencyTracker2 = new FrequencyTracker();
    frequencyTracker2.add(1);
    frequencyTracker2.deleteOne(1);
    pr(frequencyTracker2.hasFrequency(1)); // false

    pr()
    let frequencyTracker3 = new FrequencyTracker();
    pr(frequencyTracker3.hasFrequency(2)); // false
    frequencyTracker3.add(3);
    pr(frequencyTracker3.hasFrequency(1)); // true


    pr()
    let debug1 = new FrequencyTracker();
    debug1.add(5);
    debug1.add(5);
    pr(debug1.hasFrequency(1)); // false
    pr(debug1.hasFrequency(2)); // true
    debug1.add(6);
    debug1.add(5);
    debug1.add(1);
};

main()