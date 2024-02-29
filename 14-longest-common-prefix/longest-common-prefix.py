class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if(len(strs) == 1):
            return strs[0]
        lengths= []
        for str in strs:
            lengths.append(len(str))
        min_length = min(lengths)
        if(min_length < 1):
            return ""
        ref_ele = strs[0]
        res = ""
        for i in range(min_length):
            for str in strs:
                if(str[i] != ref_ele[i]):
                    return res
            res += ref_ele[i]
        return res



        