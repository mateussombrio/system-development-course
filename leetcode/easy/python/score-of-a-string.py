"""You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of s."""


class Solution(object):
    def scoreOfString(self, s):
        total = 0
        for i in range(len(s) - 1):
            soma = abs(ord(s[i]) - ord(s[i + 1]))
            total += soma
        return total
