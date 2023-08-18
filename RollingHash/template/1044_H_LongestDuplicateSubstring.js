/* 
 * 07/31/23 noon
 * https://leetcode.com/problems/longest-duplicate-substring/
 * 
 * https://leetcode.com/contest/weekly-contest-136/ranking
 * 
 * can be solved using suffix Array
 */

const pr = console.log;

const stmkey_de = (m) => new Map([...m].sort(cmp).filter(x => x[1].length > 1));
const cmp = (x, y) => {
    let sx = x[0].split(" ").map(Number), sy = y[0].split(" ").map(Number);
    return (sy[0] + sy[1]) - (sx[0] + sx[1]);
};

const cmp2 = (x, y) => {
    let sx = x.split(" ").map(Number), sy = y.split(" ").map(Number);
    return (sy[0] + sy[1]) - (sx[0] + sx[1]);
};

/////////////////////////////////// Template ////////////////////////////////////////////////////
function RollingHashPolynomial(s, base, mod) {
    base = ll(base), mod = ll(mod);
    let n = s.length, p = Array(n + 1).fill(1n), h = Array(n + 1).fill(0n);
    buildPower();
    buildPrefixHash();
    return { get }
    function buildPower() {
        for (let i = 1; i < p.length; i++) p[i] = (p[i - 1] * base) % mod;
    }
    function buildPrefixHash() {
        for (let i = 0; i + 1 < h.length; i++) h[i + 1] = ((h[i] * base) % mod + ll(s.charCodeAt(i))) % mod;
    }
    function get(l, r) {
        let res = h[r + 1] - h[l] * p[r - l + 1];
        return (res % mod + mod) % mod;
    }
}

const ll = BigInt;
const rabinkarp = (s, size, base, mod) => { // fixed window size
    base = ll(base), mod = ll(mod)
    let n = s.length, p = Array(n + 1).fill(1n), h = Array(n - size + 1), cur = 0n;
    for (let i = 1; i <= n; i++) p[i] = (p[i - 1] * base) % mod;
    for (let i = 0; i < size; i++) cur = (cur * base + ll(s.charCodeAt(i))) % mod;
    h[0] = cur;
    for (let i = 1; i <= n - size; i++) {
        if (size - 1 < 0) {
            cur = -1;
            continue;
        }
        cur = ((cur - p[size - 1] * ll(s.charCodeAt(i - 1))) % mod + mod) % mod;
        cur = (cur * base + ll(s.charCodeAt(i + size - 1))) % mod;
        h[i] = cur;
    }
    return h;
};

////////////////////////////////////////////////////////////////////////////////////////////

// Accepted --- 871ms
const longestDupSubstring = (s) => {
    let n = s.length, low = 0, high = n - 1, start = -1;
    let rh = new RollingHashPolynomial(s, 26, 2n ** 63n - 1n);
    // let rh = new RollingHashPolynomial(s, 26, 1e9 + 7);
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        // pr("h", h)
        let se = new Set(), pos = -1;
        for (let i = 0; i <= n - mid; i++) {
            let hash = rh.get(i, i + mid - 1);
            // pr(hash)
            if (se.has(hash)) {
                pos = i;
                break;
            }
            se.add(hash);
        }
        if (pos == -1) {
            high = mid - 1;
        } else {
            start = pos;
            low = mid + 1;
        }
    }
    // pr(low, high, start);
    return s.slice(start, start + low - 1);
};

// Accepted --- 1879ms
// Accepted --- 1927ms
// reference: https://leetcode.com/problems/longest-duplicate-substring/solutions/695144/intuitive-python3-solution-o-nlogn-time-o-n-space/
const longestDupSubstring3 = (s) => {
    let n = s.length;
    let low = 0; high = n - 1, start = -1;
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        let h = rabinkarp(s, mid, 26, 2n ** 63n - 1n);
        let se = new Set(), pos = -1;
        for (let i = 0; i <= n - mid; i++) {
            if (se.has(h[i])) {
                pos = i;
                break;
            }
            se.add(h[i]);
        }
        // let pos = rabinkarp(s, mid, 26, 2n ** 63n - 1n);
        //pr("mid", mid, "pos",pos)
        if (pos == -1) {
            high = mid - 1;
        } else {
            start = pos;
            low = mid + 1;
        }
    }
    // pr(low, high, start);
    return s.slice(start, start + low - 1);
};


