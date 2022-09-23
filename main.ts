input.onGesture(Gesture.TiltRight, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(500)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . # # # .
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(500)
    }
})
