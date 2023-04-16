import java.util.Arrays;
import java.util.List;
import java.util.ListIterator;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Alanmiller {

    // Wrong
    public int longestSubarray_alanmiller(int[] nums, int limit) {
        int n = nums.length;
        int j = 0;
        int ans = 0;
        int mx = nums[0];
        int mi = nums[0];

        // List<Integer> numbers = Arrays.asList(nums);
        List<Integer> numbers = IntStream.of(nums).boxed().collect(Collectors.toList());
        ListIterator<Integer> it = numbers.listIterator();
        while (it.hasNext()) {
            mx = Math.max(mx, it.next());
            mi = Math.min(mi, it.next());
            while (mx - mi > limit) {
                if (mx == nums[j]) {
                    mx = Arrays.stream(Arrays.copyOfRange(nums, j + 1, it.nextIndex() + 1)).max().getAsInt();
                }
                if (mi == nums[j]) {
                    mi = Arrays.stream(Arrays.copyOfRange(nums, j + 1, it.nextIndex() + 1)).min().getAsInt();
                }
                j++;
            }
            ans = Math.max(ans, it.nextIndex() - j + 1);
        }
        return ans;
    }

    public static void main(String[] args) {
        int[] nums = new int[] { 8, 2, 4, 7 };
        int limit = 4;
        int[] nums2 = new int[] { 10, 1, 2, 4, 7, 2 };
        int limit2 = 5;
        int[] nums3 = new int[] { 4, 2, 2, 2, 4, 4, 2, 2 };
        int limit3 = 0;

        Alanmiller test = new Alanmiller();
        System.out.println(test.longestSubarray_alanmiller(nums, limit));
        System.out.println(test.longestSubarray_alanmiller(nums2, limit2));
        System.out.println(test.longestSubarray_alanmiller(nums3, limit3));
    }

}