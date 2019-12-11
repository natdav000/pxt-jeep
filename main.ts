scene.setBackgroundColor(14)
scene.setTileMap(img`
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
`)
let lemon = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 6 6 f f f . . . . 
. . . f f f 6 6 6 6 f f f . . . 
. . f f f 9 9 9 9 9 9 f f f . . 
. . f f 9 6 6 6 6 6 6 9 9 f . . 
. . f 9 6 f f f f f f 6 9 f . . 
. . f f f f 9 9 9 9 f f f f . . 
. f f 9 8 5 8 5 8 5 8 5 9 f f . 
. f 9 9 5 8 5 8 5 8 5 8 9 9 f . 
. . f 9 9 9 8 5 8 5 8 9 9 f . . 
. . . f 9 9 4 4 4 4 9 9 f . . . 
. . e 4 f 6 6 6 6 6 6 f 4 e . . 
. . 4 d f 6 6 6 6 6 6 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(lemon)
controller.moveSprite(lemon)
let messageHopkins = "Alright"
lemon.say("Alright")
let otherguy_1 = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f c c f f f . . . . 
. . . f f f c c c c f f f . . . 
. . f f f 9 9 9 9 9 9 f f f . . 
. . f f 9 c c c c c c 9 9 f . . 
. . f 9 c f f f f f f c 9 f . . 
. . f f f f 9 9 9 9 f f f f . . 
. f f 9 5 5 5 5 5 5 5 5 9 f f . 
. f 9 9 5 5 5 5 5 5 5 5 9 9 f . 
. . f 9 9 5 5 5 5 5 5 9 9 f . . 
. . . f 9 9 4 4 4 4 9 9 f . . . 
. . 4 4 f c c c c c c f 4 4 . . 
. . 4 4 f c c c c c c f 4 4 . . 
. . 4 4 f d d 5 5 d d f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
otherguy_1.setPosition(60, 39)
let messageotherguy1 = "Lets do this"
otherguy_1.say("Lets do this")
let otherguy_2 = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 5 5 f f f . . . . 
. . . f f f 5 5 5 5 f f f . . . 
. . f f f 7 7 7 7 7 7 f f f . . 
. . f f 7 5 5 5 5 5 5 7 7 f . . 
. . f 7 5 f f f f f f 5 7 f . . 
. . f f f f 7 7 7 7 f f f f . . 
. f f 7 2 2 2 2 2 2 2 f 7 f f . 
. f 7 7 2 2 2 2 2 2 2 2 7 7 f . 
. . f 7 7 2 2 2 2 2 2 7 7 f . . 
. . . f 7 7 4 4 4 4 7 7 f . . . 
. . e 4 f 5 5 5 5 5 5 f 4 e . . 
. . 4 d f 5 5 5 5 5 5 f d 4 . . 
. . 4 4 f 4 4 8 8 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
otherguy_2.setPosition(128, 33)
otherguy_2.say("maybe later")
let otherguy_3 = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 5 5 f f f . . . . 
. . . f f f 5 5 5 5 f f f . . . 
. . f f f 7 7 7 7 7 7 f f f . . 
. . f f 7 5 5 5 5 5 5 7 7 f . . 
. . f 7 5 f f f f f f 5 7 f . . 
. . f f f f 7 7 7 7 f f f f . . 
. f f 7 1 1 1 1 1 1 1 1 7 f f . 
. f 7 7 1 1 1 1 1 1 1 1 7 7 f . 
. . f f f f 1 1 1 1 1 7 7 f . . 
. f d d d d f 4 4 4 7 7 f . . . 
. f b b b b f 7 7 7 7 f 4 e . . 
. f b b b b f 5 5 5 5 f d 4 . . 
. . f c c f 4 8 8 4 4 f 4 4 . . 
. . . f f f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
let ball = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . 8 2 2 2 8 . . . . . . 
. . . . 8 2 2 2 2 2 8 . . . . . 
. . . . 8 2 2 2 2 2 8 . . . . . 
. . . 8 2 2 2 2 2 2 2 8 . . . . 
. . . 8 2 2 2 2 2 2 2 8 . . . . 
. . . 8 2 2 2 2 2 2 2 8 . . . . 
. . . . 8 2 2 2 2 2 8 . . . . . 
. . . . 8 2 2 2 2 2 8 . . . . . 
. . . . . 8 2 2 2 8 . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
game.onUpdateInterval(5000, function () {
    ball.y += controller.dx()
    ball.x += controller.dy()
})
