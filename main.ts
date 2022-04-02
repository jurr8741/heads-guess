input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
input.onGesture(Gesture.ScreenUp, function () {
    game.removeLife(1)
})
input.onGesture(Gesture.LogoUp, function () {
    Index = randint(0, 10)
    basic.showString("" + (tekstlijst))
})
let Index = 0
let tekstlijst: string[] = []
tekstlijst = ["PUPPY", "CLOCK", "NIGHT"]
game.startCountdown(30000)
