btbs.MainMenu = function() {};

btbs.MainMenu.prototype = {
    create: function() {

        this.player = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'square');
        this.player.anchor.setTo(0.5);
        this.player.scale.setTo(4);
        this.player.tint = 0x000000;
        this.player.smoothed = false;
        this.player.inputEnabled = true;
        this.player.events.onInputDown.add(this.playGame, this);


        this.gameTitleText = this.game.add.bitmapText(0,0, 'squareFont', 'Bounce the black squares', 69);
        this.gameTitleText.x = this.game.world.centerX - this.gameTitleText.textWidth / 2;
        this.gameTitleText.y = this.player.y - 150;
        this.gameTitleText.tint = 0xdddddd;

        this.gameStartText = this.game.add.bitmapText(0,0, 'squareFont', 'Click the black square and move it around to play !!!', 32);
        this.gameStartText.x = this.game.world.centerX - this.gameStartText.textWidth / 2;
        this.gameStartText.y = this.player.y + 100;
        this.gameStartText.tint = 0xff6600;

    },
    update: function() {

    },
    playGame: function () {
        this.game.state.start('Game');
    }
};