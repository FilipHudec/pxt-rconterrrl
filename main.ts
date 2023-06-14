radio.setGroup(112)

input.onButtonPressed(Button.A, () => {
    radio.sendValue("gocross", 1)
    basic.showArrow(ArrowNames.West)
}) 
input.onButtonPressed(Button.B, () => {
    radio.sendValue("gocross", 2)
    basic.showArrow(ArrowNames.East)

}) 
input.onLogoEvent(TouchButtonEvent.Touched, () => {
    radio.sendValue("gocross", 0)
    basic.showArrow(ArrowNames.North)
})