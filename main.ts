input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        # # . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        # . # . #
        # . . . #
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # #
        # . . . #
        # . . . #
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        # . # . #
        # . . . #
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        # . . . #
        # # . . #
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        # . . . #
        # . . . #
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        # . . . #
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        # . . . #
        # . . # #
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        # . # . #
        # . . . #
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        # . . . #
        # . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . # . .
        # . . . .
        # . . . #
        # . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . # . #
        # . . . #
        # . . . #
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        # . . . #
        # . . . #
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . #
        # . . . #
        # . . . #
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        # # . . #
        # . . . #
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        # . . . #
        # . # . #
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        # . . # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        # . # . #
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        # # . . #
        # . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . #
        # . . . #
        . . . . #
        . . . . #
        `)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    katakana.showString("A WIN!")
})
basic.forever(function () {
	
})