//////////////////////////////////////////////////////////////////////////////////////////
// TLE 27/67
const longestDupSubstring2 = (s) => {
    let n = s.length, rh = new RollingHashPolynomial(s, 26, 1e9 + 7), rh2 = new RollingHashPolynomial(s, 26, 998244353), res = [" ", []], occur = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let hash = rh.get(i, j), hash2 = rh2.get(i, j), ke = hash + " " + hash2, cp = cmp2(res[0], ke);
            if (occur.has(ke)) {
                // pr([i, j], res[0], ke, 'cp', cp)
                if (cp > 0) {
                    res[0] = ke;
                    res[1] = [[i, j]];
                } else if (cp == 0) {
                    res[1].push([i, j]);
                }
                // pr("res", res)
            }
            occur.add(ke);
        }
    }
    res[1].sort((x, y) => (y[1] - y[0]) - (x[1] - x[0]));
    // pr(res);
    if (res[0] == " ") return "";
    let [l, r] = res[1][0];
    return s.slice(l, r + 1);
};

// memory out
const longestDupSubstring1 = (s) => {
    let n = s.length, rh = new RollingHashPolynomial(s, 26, 1e9 + 7), rh2 = new RollingHashPolynomial(s, 26, 998244353), m = new Map();
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let hash = rh.get(i, j), hash2 = rh2.get(i, j), ke = hash + " " + hash2;
            // pr(ke, [i, j])
            if (!m.has(ke)) m.set(ke, []);
            m.get(ke).push([i, j]);
        }
    }
    m = stmkey_de(m);
    // pr(m);
    if (m.size == 0) return "";
    let [l, r] = m.values().next().value[0];
    return s.slice(l, r + 1);
};

