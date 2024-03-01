class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        if(digits):
            n = len(digits)
            carry = 1
            for i in reversed(range(0,n)):
                val = digits[i] + carry
                if(val < 10):
                    digits[i] = val
                    return digits
                else:
                    carry = val // 10
                    digit = val % 10
                    digits[i] = digit
            if(carry):
                temp = [1]
                return temp + digits 
            return digits


        