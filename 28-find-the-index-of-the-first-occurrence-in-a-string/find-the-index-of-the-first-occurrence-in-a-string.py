class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if(len(needle) > len(haystack)):
            return -1
        len_needle = len(needle)
        for i in range(len(haystack)):
            if(haystack[i:i+len_needle] == needle):
                return i
        return -1


        