"""You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.

The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.

Return the permutation difference between s and t."""


class Solution(object):
    def findPermutationDifference(self, s, t):
        sum_index = 0
        for letter in s:
            index_s = s.index(letter)
            index_t = t.index(letter)
            sum_index += abs(index_s - index_t)
        return sum_index
