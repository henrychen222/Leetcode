/**
 * 06/19/21 evening
 * https://leetcode.com/contest/weekly-contest-246/problems/the-number-of-full-rounds-you-have-played/
 */

const pr = console.log;

// fuck hidden case
// Accepted
const numberOfRounds = (st, ft) => {
    let as = st.split(':');
    let af = ft.split(':');
    let [hs, ms, hf, mf] = [Number(as[0]), Number(as[1]), Number(af[0]), Number(af[1])];
    // pr(hs, ms, hf, mf)
    let tmpst = forwardst(hs, ms);
    [hs, ms] = [tmpst[0], tmpst[1]];
    // r(hs, ms, hf, mf)
    let tmpft = backwardft(hf, mf);
    [hf, mf] = [tmpft[0], tmpft[1]];
    // pr(hs, ms, hf, mf)
    // if (hs == 0 && hf == 0) {
    //     if (ms > mf) hf = 24;
    // }
    // pr(hs, ms, hf, mf)
    let tot = 0;
    if (hs < hf || (hs == hf && ms <= mf)) { // fuck problem here
    // if (hs <= hf) {
        // pr("111111")
        tot += (60 - ms);
        hs++;
        tot += (hf - hs) * 60;
        tot += mf;
    } else {
        // pr("22222")
        tot += (60 - ms);
        hs++;
        tot += (24 - hs) * 60;
        tot += hf * 60;
        tot += mf;
    }
    // pr(tot);
    return tot / 15;
};

const forwardst = (hour, minute) => {
    if (minute == 0 || minute == 15 || minute == 30 || minute == 45) return [hour, minute];
    if (minute > 0 && minute < 15) {
        return [hour, 15];
    } else if (minute > 15 && minute < 30) {
        return [hour, 30];
    } else if (minute > 30 && minute < 45) {
        return [hour, 45];
    } else if (minute > 45 && minute < 60) {
        return [hour + 1, 0];
    }
};

const backwardft = (hour, minute) => {
    if (minute == 0 || minute == 15 || minute == 30 || minute == 45) return [hour, minute];
    if (minute > 0 && minute < 15) {
        // if (hour == 0) {
        //     return [24, 0];
        // }
        return [hour, 0];
    } else if (minute > 15 && minute < 30) {
        return [hour, 15];
    } else if (minute > 30 && minute < 45) {
        return [hour, 30];
    } else if (minute > 45 && minute < 60) {
        return [hour, 45];
    }
};

const main = () => {
    let startTime = "12:01", finishTime = "12:44";
    let startTime2 = "20:00", finishTime2 = "06:00";
    let startTime3 = "00:00", finishTime3 = "23:59";
    let startTime4 = "20:01", finishTime4 = "06:05";
    let startTime_debug1 = "00:01", finishTime_debug1 = "00:00";
    let startTime_test1 = "00:15", finishTime_test1 = "00:00";
    let startTime_test2 = "00:30", finishTime_test2 = "00:00";

    let startTime_test3 = "00:00", finishTime_test3 = "00:01";
    let startTime_test4 = "00:00", finishTime_test4 = "00:15";
    let startTime_test5 = "22:59", finishTime_test5 = "23:59";
    let startTime_test6 = "00:45", finishTime_test6 = "00:43";
    pr(numberOfRounds(startTime, finishTime))
    pr(numberOfRounds(startTime2, finishTime2))
    pr(numberOfRounds(startTime3, finishTime3))
    pr(numberOfRounds(startTime4, finishTime4))
    pr(numberOfRounds(startTime_debug1, finishTime_debug1)) // 95;

    pr(numberOfRounds(startTime_test1, finishTime_test1)) // 95
    pr(numberOfRounds(startTime_test2, finishTime_test2)) // 94
    pr(numberOfRounds(startTime_test3, finishTime_test3)) // 0
    pr(numberOfRounds(startTime_test4, finishTime_test4)) // 1
    pr(numberOfRounds(startTime_test5, finishTime_test5)) // 3
    pr(numberOfRounds(startTime_test6, finishTime_test6)) // 95

    ///////// after contest ///////////////////////////////////
    let startTime_hidden = "23:01", finishTime_hidden = "23:00";
    let startTime_debug2 = "22:46", finishTime_debug2 = "23:01";
    pr(numberOfRounds(startTime_hidden, finishTime_hidden)) // 95
    pr(numberOfRounds(startTime_debug2, finishTime_debug2)) // 0
};

main()


// pr(15 * 4 * 24); // 1440