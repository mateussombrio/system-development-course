"""An array is considered special if every pair of its adjacent elements contains two numbers with different parity.

You are given an array of integers nums. Return true if nums is a special array, otherwise, return false."""


class Solution(object):
    def isArraySpecial(self, nums):
        for num in range(len(nums) - 1):
            if (nums[num] % 2 == 0 and nums[num + 1] % 2 == 0):
                return False
            elif (nums[num] % 2 != 0 and nums[num + 1] % 2 != 0):
                return False
        return True