const main = () => {
    let s = "banana";
    let s2 = "abcd";
    let s_debug1 = "pmyiaxmicpmvqywlkisfzzutlxxjipitwcfxgqqfnxizowkqfmzsvkxryknasyvthozahbmapwqocupxcktmmtddxgatzftamrsvtddjpbnrojcqonmzxmknashplmykdbadiiccdkbyyzifqxvqfwgwihxgnrhqlmqprnjawuzcotutbkgnykuuwtzzzppmoyfmplhpznpnlwwbndekakpsmehzmbcfoyudgwsvehzgsfwqdkihiiwxfskicrbmoevxvpmmymihlkmgnuyohcofzfkehccwxezxypnnvqzrilr";
    let s_debug2 = "aa";
    let s_debug3 = "yepiywfjnsbvoutspszhkjmtjzvksdoliemtctsffveambxsbwbitxwzwzaraaoofenhvfqhkkkgyowttycdtyjdivmalvgtbayvzauyqfxgrawmpdtbshtuimblnatfrncdeuxtnweiptyskfauqcpnxmfksocacsbzgjbjzlopefwyrafayyfscsmfledxcprzfuhtfvvspunmvibfozatsgtpzkfeupfchrdrxfouqjbqdgchtgeegabohgvzbjhuvigxnjbqdeonysrqpnvrfdvoxnskimpduhwdrobfrwidgvoamjrpmiqlegomwzxbwxqkpiqoxlzqmbwrvoxbwayfeprxsrizkqryclzjeztbnjcaajjbgrlzryjditssvqvrzwytsdtnrmujkdbntiystingvhhbhtibdxaxxgkakkhqyhddwsexqarxmaxnurxlvjgxjxlasvyywelmmjfebosmsngleklaychavswwisnfglzqwungllebkfonbiwyycandlhjelowdcbcxzrjpbbsvbnjxwqcqwaxciugbtiwfovrkwexjxvlohjisyhzgttgrnbbipbbqgevsqegkgjfszjpiesjzdapjqmw";
    let s_debug4 = "mgaxzfplojddpjfrzilfqyjpzazebfzcosjytdrfvvpepwclvblunqbeuwyybwpepzmjaeptxmzvtexxrjeqwzziayrfnuseqofwzqbseqobtwwnxlplbpmddvqclyrhfjwfkxjlgeigeloldfgmfwopiccldbzbncpbubefbuvknlbpvgzrusrugriafrvifzuewitxhohajtgriyfmdzlvjnoofragmttggkrrhmekzfdfwnhrlclebnamodjjhdivlpwjvsowbrrfkszsrcevpbnsncvkvkvukorxhsjpjqsbyibcjzqcujdxvsjaylpfnlfzyrbwovvejagqhqbwrhjyrwastoacsghlywiavxzwdzjfemesfcxmlmxtjjmumvnynftaerxtbbwcxvyccyfmjvfbjndabsxhuiqinhocnwbuqvuiiuhjhfuprrdfhgaflaptumyqzavtacoplflkrsxsvzzsshsgchmiqckuiwvxfhaaretftavfyxenxjgyfljalysmizvrcqxysimusyjbfrvvugijefhbjnfkqlxmmdioioiqxckongoskkwkgqzygencebqoahoslajgreqbgvusczhifyknmfltbrfzhujvnwirmxalciyqfhuedcqgvmycekgjqillryuzaoateuauitgchfrwojfbfrjdjjevcvdyvtjjbgkeaswldeihxgjzvrffxuukcxkcnkyvobisfjwbdpeesyopqdkocqciphbccswtsknjgltndwhtdgmpvhhbmvivwepbnxcsmslnmfknbmsdwlchbnkbwpgolwlgdoksncacbbfifkbwlibxqjuzymqqetdmlqczzfjvxlrfyzerngcamwqjpkchjytjpjoanxceohtffjzpkhkqkvzadwesogucyxjrihashbrqocckxsmmrzsyffgbztqqcakexrhanzftgungwagwbthpqferfqycuegkmrtvomhsfsezhnlbvggsguhbepopavfsoqvutcgylqwiffwhprepuyaogxmwlndnapijdxzvxonftpxzytyhlbteqzgdkgnchkkihxlvzbabbvdrqlyjdhffyavodrypqbodfhnfrvvhlheaygiqofxmezjlkweujktfsajxhzyqgxuisipahjbldqcfnqtjmcmmmdcdvlrdwnaxvsqghvzcxjtrrijgxytwkmwylymkglwdfixzxsphwjdburekghsyfrrxeruvsmhhbprkjkhvylwetnmtoyiwgpfrayyxmitmrdsekldznhnefugnxithtoowpuzybuqegyynqotzronpmofhenpjluxioajzcksjbmhibulreobznxwtwcuwuntwtbxtpjvqbqmscgbatdvpkhlvcxmsctrayjhvyunftznnrrdubaieyujalsvpjcbvaapahzwmjlilgurathawsrgcrtxqzofeprylrtrrugwkejpwxqekyehmjevswjhlijsdqwsymcftypiqvgwfeecnqqwsfxmlnerpglhwvxqanipwhknvltibibkcocyemrnqhcrfehhghswxlzfskxvyyhkmpofkuutqfvtekzcwjsxvelftqdjkeycbuuckevgbdxbnafanhiryktuamexoyqflbkzvlshgnshfciknksuielaluqmddxjfbkzuhvlizciilkukbedabuymgfhzzgwuufvpgieoxzdgvfbvzwrrktapfijlwpwnxawnjdhwnexljuztezyqzpwhnussuxjpejatdsjdwvopfcbnhlumrspxsrpldvbypvmmrezxcctlpokuqjizgmoyhwuxjibzvtgzmzwttepjbzrhzcvoehqcuyshagupyeiqaxfobcodeanbldnqqabzfrxesjdcwqgrrmwwiqhgvbihtxlhtxaupmutifiqkssmmmzsyfmqenyixorypcqqwogykpdnutdbxkcwmgtuzdxdodfmcsdajwcebvhbifjyahkoeoukkbzxtvokejsdsacmsnwmbldcrovhretafjkbmjgfyatinszlxhanphpmklvvjehgrkuzateqeeboqrmxynzniksciyrsctendetfavwhaxfzetyxcnxfquobhhwkdaqjjtibkqyiiyzkmftjcybrriwximfinrpofdyojqhsphtlbpundbttkivvjwikxclhttmyosptwbuybuesucfmdmpvnauggqqijrhzjxrdobtskctyvlxqebnlrcbntqmotktnzeezdkbpoienebtaqgnuhmkzbmpogippuvuterfkxgokldlzkqliqsgchsxhvzdrqicprdaoytbfetzuqofjyznbkuwwfvniijotnisljyyjhjtumezccnevmdeguupiduvfgbttuomawrciruzuicfkjbmgfgozjzhfqaiovxqzddfdwtucwhmgetcikvsyvxaexzhxfqdoqrogxwurskqrzulkpjjphvldfgthicuptfganovpieincqboorlzzdhjjtskwhpgfjtaoyclvdntygilyhrvybdxerchzgqlwwnvwupulruwediayxgxcorjaqavvpoivmobghzgbzjeqedwivayvcpmfmmehbqrqhcvgnjckksesskvjvbzeiavprknmwylfsmxywxkykhotsujfvimbkxmyaxoysdmhjkpbuzvflkqnnsstskxstjqwisnojdjtqrvxdfrznvyabmcgrwvlelqoynsximbmjynkhzjevkzysthsnxegwmerekeiraxuifchgznixkbiitjfcdsjienxqshuvfyuhoxrglrtaxawrdjhmlzdmrrovytzffgykfksrpeljvzqrvmtfahifqpxbppwpqgrypjhzqamrmbbmbgdsrjlquwukcjdsrigowdnbwvmoigxnoihkcvbscnzlbexxlyyyzkssrwciroteupngylxcwpfwcnpdpgvmreysrqarqoynvegbnhwshqnvewvokndhkfemhqdxgqcqqwxeqeqzwpwicnrgdidzlibcfoujmatlgaqurpmhhifzjjoyrtkublkrompwlkcqvhojwhfoltnyekmptryyqcnifyieeczlgdefqlutqgxpflghzdsxmijrjgdxcblhadtvvpedmnbuwhwhnpkeajjjpyrpzfnpbduxbrhjfhwyvinbjswltxlbtfizkxkwjcoetrwfpqmwkheaiamkhfkgmgxljeogxafcozyvkbyanyzunmrecahlfnkqlkygvpbvlyruzlwzgqjzkzpxddyncodfmyloougiyrphvnaplukrfdxiowgvikyoyxbuymesnrxqvadhifmbguwmrceiloizgrydzgftgwrydjloaofgrrgkiymomzuuwkcedlwtdrdrbsbeunxjgiwcmznzxbgrxfnriehbwjcwbkyjesedutikpfyqarlredjfdvvljgihxcedqoaidaaosnaxvavpkkupqgqjakcsjgmyxotkdlzwputwmqecbzolliozphjrystqtnupyqbvykxyyerckzmrdjdlrfsemwlgejbzjpttlxkeaqtnfnwzngpeywbgvpzawplpmlgstmspvtjiqgbvdvrfbdwufujxxlxgopryjogopbeltokspsjgbcehnlilbmiwyhuaecujkgzmfpzkvicrsfdlhnvqejjeoflnrlzfqgxglulhqypzqrtkkcrrtzzlhzpylsujebfwgqlegekdeqcyxxdtiysaupklipjblbedmfzncuvmlkgmcchngyyvwjzcrmqhzvuabwpmuykuhxeqvnaxpgymdunopitoinbxjfcjdlbooteuczpocgwpdxtqufjxtphqzlsmlyinjumixosqpvlfhmyzqiairxrucddgrbvdccxdizdlsruogbxmzcotumekjjpkcyavitllwyuztzyuylwtotsqmdnfiygxtdokmoczbyfeymtltrbnthqxpomxrotxpnltitsmvkwqkugzqgydtkhfswqxpyhjocibjxxfrundalccpfncasghgyxnwergtreksytwzkkpzvdsrdatxjrkemmgtqfpmngddeucxjjfrtmzlzwljkqyibpjtrepcnssoidrhpuaeezkdjplwxmwvvwvoltwshcrxngjywccbdpeqhhufzeitcesuitnbhlkjrckvqqytluoflaesoorywtmvgyoesjycytvevvgxkgaiulrehgknpmrfqjssmeicajbgjvgvkkxcgxuoixawdqurtjuwxdzrxjlgenronmufxunkpltkgyjayehnuamszwcnnnfnnyqepizroaqzwnahhdjnivcptpqawbintdeinfttyvteitaopricqrnchkvmpvtfyphznbfjawekhctsmshvhnsctszkxyahugosyvleeittuhbrtrarzyavktihhpfnyoviuszfpfffrygaogwkdprdxbgnaopujqlpaxzufnxzjeqagkdlhcrcawskfownetawtpzevwbamawxslswqaexnwvhqajzivvgkfpluseswpoctkpizogahoklwyejhwjhaupeaunvhjpnxxulmbfzbhuxgkvyhdnncjrbmbybotgcvfgwkefjcvehlbbduuumyebdbqwngcydrxrcljhonunlzjaoyadhfughnhaiuqtldknemtksijhkicdlqmynnjhhfioaddsydyrentgymfafichahlorzzflsljiynuqiybusajrrxbldnyemxsukpinwcxiheurlxnyjvzxhdcuoulgjnwmtquymuplfzfgzalonjvgrzehcqycizqdfcgigoztxccoopmdpnnfoxlfrfsqrggacepeufsgwxeziryoelnquygndijphvpwqddjwjamowuubvritqhbahvsoqwskzkhmoxpweiffmitucqyllqrxnviwgexhexakysvkommgxstlglvgydpbzszwlfvecynqieburpxluhbvdycpqlqgegmqsgjwekzresndxensjvrulkxbouzbonpcpofltjedrxzjkdeyxrvbotftfhsjndxbnkjlhqstyhnqxcvrtgukqpqqehuajriegobzdjncfvqodgcxftdqjcjjwtrtptfsmawxaruejrvwesgryrdmycuxcnixlnqnvgbunhjmftagjqxmggrmintwvtgllhufbsebekcfpstzrukekonhynrfnfrhwnifdkwsgvlypcufpcexdvwepxvaqcsupwwihveddagmgietshzryquierxskxnxjuqujcdlthaoemqlqorbpjgekazzrisbjdnyaljchjeuyyqgvyutamrmrgzqqgorggdzdociqgwmryawqdyonrqtzzwosjhymlodrwdhydgwuidhbz";
    pr(longestDupSubstring(s))
    pr(longestDupSubstring(s2))
    pr(longestDupSubstring(s_debug1)) // "knas"
    pr(longestDupSubstring(s_debug2)) // "a"
    pr(longestDupSubstring(s_debug3)) // "jbqd"
    pr(longestDupSubstring(s_debug4)) // "xjlge"
};

main()