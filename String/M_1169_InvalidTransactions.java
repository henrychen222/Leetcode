/**
 * 12.31 morning
 * https://leetcode.com/problems/invalid-transactions/
 */

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

class M_1169_InvalidTransactions implements Comparable<M_1169_InvalidTransactions> {
    public String name;
    public int timeInMin;
    public int amount;
    public String city;
    public String txnString;

    /**
     * Constructor
     * 
     * @param txn a string "{name},{time},{amount},{city}"
     */
    protected M_1169_InvalidTransactions(String txn) {
        this.txnString = txn;
        String[] txns = txn.split(",");
        this.name = txns[0];
        this.timeInMin = Integer.parseInt(txns[1]);
        this.amount = Integer.parseInt(txns[2]);
        this.city = txns[3];
    }

    // sort transactions order in timeInMin ascending order
    @Override
    public int compareTo(M_1169_InvalidTransactions o) {
        return this.timeInMin - o.timeInMin;
    }
}

/**
 * Accepted --- 18 ms 38.7 MB 78.82%
 * https://blog.baozitraining.org/2019/09/leetcode-solution-1169-invalid.html
 * https://blog.csdn.net/weixin_30832143/article/details/102043926  same
 */
class Solution {
    public List<String> invalidTransactions(String[] transactions) {
        // need to use a set, since an invalid one could be a one > 1000, and that one
        // could also be invalid due to
        // same person different locations
        Set<String> invalidTxns = new HashSet<>();

        Map<String, List<M_1169_InvalidTransactions>> lookup = new HashMap<>();

        for (String t : transactions) {
            M_1169_InvalidTransactions txn = new M_1169_InvalidTransactions(t);
            if (!lookup.containsKey(txn.name)) {
                lookup.put(txn.name, new ArrayList<M_1169_InvalidTransactions>());
            }

            lookup.get(txn.name).add(txn);

            if (txn.amount > 1000) {
                invalidTxns.add(txn.txnString);
                continue;
            }
        }

        for (Map.Entry<String, List<M_1169_InvalidTransactions>> entry : lookup.entrySet()) {
            List<M_1169_InvalidTransactions> txns = entry.getValue();
            if (txns.size() <= 1) {
                continue;
            }

            // Sorting in this case didn't really help on time complexity
            Collections.sort(txns);

            // have to perform two loops, essentially it's O(N^2) if they are all in range
            for (int i = 1; i < txns.size(); i++) {
                M_1169_InvalidTransactions cur = txns.get(i);

                for (int j = i - 1; j >= 0; j--) {
                    if (cur.timeInMin - txns.get(j).timeInMin > 60) {
                        break;
                    }

                    if (cur.city.equals(txns.get(j).city)) {
                        continue;
                    }

                    invalidTxns.add(cur.txnString);
                    invalidTxns.add(txns.get(j).txnString);
                }
            }
        }
        List<String> res = new ArrayList<>(invalidTxns);
        return res;

    }

    public static void main(String[] args) {
        Solution s = new Solution();
        String[] transactions1 = new String[] { "alice,20,800,mtv", "alice,50,100,beijing" };
        String[] transactions2 = new String[] { "alice,20,800,mtv", "alice,50,1200,mtv" };
        String[] transactions3 = new String[] { "alice,20,800,mtv", "bob,50,1200,mtv" };

        System.out.println(s.invalidTransactions(transactions1)); // ["alice,20,800,mtv","alice,50,100,beijing"]
        System.out.println(s.invalidTransactions(transactions2)); // ["alice,50,1200,mtv"]
        System.out.println(s.invalidTransactions(transactions3)); // ["bob,50,1200,mtv"]

    }
}