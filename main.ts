let bingo: number[] = []
bingo[0] = 1
bingo[1] = 2
bingo[2] = 3
bingo[3] = 4
bingo[4] = 5
bingo[5] = 6
bingo[6] = 7
bingo[7] = 8
bingo[8] = 9
bingo[9] = 10
bingo[10] = 11
bingo[11] = 12
bingo[12] = 13
bingo[13] = 14
bingo[14] = 15
bingo[15] = 16
bingo[16] = 17
bingo[17] = 18
bingo[18] = 19
bingo[19] = 20
bingo[20] = 21
bingo[21] = 22
bingo[22] = 23
bingo[23] = 24
bingo[24] = 25
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Chessboard, 150)
    basic.showIcon(IconNames.SmallDiamond, 150)
    basic.showIcon(IconNames.Chessboard, 150)
}
basic.showNumber(bingo.removeAt(randint(0, 24)), 150)
basic.pause(1000)
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Chessboard, 150)
    basic.showIcon(IconNames.SmallDiamond, 150)
    basic.showIcon(IconNames.Chessboard, 150)
}
basic.showNumber(bingo.removeAt(randint(0, 23)))
basic.pause(1000)
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Chessboard, 150)
    basic.showIcon(IconNames.SmallDiamond, 150)
    basic.showIcon(IconNames.Chessboard, 150)
}
basic.showNumber(bingo.removeAt(randint(0, 22)))
basic.pause(1000)
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Chessboard, 150)
    basic.showIcon(IconNames.SmallDiamond, 150)
    basic.showIcon(IconNames.Chessboard, 150)
}
basic.showNumber(bingo.removeAt(randint(0, 21)))
basic.pause(1000)
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Chessboard, 150)
    basic.showIcon(IconNames.SmallDiamond, 150)
    basic.showIcon(IconNames.Chessboard, 150)
}
basic.showNumber(bingo.removeAt(randint(0, 20)))
basic.pause(2000)
basic.clearScreen()
