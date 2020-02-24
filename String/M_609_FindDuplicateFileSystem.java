
/**
 * 2.19 morning on road
 * https://leetcode.com/problems/find-duplicate-file-in-system/
 */
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

class M_609_FindDuplicateFileSystem {

    /**
     * Acceoted --- 20ms 50.7 MB 97.15%
     * 
     * https://bxie.gitbooks.io/powerbook/find-duplicated-files-in-system.html
     */
    public List<List<String>> findDuplicate(String[] paths) {
        Map<String, List<String>> map = new HashMap<>();
        for (String str : paths) {
            String[] strs = str.split(" ");
            String path = strs[0];
            for (int i = 1; i < strs.length; i++) {
                int pos = strs[i].indexOf("(");
                String file = strs[i].substring(0, pos);
                String content = strs[i].substring(pos + 1, strs[i].length() - 1);
                if (!map.containsKey(content))
                    map.put(content, new ArrayList<>());
                map.get(content).add(path + "/" + file);
            }
        }
        List<List<String>> res = new ArrayList<>();
        for (Map.Entry<String, List<String>> e : map.entrySet()) {
            if (e.getValue().size() > 1)
                res.add(e.getValue());
        }
        return res;
    }

    /**
     * Accepted --- 13ms 50.9 MB 100.00%
     * 
     * https://gist.github.com/BiruLyu/614c6b36399b72f5c339476e4e44b758
     */
    public List<List<String>> findDuplicate_same(String[] paths) {
        Map<String, List<String>> map = new HashMap<>();
        for (String path : paths) {
            String[] pathArr = path.split(" ");
            String dir = pathArr[0] + '/';
            for (int i = 1; i < pathArr.length; i++) {
                int start = pathArr[i].indexOf('(');
                String fileName = dir + pathArr[i].substring(0, start);
                String content = pathArr[i].substring(start + 1, pathArr[i].length() - 1);
                map.putIfAbsent(content, new ArrayList<>());
                map.get(content).add(fileName);
            }
        }
        List<List<String>> res = new ArrayList<>();
        for (String key : map.keySet()) {
            if (map.get(key).size() > 1) {
                res.add(map.get(key));
            }
        }
        return res;
    }

    /**
     * Accepted --- 25ms 50.5 MB 73.79%
     * 
     * https://gist.github.com/BiruLyu/614c6b36399b72f5c339476e4e44b758
     */
    public List<List<String>> findDuplicate2(String[] paths) {
        HashMap<String, Integer> map = new HashMap<>();
        HashMap<String, String> mapPath = new HashMap<>();
        HashMap<String, Integer> resultIndex = new HashMap<>();
        List<List<String>> result = new ArrayList<>();

        for (int i = 0; i < paths.length; i++) {
            String[] parts = paths[i].split(" ");
            String dir = parts[0];
            for (int j = 1; j < parts.length; j++) {
                String file = parts[j];
                // Separate content and filename
                int s_index = file.indexOf("(");
                String fname = file.substring(0, s_index);
                String content = file.substring(s_index + 1, file.length() - 1);
                if (map.containsKey(content)) {
                    // Duplicate File Found
                    if (map.get(content) == 1) {
                        int r_index = result.size();
                        ArrayList<String> newRow = new ArrayList<>();
                        newRow.add(mapPath.get(content)); // To add first file
                        newRow.add(dir + "/" + fname);
                        result.add(newRow);
                        resultIndex.put(content, r_index);
                        map.put(content, map.get(content) + 1);
                    } else {
                        result.get(resultIndex.get(content)).add(dir + "/" + fname);
                    }
                } else {
                    map.put(content, 1);
                    mapPath.put(content, dir + "/" + fname);
                }
            }
        }

        return result;
    }

    /**
     * Accepted --- 28 ms 50.8 MB 62.14%
     * 
     * https://gist.github.com/BiruLyu/614c6b36399b72f5c339476e4e44b758
     */
    public List<List<String>> findDuplicate3(String[] paths) {
        Map<String, List<String>> map = new HashMap<>();
        for (String path : paths) {
            String[] tokens = path.split(" ");
            for (int i = 1; i < tokens.length; i++) {
                String file = tokens[i].substring(0, tokens[i].indexOf('('));
                String content = tokens[i].substring(tokens[i].indexOf('(') + 1, tokens[i].indexOf(')'));
                map.putIfAbsent(content, new ArrayList<>());
                map.get(content).add(tokens[0] + "/" + file);
            }
        }
        return map.values().stream().filter(e -> e.size() > 1).collect(Collectors.toList());
    }

    /**
     * Accepted --- 24ms 49.9 MB 76.25%
     * 
     * https://blog.csdn.net/huanghanqian/article/details/75258676
     */
    public List<List<String>> findDuplicate4(String[] paths) {
        List<List<String>> result = new ArrayList<List<String>>();
        HashMap<String, List<String>> map = new HashMap<String, List<String>>();
        for (int i = 0; i < paths.length; i++) {
            dealString(map, paths[i]);
        }
        Iterator iter = map.entrySet().iterator();
        while (iter.hasNext()) {
            Map.Entry entry = (Map.Entry) iter.next();
            List<String> val = (List<String>) entry.getValue();
            if (val.size() >= 2) {
                result.add(val);
            }
        }
        return result;
    }

    public void dealString(HashMap<String, List<String>> map, String s) {
        String[] buffer = s.split(" ");
        String path = buffer[0];
        for (int i = 1; i < buffer.length; i++) {
            String the = buffer[i];
            String[] nBuffer = the.split("\\(");
            String exactPath = path + "/" + nBuffer[0];
            String content = nBuffer[1].substring(0, nBuffer[1].length() - 1);
            List<String> list;
            if (map.get(content) == null) {
                list = new ArrayList<String>();
            } else {
                list = map.get(content);
            }
            list.add(exactPath);
            map.put(content, list);
        }
    }

    public static void main(String[] args) {
        M_609_FindDuplicateFileSystem test = new M_609_FindDuplicateFileSystem();

        String[] paths = new String[] { "root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)",
                "root 4.txt(efgh)" };

        System.out.println(test.findDuplicate(paths)); // [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
        System.out.println(test.findDuplicate_same(paths));
        System.out.println(test.findDuplicate2(paths));
        System.out.println(test.findDuplicate3(paths));
        System.out.println(test.findDuplicate4(paths));
    }
}