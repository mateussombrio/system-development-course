"""An integer divisible by the sum of its digits is said to be a Harshad number. You are given an integer x.
Return the sum of the digits of x if x is a Harshad number, otherwise, return -1."""


class Solution(object):
    def sumOfTheDigitsOfHarshadNumber(self, x):
        a = str(x)
        harshad = (x // (10 ** (len(a) - 1))) + (x % (10 ** (len(a) - 1)))
        if (x % harshad) == 0:
            return harshad
        else:
            return -1
