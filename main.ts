music.setTempo(120)
basic.forever(function () {
    music.setVolume(255)
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.setVolume(50)
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
})
