"""There are n mountains in a row, and each mountain has a height. You are given an integer array height where height[i] represents the height of mountain i, and an integer threshold.

A mountain is called stable if the mountain just before it (if it exists) has a height strictly greater than threshold. Note that mountain 0 is not stable.

Return an array containing the indices of all stable mountains in any order."""


class Solution(object):
    def stableMountains(self, height, threshold):
        """
        :type height: List[int]
        :type threshold: int
        :rtype: List[int]
        """
        lista_altura = height
        limite = threshold
        estavel = []
        i = 0
        while i < len(lista_altura) - 1:
            if lista_altura[i] > limite:
                estavel.append(i + 1)
            i += 1
        return estavel
