// 11.7 evening 
// Accepted
public class Solution
{
    public int MinDeletions(string input)
    {
        int numOfDeletion = 0;
        List<int> numOfChrs = new List<int>();
        IEnumerable<char> distinctChrs = input.Distinct();
        foreach (var chr in distinctChrs)
        {
            int countChr = input.Count(x => x.Equals(chr));
            while (countChr != 0 && numOfChrs.Contains(countChr))
            {
                countChr--;
                numOfDeletion++;
            }
            numOfChrs.Add(countChr);
        }
        return numOfDeletion;
    }
}