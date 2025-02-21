"""You are given an integer array nums.

You replace each element in nums with the sum of its digits.

Return the minimum element in nums after all replacements."""


class Solution(object):
    def minElement(self, nums):
        lista_soma = []
        for num in nums:
            num_str = str(num)
            lista = []
            for i in range(len(num_str)):
                conv_int = int(num_str[i])
                lista.append(conv_int)
            lista_soma.append(sum(lista))
        return min(lista_soma)
