enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Asteroid
}
namespace SpriteKind {
    export const DressOverlap = SpriteKind.create()
}
function Dressing3 () {
    scene.setBackgroundImage(assets.image`JohnnyDressing2`)
    SpaeSuite = sprites.create(assets.image`LeftArm`, SpriteKind.Player)
    controller.moveSprite(SpaeSuite)
    SpaeSuite.setStayInScreen(true)
    OverlapMarker = sprites.create(assets.image`DressingOverlap2`, SpriteKind.DressOverlap)
    SpaeSuite.setPosition(24, 27)
    OverlapMarker.setPosition(91, 44)
    game.showLongText("Great!", DialogLayout.Bottom)
    game.showLongText("Now put on the left arm", DialogLayout.Bottom)
}
function Dressing5 () {
    scene.setBackgroundImage(assets.image`JohnnyDressing4`)
    SpaeSuite = sprites.create(assets.image`Helmet`, SpriteKind.Player)
    controller.moveSprite(SpaeSuite)
    SpaeSuite.setStayInScreen(true)
    OverlapMarker = sprites.create(assets.image`overlap4`, SpriteKind.DressOverlap)
    SpaeSuite.setPosition(24, 27)
    OverlapMarker.setPosition(83, 11)
    game.showLongText("Great!", DialogLayout.Bottom)
    game.showLongText("Finally, put on your space helmet", DialogLayout.Bottom)
}
function Level1 () {
    Level = 1
    tiles.setCurrentTilemap(tilemap`level2`)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`SpaceBGLoop`)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`Space layer 2`)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer2, assets.image`Space layer 3`)
    game.showLongText("Collect the stars", DialogLayout.Bottom)
    game.showLongText("Avoid the asteroids!", DialogLayout.Bottom)
    mySprite3 = sprites.create(assets.image`Rocket1`, SpriteKind.Player)
    controller.moveSprite(mySprite3)
    mySprite3.setStayInScreen(true)
    scroller.scrollBackgroundWithSpeed(0, 25, scroller.BackgroundLayer.Layer0)
    scroller.scrollBackgroundWithSpeed(0, 40, scroller.BackgroundLayer.Layer1)
    scroller.scrollBackgroundWithSpeed(0, 75, scroller.BackgroundLayer.Layer2)
}
function Dressing4 () {
    scene.setBackgroundImage(assets.image`JohnnyDressing3`)
    SpaeSuite = sprites.create(assets.image`Trousers`, SpriteKind.Player)
    controller.moveSprite(SpaeSuite)
    SpaeSuite.setStayInScreen(true)
    OverlapMarker = sprites.create(assets.image`Overlap3`, SpriteKind.DressOverlap)
    SpaeSuite.setPosition(24, 27)
    OverlapMarker.setPosition(82, 69)
    game.showLongText("Great!", DialogLayout.Bottom)
    game.showLongText("Now put on the trousers", DialogLayout.Bottom)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (otherSprite == projectile) {
        sprites.destroy(otherSprite, effects.starField, 100)
        info.changeScoreBy(1)
    } else if (otherSprite == projectilebad) {
        sprites.destroy(otherSprite, effects.ashes, 100)
        scene.cameraShake(4, 200)
        animation.runImageAnimation(
        sprite,
        assets.animation`RocketHit`,
        50,
        false
        )
        pause(301)
        sprite.setImage(assets.image`Rocket1`)
        info.setScore(0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.DressOverlap, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    Dressing += 1
    if (Dressing == 2) {
        Dressing2()
    }
    if (Dressing == 3) {
        Dressing3()
    }
    if (Dressing == 4) {
        Dressing4()
    }
    if (Dressing == 5) {
        Dressing5()
    }
    if (Dressing == 6) {
        scene.setBackgroundImage(assets.image`JohnnyDressing5`)
        game.showLongText("Okay Johnny. You're ready to launch...", DialogLayout.Bottom)
        Level1()
    }
})
function Dressing2 () {
    scene.setBackgroundImage(assets.image`JohnnyDressing1`)
    SpaeSuite = sprites.create(assets.image`RightArm`, SpriteKind.Player)
    controller.moveSprite(SpaeSuite)
    SpaeSuite.setStayInScreen(true)
    OverlapMarker = sprites.create(assets.image`DressingOverlap2`, SpriteKind.DressOverlap)
    SpaeSuite.setPosition(24, 27)
    OverlapMarker.setPosition(64, 44)
    game.showLongText("Great!", DialogLayout.Bottom)
    game.showLongText("Now put on the right arm", DialogLayout.Bottom)
}
let projectilebad: Sprite = null
let projectile: Sprite = null
let mySprite3: Sprite = null
let OverlapMarker: Sprite = null
let SpaeSuite: Sprite = null
let Dressing = 0
let Level = 0
Level = 0
scene.setBackgroundImage(assets.image`Night sky`)
game.showLongText("Oh look! It's time for your Space Voyage, Johnny!", DialogLayout.Bottom)
game.showLongText("Better get your space suit on...", DialogLayout.Bottom)
scene.setBackgroundImage(assets.image`Johnny`)
Dressing = 1
SpaeSuite = sprites.create(assets.image`Torso`, SpriteKind.Player)
OverlapMarker = sprites.create(assets.image`DressOverlap2`, SpriteKind.DressOverlap)
SpaeSuite.setPosition(24, 27)
OverlapMarker.setPosition(78, 35)
controller.moveSprite(SpaeSuite)
SpaeSuite.setStayInScreen(true)
game.showLongText("Put on the torso", DialogLayout.Bottom)
game.onUpdateInterval(2900, function () {
    if (Level == 1) {
        projectilebad = sprites.createProjectileFromSide(assets.image`Asteroid1`, randint(-20, 20), randint(50, 125))
        tiles.placeOnTile(projectilebad, tiles.getTileLocation(randint(0, 10), 0))
        animation.runImageAnimation(
        projectilebad,
        assets.animation`AsteroidAnim`,
        randint(150, 300),
        true
        )
    }
})
game.onUpdateInterval(2000, function () {
    if (Level == 1) {
        projectile = sprites.createProjectileFromSide(assets.image`Star1`, randint(-20, 20), randint(50, 125))
        tiles.placeOnTile(projectile, tiles.getTileLocation(randint(0, 10), 0))
    }
})
forever(function () {
    if (Level == 1) {
        if (controller.up.isPressed()) {
            mySprite3.startEffect(effects.fire, 25)
        }
    }
})
