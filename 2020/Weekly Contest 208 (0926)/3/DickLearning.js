// 9.27 night

// Accepted --- 604ms 100.00%
let res = [];
class ThroneInheritance {
    constructor(kingName) {
        this.dead = new Set();
        this.map = new Map();
        this.king = kingName;
    }

    birth(parentName, childName) {
        if (!this.map.has(parentName)) {
            this.map.set(parentName, []);
        }
        this.map.get(parentName).push(childName);
    }

    death(name) {
        this.dead.add(name);
    }

    dfs(kingName) {
        if (!this.dead.has(kingName)) {
            res.push(kingName);
        }
        if (!this.map.has(kingName)) return;
        // console.log(this.map, this.map.get(kingName))
        for (const A of this.map.get(kingName)) {
            this.dfs(A);
        }
    }

    getInheritanceOrder() {
        res = [];
        this.dfs(this.king);
        return res;
    }
}

const main = () => {
    let t = new ThroneInheritance("king"); // order: king
    t.birth("king", "andy");
    console.log(t.getInheritanceOrder());  // order: king > andy
    t.birth("king", "bob");
    console.log(t.getInheritanceOrder());  // order: king > andy > bob
    t.birth("king", "catherine");
    console.log(t.getInheritanceOrder());  // order: king > andy > bob > catherine
    t.birth("andy", "matthew");
    console.log(t.getInheritanceOrder()); // order: king > andy > matthew > bob > catherine
    t.birth("bob", "alex");
    console.log(t.getInheritanceOrder())  // order: king > andy > matthew > bob > alex > catherine
    t.birth("bob", "asha");
    console.log(t.getInheritanceOrder()); // return ["king", "andy", "matthew", "bob", "alex", "asha", "catherine"]
    t.death("bob");
    console.log(t.getInheritanceOrder()); // return ["king", "andy", "matthew", "alex", "asha", "catherine"]

    console.log("");
    let debug1 = new ThroneInheritance("king");
    debug1.birth("king", "clyde");
    debug1.death("king");
    debug1.birth("clyde", "shannon");
    console.log(debug1.getInheritanceOrder());  // ["clyde","shannon"]
    debug1.birth("shannon", "scott");
    debug1.death("clyde");
    console.log(debug1.getInheritanceOrder());  // ["shannon","scott"]]

    console.log("");
    let debug2 = new ThroneInheritance("king");
    debug2.birth("king", "clyde");
    debug2.birth("clyde", "shannon");
    debug2.birth("shannon", "scott");
    debug2.birth("king", "keith");
    console.log(debug2.getInheritanceOrder());  // ["king","clyde","shannon","scott","keith"]
    debug2.birth("clyde", "joseph");
    console.log(debug2.getInheritanceOrder());  // ["king","clyde","shannon","scott","joseph","keith"]


    console.log("");
    let debug3 = new ThroneInheritance("king");
    debug3.birth("king", "logan");
    debug3.birth("logan", "hosea");
    debug3.birth("king", "leonard");
    debug3.death("king");
    debug3.birth("logan", "carl");
    debug3.death("hosea");
    debug3.birth("leonard", "ronda");
    debug3.birth("logan", "betty");
    console.log(debug3.getInheritanceOrder()); // ["logan","carl","betty","leonard","ronda"]
    debug3.birth("betty", "helen");
    debug3.birth("betty", "alfred");
    console.log(debug3.getInheritanceOrder()); // ["logan","carl","betty","helen","alfred","leonard","ronda"]
    debug3.birth("logan", "luella");
    debug3.death("leonard");
    console.log(debug3.getInheritanceOrder()); // ["logan","carl","betty","helen","alfred","luella","ronda"]
    debug3.birth("ronda", "lisa");
    console.log(debug3.getInheritanceOrder()); // ["logan","carl","betty","helen","alfred","luella","ronda","lisa"]


    console.log("");
    let debug4 = new ThroneInheritance("king");
    debug4.birth("king", "clyde");
    debug4.death("king");
    debug4.birth("clyde", "shannon");
    console.log(debug4.getInheritanceOrder()); // ["clyde","shannon"]
    debug4.birth("clyde", "scott");
    console.log(debug4.getInheritanceOrder()); // ["clyde","shannon","scott"]

    console.log("");
    let debug5 = new ThroneInheritance("king");
    debug5.birth("king", "mary");
    debug5.birth("king", "thomas");
    debug5.birth("thomas", "cecil");
    debug5.birth("mary", "theresa");
    debug5.birth("mary", "billy");
    debug5.birth("cecil", "judith");
    debug5.birth("thomas", "rosemary");
    debug5.birth("thomas", "guadalupe");
    debug5.birth("judith", "amy");
    debug5.birth("guadalupe", "rodney");
    console.log(debug5.getInheritanceOrder()); // ["king","mary","theresa","billy","thomas","cecil","judith","amy","rosemary","guadalupe","rodney"]
    debug5.death("guadalupe");
    debug5.death("billy");
    debug5.death("cecil");
    debug5.birth("theresa", "james");
    debug5.birth("amy", "david");
    debug5.death("amy");
    debug5.death("james");
    debug5.death("theresa");
    debug5.birth("judith", "archie");
    debug5.death("mary");
    debug5.birth("thomas", "michael");
    debug5.death("thomas");
    console.log(debug5.getInheritanceOrder()); // ["king","judith","david","archie","rosemary","rodney","michael"]
    debug5.death("king");
    console.log(debug5.getInheritanceOrder()); // ["judith","david","archie","rosemary","rodney","michael"]
    debug5.birth("rodney", "astrid");
    debug5.death("astrid");
    debug5.death("david");
    console.log(debug5.getInheritanceOrder());  // ["judith","archie","rosemary","rodney","michael"]
    debug5.birth("rodney", "vicki");
    debug5.birth("rosemary", "alexandra");
    debug5.death("rodney");
    debug5.birth("michael", "ruby");
    debug5.death("vicki");
    debug5.birth("ruby", "iris");
    debug5.birth("rosemary", "connie");
    debug5.birth("rosemary", "mario");
    debug5.birth("connie", "richard");
    debug5.birth("judith", "nathaniel");
    debug5.birth("alexandra", "gary");
    debug5.birth("richard", "peter");
    debug5.birth("mario", "augustina");
    debug5.birth("nathaniel", "stephen");
    debug5.birth("alexandra", "gail");
    debug5.birth("alexandra", "marvin");
    console.log(debug5.getInheritanceOrder()); // ["judith","archie","nathaniel","stephen","rosemary","alexandra","gary","gail","marvin","connie","richard","peter","mario","augustina","michael","ruby","iris"]
    debug5.birth("augustina", "edith");
    debug5.death("iris");
    debug5.birth("connie", "george");
    console.log(debug5.getInheritanceOrder()); // ["judith","archie","nathaniel","stephen","rosemary","alexandra","gary","gail","marvin","connie","richard","peter","george","mario","augustina","edith","michael","ruby"]
};

main()