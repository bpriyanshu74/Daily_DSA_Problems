class Solution:
    def romanToInt(self, s: str) -> int:
        dict = {
            'I':1,
            'V':5,
            'X':10,
            'L':50,
            'C':100,
            'D':500,
            'M':1000
        }
        res = 0
        for e in s:
            res += dict[e]
        if('IV' in s or 'IX' in s):
            res -= 2
        if('XL' in s or 'XC' in s):
            res -= 20
        if('CD' in s or 'CM' in s):
            res -= 200
        return res
        