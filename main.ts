input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Surprised)
    music.setVolume(255)
    soundExpression.spring.playUntilDone()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 25) {
        pins.analogWritePin(AnalogPin.P0, 1023)
    }
})
soundExpression.giggle.playUntilDone()
