x_strength = 0
y_strength = 0

def on_forever():
    global x_strength, y_strength
    mouse.start_mouse_service()
    x_strength = input.acceleration(Dimension.X)
    y_strength = input.acceleration(Dimension.Y)
    g = 10
    if x_strength > 400 and x_strength < 800:
        basic.show_leds("""
            . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
        """)
        mouse.movexy(g, 0)
    if x_strength > 800:
        basic.show_leds("""
            . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
        """)
        mouse.movexy(g*5, 0)
    if x_strength < -400 and x_strength > -800:
        basic.show_leds("""
            . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
        """)
        mouse.movexy(-g, 0)
    if x_strength < -800:
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
                """)
        mouse.movexy(-(g*5), 0)
    if y_strength > 400 and y_strength < 800:
        basic.show_leds("""
            . . # . .
                        . . # . .
                        # . # . #
                        . # # # .
                        . . # . .
        """)
        mouse.movexy(0, g)
    if y_strength > 800:
        basic.show_leds("""
                . . # . .
                            . . # . .
                            # . # . #
                            . # # # .
                            . . # . .
                """)
        mouse.movexy(0, g*5)
    if y_strength < -400 and y_strength > -800:
        basic.show_leds("""
            . . # . .
                        . # # # .
                        # . # . #
                        . . # . .
                        . . # . .
        """)
        mouse.movexy(0, -g)
    if y_strength < -800:
                basic.show_leds("""
                    . . # . .
                                . # # # .
                                # . # . #
                                . . # . .
                                . . # . .
                """)
                mouse.movexy(0, -(g*5))
    if input.button_is_pressed(Button.A):
        mouse.click()
    if input.button_is_pressed(Button.B):
        mouse.right_click()
    basic.clear_screen()
basic.forever(on_forever)

