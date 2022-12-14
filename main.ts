let x_strength = 0
let y_strength = 0
basic.forever(function on_forever() {
    
    mouse.startMouseService()
    x_strength = input.acceleration(Dimension.X)
    y_strength = input.acceleration(Dimension.Y)
    let g = 10
    if (x_strength > 400 && x_strength < 800) {
        basic.showLeds(`
            . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
        `)
        mouse.movexy(g, 0)
    }
    
    if (x_strength > 800) {
        basic.showLeds(`
            . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
        `)
        mouse.movexy(g * 5, 0)
    }
    
    if (x_strength < -400 && x_strength > -800) {
        basic.showLeds(`
            . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
        `)
        mouse.movexy(-g, 0)
    }
    
    if (x_strength < -800) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
                `)
        mouse.movexy(-(g * 5), 0)
    }
    
    if (y_strength > 400 && y_strength < 800) {
        basic.showLeds(`
            . . # . .
                        . . # . .
                        # . # . #
                        . # # # .
                        . . # . .
        `)
        mouse.movexy(0, g)
    }
    
    if (y_strength > 800) {
        basic.showLeds(`
                . . # . .
                            . . # . .
                            # . # . #
                            . # # # .
                            . . # . .
                `)
        mouse.movexy(0, g * 5)
    }
    
    if (y_strength < -400 && y_strength > -800) {
        basic.showLeds(`
            . . # . .
                        . # # # .
                        # . # . #
                        . . # . .
                        . . # . .
        `)
        mouse.movexy(0, -g)
    }
    
    if (y_strength < -800) {
        basic.showLeds(`
                    . . # . .
                                . # # # .
                                # . # . #
                                . . # . .
                                . . # . .
                `)
        mouse.movexy(0, -(g * 5))
    }
    
    if (input.buttonIsPressed(Button.A)) {
        mouse.click()
    }
    
    if (input.buttonIsPressed(Button.B)) {
        mouse.rightClick()
    }
    
    basic.clearScreen()
})
