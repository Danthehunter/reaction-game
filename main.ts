let game_started = false
basic.forever(function () {
    basic.showNumber(5)
    basic.pause(100)
    basic.showNumber(4)
    basic.pause(100)
    basic.showNumber(3)
    basic.pause(100)
    basic.showNumber(2)
    basic.pause(100)
    basic.showNumber(1)
    game_started = false
    basic.pause(randint(1000, 5000))
    game_started = true
    basic.showIcon(IconNames.Happy)
    while (game_started) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            game_started = false
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showString("B")
                game_started = false
            }
        }
    }
    basic.pause(3000)
    basic.clearScreen()
})
