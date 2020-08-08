/**
 * 8.7 night
 * https://leetcode.com/problems/subdomain-visit-count/
 */

// Accepted --- 112ms 41MB 45.13%
const subdomainVisits = (cpdomains) => {
    let elements = new Set();
    let data = [];
    for (const cpd of cpdomains) {
        let domain = cpd.split(" ");
        data.push(domain);
        elements.add(domain[1]);
        let tmp = domain[1].split(".");
        if (tmp.length == 3) {
            elements.add(tmp[1] + '.' + tmp[2]);
            elements.add(tmp[2]);
        } else {
            elements.add(tmp[1]);
        }
    }
    // console.log(data);
    // console.log(elements);
    let res = [];
    elements.forEach(x => {
        let sum = 0;
        for (const d of data) {
            // console.log(d[1], x)
            let idx;
            if (x.indexOf('.') == -1) { // Make sure this case ["6874 coo.yvs.co"] should be "6874 co" not "0 co", if no "." in x, should search from the last
                idx = d[1].lastIndexOf(x);
            } else {
                idx = d[1].indexOf(x);
            }
            let end = idx + x.length - 1;
            // console.log(idx, d[1].length, x.length)
            if (idx != -1) {
                if (end == d[1].length - 1) { // make sure this case ["4198 xfs.okv.co", "4975 okv.com"] should be "4198 okv.co" not "9173 okv.co"
                    sum += Number(d[0]);
                }
            }
        }
        res.push(sum + ' ' + x);
    });
    return res;
};

const main = () => {
    let cpdomains = ["9001 discuss.leetcode.com"];
    let cpdomains2 = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
    // let debug1 = ["2777 nak.mkw.co", "654 yaw.lmm.ca", "3528 jyx.arz.us", "3215 bll.hoh.network", "408 tdt.zfz.network", "3322 xhe.team", "8342 srp.team", "9259 bfo.net", "3875 brk.ato.network", "2531 mce.ser.com", "2471 czb.us", "4806 xss.dfa.co", "654 yls.yjt.co", "767 irh.epf.us", "1501 ara.ca", "243 qay.network", "9103 vbo.org", "6890 bfo.network", "4296 xtb.jre.us", "2329 vva.qay.network", "9846 fuw.org", "4681 lwf.ytn.network", "1781 lbk.ksc.co", "7464 jpd.fff.co", "2740 xhe.org", "4602 weq.buf.team", "3055 fdy.jkx.com", "5705 mqa.wsv.net", "6629 vdu.bfo.team", "9897 lra.uyy.org", "8167 ahm.jre.team", "9374 jep.ato.co", "3624 vmv.epf.network", "6865 thk.net", "6920 tlc.dfa.us", "9372 hci.jia.network", "7968 gjf.network", "7292 zbl.ksc.net", "2862 coh.sci.net", "3855 yjt.network", "1387 hju.gbq.org", "817 sgp.htq.co", "2406 hkb.ocf.co", "622 wmt.cwn.net", "9172 zfz.net", "1523 suq.bhp.co", "9581 gqi.team", "2160 hsj.epf.org", "32 ulz.com", "1225 lmm.ca", "1137 ujs.qzi.co", "5041 cdf.hwu.us", "4126 lir.ajl.team", "3111 gdw.team", "8928 arz.org", "9531 hoh.co", "7344 czb.com", "2715 ubt.okv.us", "1110 kdd.znq.us", "5729 srp.com", "6122 nqk.srp.org", "7193 xth.fzx.ca", "3496 ytn.com", "3950 xuf.network", "4521 weh.bfo.us", "3262 mor.ixi.us", "4975 okv.com", "7089 ske.yls.com", "4198 xfs.okv.co", "2444 vks.gxz.team", "1789 xcf.zqy.ca", "7392 uyy.net", "3449 tfm.us", "5907 zfz.us", "9530 omu.network", "3314 ytd.hkt.net", "9523 wyv.cgl.network", "4439 gtu.us", "8390 zqk.network", "1627 bhp.ca", "3609 bhp.team", "8557 uai.lfn.net", "2913 ret.ych.ca", "2447 ksc.com", "7476 cze.yvr.net", "8544 xrj.bhp.com", "6129 hkt.com", "8274 ulz.co", "9219 tfm.ca", "5016 zwv.gqi.co", "5738 lar.bfo.team", "3377 jkx.network", "2979 bhp.org", "8176 ujm.gqs.ca", "84 lmm.network", "3090 ycc.yjt.us", "7042 btv.com", "2965 gxj.org", "8263 cwn.org", "1873 kse.gjf.ca"];
    let debug1 = ["4198 xfs.okv.co", "4975 okv.com"]
    // let debug2 = ["3325 lrp.rbg.co","8712 jeq.iux.com","1146 auv.jtg.team","6992 lfn.us","1512 jnb.hwu.team","1556 ocf.ca","1105 zqk.us","219 ser.team","1227 ytn.us","484 mgu.rbg.org","3855 cdv.jkx.net","7872 gqs.co","4870 jnk.mkw.net","7682 wqv.net","8013 btv.team","2854 ena.zfz.co","883 tgr.bfo.network","6878 llq.ksc.com","480 gjf.co","4823 knr.gdw.org","6222 hal.ca","94 zqk.com","1623 gxz.team","6512 hwu.ca","841 irv.network","267 xhe.network","4658 zqk.com","3665 gqi.network","5638 ihs.gxz.us","5063 fly.org","1493 jaz.kwd.co","9917 dze.tjy.ca","227 ois.gbq.co","7382 ser.network","3554 kup.vbo.us","222 eei.ara.ca","3042 gbq.com","928 kye.gjf.ca","6874 coo.yvs.co","5105 blt.gxj.net","8165 smw.dfa.co","3341 lwa.zfz.org","6290 wuq.fff.com","3685 wip.network","7549 dfa.com","425 tna.gqi.ca","301 kmz.us","9933 gas.srp.network","3054 irv.org","4678 prl.gqs.org","6065 cfv.nva.net","9587 kmx.us","9267 lmm.network","3363 tgg.epf.network","7320 fzx.com","7838 uzz.tnr.net","8399 yyw.qgx.net","2849 aon.co","72 gnr.tjy.us","5679 jfz.net","7969 bgq.wqv.com","7457 soq.wsv.network","8067 ajl.com","4420 ulz.us","2094 uyy.ca","1929 euz.zhy.org","2630 ocf.org","8328 wsv.team","3039 ksc.co","8160 ioc.okv.com","4898 rcz.ixi.com","374 rbg.ca","2846 ltq.net","2596 amr.com","4252 hwu.network","2451 ocf.team","6480 zhy.co","6117 gqi.net","4670 kmi.co","8838 jfz.us","4628 fuc.wph.org","9675 gqi.us","9437 wqv.ca","6940 lmm.org","5488 lbc.ulz.co","5859 tfm.us","7025 krx.arz.team","5231 xdm.jkx.team","512 arx.hkt.team","3061 xxp.uyy.com","9948 nkw.net","2838 buf.team","9513 jkx.co","1560 asq.cwn.team","6910 gjf.us","108 avl.buf.net","1781 hnl.co","7245 kam.ara.co","5864 ltq.team","9487 mhs.htq.org"];
    let debug2 = ["6874 coo.yvs.co"];
    console.log(subdomainVisits(cpdomains));
    console.log(subdomainVisits(cpdomains2));
    console.log(subdomainVisits(debug1)); // should be "4198 okv.co" not "9173 okv.co"
    console.log(subdomainVisits(debug2)) // should be "6874 co" not "0 co"
};


main()