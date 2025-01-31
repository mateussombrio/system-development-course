"""There is a snake in an n x n matrix grid and can move in four possible directions. Each cell in the grid is identified by the position: grid[i][j] = (i * n) + j.

The snake starts at cell 0 and follows a sequence of commands.

You are given an integer n representing the size of the grid and an array of strings commands where each command[i] is either "UP", "RIGHT", "DOWN", and "LEFT".

It's guaranteed that the snake will remain within the grid boundaries throughout its movement.

Return the position of the final cell where the snake ends up after executing commands.
"""


class Solution(object):
    def finalPositionOfSnake(self, n, commands):
        i = 0
        j = 0
        for command in commands:
            if command == "RIGHT":
                i += 1
            if command == "LEFT":
                i -= 1
            if command == "UP":
                j -= 1
            if command == "DOWN":
                j += 1
        return (j * n) + i
