
/**
 * 2.18 morning on road
 */
import java.util.ArrayList;
import java.util.Arrays;
import java.util.BitSet;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.PriorityQueue;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

class H_632_SmallestRangeCoveringElementsFrom_K_Lists {

    /**
     * Accepted --- 22ms 44.1 MB 98.04%
     * 
     * https://massivealgorithms.blogspot.com/2017/07/leetcode-632-smallest-range.html
     * https://leetcode.com/problems/smallest-range/discuss/231024/Java-Easy-to-understand-nlog(k)-beets-97
     */
    public int[] smallestRange_pq3(List<List<Integer>> nums) {
        if (nums == null || nums.isEmpty()) {
            return null;
        }

        PriorityQueue<IntItr> minpq = new PriorityQueue<>(new Comparator<IntItr>() {
            public int compare(IntItr a, IntItr b) {
                return a.cur - b.cur;
            }
        });

        int maxValue = Integer.MIN_VALUE;
        for (List<Integer> list : nums) {
            IntItr intitr = new IntItr(list.listIterator());
            minpq.add(intitr);
            maxValue = Math.max(maxValue, intitr.getCur());
        }

        int range = Integer.MAX_VALUE;
        int[] result = new int[2];

        while (minpq.size() == nums.size()) {
            if (maxValue - minpq.peek().cur < range) {
                range = maxValue - minpq.peek().cur;
                result[0] = minpq.peek().cur;
                result[1] = maxValue;
            }
            IntItr min = minpq.poll();
            if (min.hasNext()) {
                min.next();
                minpq.add(min);
                maxValue = Math.max(maxValue, min.getCur());
            }

        }

        return result;
    }

    public class IntItr {
        int cur;
        Iterator itr;

        public IntItr(ListIterator<Integer> iterator) {
            itr = iterator;
            cur = (Integer) itr.next();
        }

        public int getCur() {
            return cur;
        }

        public void next() {
            cur = (Integer) itr.next();
        }

        public boolean hasNext() {
            return itr.hasNext();
        }
    }

    /**
     * Accepted --- 61ms 45.5 MB 17.32%
     * 
     * https://massivealgorithms.blogspot.com/2017/07/leetcode-632-smallest-range.html
     * https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/discuss/104920/java-8-sliding-window
     */
    public int[] smallestRange_slidingWindow_two_pointers(List<List<Integer>> nums) {
        List<int[]> list = IntStream.range(0, nums.size())
                .mapToObj(i -> nums.get(i).stream().map(x -> new int[] { x, i })).flatMap(y -> y)
                .sorted(Comparator.comparingInt(p -> p[0])).collect(Collectors.toList());
        int[] counts = new int[nums.size()];
        BitSet set = new BitSet(nums.size());
        int start = -1; // pointer start
        int[] res = new int[2];
        // pointer i
        for (int i = 0; i < list.size(); i++) {
            int[] p = list.get(i);
            set.set(p[1]);
            counts[p[1]] += 1;
            if (start == -1) {
                start = 0;
            }
            while (start < i && counts[list.get(start)[1]] > 1) {
                counts[list.get(start)[1]]--;
                start++;
            }
            if (set.cardinality() == nums.size()) {
                if ((res[0] == 0 && res[1] == 0) || (list.get(i)[0] - list.get(start)[0]) < res[1] - res[0]) {
                    res[0] = list.get(start)[0];
                    res[1] = list.get(i)[0];
                }
            }
        }
        return res;
    }

    /**
     * Cannot run in Leetcode with int[][] nums
     * 
     * https://massivealgorithms.blogspot.com/2017/07/leetcode-632-smallest-range.html
     * https://discuss.leetcode.com/topic/94445/java-code-using-priorityqueue-similar-to-merge-k-array
     * https://github.com/klutzoder/leetcodeLab/blob/master/632.smallest-range-covering-elements-from-k-lists.java
     * (same)
     */
    public int[] smallestRange_pq(int[][] nums) {
        PriorityQueue<Element> pq = new PriorityQueue<Element>(new Comparator<Element>() {
            public int compare(Element a, Element b) {
                return a.val - b.val;
            }
        });
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < nums.length; i++) {
            Element e = new Element(i, 0, nums[i][0]);
            pq.offer(e);
            max = Math.max(max, nums[i][0]);
        }
        int range = Integer.MAX_VALUE;
        int start = -1, end = -1;
        while (pq.size() == nums.length) {

            Element curr = pq.poll();
            if (max - curr.val < range) {
                range = max - curr.val;
                start = curr.val;
                end = max;
            }
            if (curr.idx + 1 < nums[curr.row].length) {
                curr.idx = curr.idx + 1;
                curr.val = nums[curr.row][curr.idx];
                pq.offer(curr);
                if (curr.val > max) {
                    max = curr.val;
                }
            }
        }

        return new int[] { start, end };
    }

    class Element {
        int val;
        int idx;
        int row;

        public Element(int r, int i, int v) {
            val = v;
            idx = i;
            row = r;
        }
    }

    /**
     * Cannot run in Leetcode with int[][] nums
     * 
     * https://massivealgorithms.blogspot.com/2017/07/leetcode-632-smallest-range.html
     * https://leetcode.com/articles/smallest-range/
     */
    public int[] smallestRange_pq2(int[][] nums) {
        int minx = 0, miny = Integer.MAX_VALUE, max = Integer.MIN_VALUE;
        int[] next = new int[nums.length];
        boolean flag = true;
        PriorityQueue<Integer> min_queue = new PriorityQueue<Integer>((i, j) -> nums[i][next[i]] - nums[j][next[j]]);
        for (int i = 0; i < nums.length; i++) {
            min_queue.offer(i);
            max = Math.max(max, nums[i][0]);
        }
        for (int i = 0; i < nums.length && flag; i++) {
            for (int j = 0; j < nums[i].length && flag; j++) {
                int min_i = min_queue.poll();
                if (miny - minx > max - nums[min_i][next[min_i]]) {
                    minx = nums[min_i][next[min_i]];
                    miny = max;
                }
                next[min_i]++;
                if (next[min_i] == nums[min_i].length) {
                    flag = false;
                    break;
                }
                min_queue.offer(min_i);
                max = Math.max(max, nums[min_i][next[min_i]]);
            }
        }
        return new int[] { minx, miny };
    }

    public static void main(String[] args) {
        H_632_SmallestRangeCoveringElementsFrom_K_Lists test = new H_632_SmallestRangeCoveringElementsFrom_K_Lists();

        int[][] nums = new int[][] { { 4, 10, 15, 24, 26 }, { 0, 9, 12, 20 }, { 5, 18, 22, 30 } };

        List<List<Integer>> numsList = new ArrayList<List<Integer>>();
        List<Integer> list1 = new ArrayList<>();
        List<Integer> list2 = new ArrayList<>();
        List<Integer> list3 = new ArrayList<>();
        list1.add(4);
        list1.add(10);
        list1.add(15);
        list1.add(24);
        list1.add(26);
        list2.add(0);
        list2.add(9);
        list2.add(12);
        list2.add(20);
        list3.add(5);
        list3.add(18);
        list3.add(22);
        list3.add(30);
        numsList.add(list1);
        numsList.add(list2);
        numsList.add(list3);

        System.out.println(Arrays.toString(test.smallestRange_pq(nums))); // [20, 24]
        System.out.println(Arrays.toString(test.smallestRange_pq2(nums)));

        System.out.println(Arrays.toString(test.smallestRange_pq3(numsList)));
        System.out.println(Arrays.toString(test.smallestRange_slidingWindow_two_pointers(numsList)));

    }
}