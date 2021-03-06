btbs.Game = function () {

    // Var
    this.score = 0;
    this.scoreString = "Score : ";
    this.countdownDisplay = 36;
    this.countdownString = "CountDown  : ";

};

btbs.Game.prototype = {
    create: function () {

        // Var
        this.game.scoreboardLauncher = false;

        // The countdown
        this.game.time.events.repeat(Phaser.Timer.SECOND * 1, 60, this.countDown, this);


        this.scoreText = this.game.add.bitmapText(10, 10, 'squareFont', this.scoreString + this.score, 88);
        this.scoreText.x = this.game.world.centerX - this.scoreText.textWidth / 2;
        this.scoreText.y = this.game.world.centerY - this.scoreText.textHeight / 2;
        this.scoreText.tint = 0xff6600;

        this.countdownText = this.game.add.bitmapText(10, 10, 'squareFont', this.countdownString + this.countdownDisplay, 88);
        this.countdownText.x = this.game.world.centerX - this.countdownText.textWidth / 2;
        this.countdownText.y = this.scoreText.y - 100;

        this.player = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'square');
        this.player.anchor.setTo(0.5);
        this.player.scale.setTo(4);
        this.player.tint = 0x000000;
        this.player.smoothed = false;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.game.physics.arcade.enableBody(this.player);
        this.player.body.collideWorldBounds = true;


        this.squares = this.game.add.group();
        this.squares.enableBody = true;

        for (var i = 0; i < 60; i++) {
            var squareX, squareY;

            squareX = this.game.world.randomX;

            if (i < 30) {

                squareY = this.player.height;

            } else {

                squareY = this.game.world.height - this.player.height;
            }

            var s = this.squares.create(squareX, squareY, 'square');
            s.anchor.setTo(0.5);
            s.name = 'square' + s;
            s.tint = 0x000000;
            s.body.collideWorldBounds = true;
            s.body.bounce.setTo(0.8, 0.8);
            s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);

        }


    },
    update: function () {

        this.player.rotation = this.game.physics.arcade.moveToPointer(this.player, 120, this.game.input.activePointer, 350);

        if ((this.player.x < this.player.width) || (this.player.x > this.game.world.width - this.player.width) || (this.player.y < this.player.height) || (this.player.y > this.game.world.height - this.player.height)) {
            this.player.tint = 0xff0000;
            this.game.hitEnabled = false;
        } else {
            this.player.tint = 0x000000;
            this.game.hitEnabled = true;
        }


        this.game.physics.arcade.collide(this.player, this.squares, this.sHit, null, this);


    },
    shutdown: function () {

        this.player.destroy();
        this.squares.destroy();

        this.score = 0;

    },
    /******************************
     *
     * THE GAME'S FUNCTIONS
     *******************************/
    sHit: function () {

        if (this.game.hitEnabled) {

            this.score++;

        } else {

            if (this.score > 0) {
                this.score--;
            }

        }

        this.scoreText.text = this.scoreString + this.score;

        this.scoreText.x = this.game.world.centerX - this.scoreText.textWidth / 2;

    },
    countDown: function () {
        this.countdownDisplay -= 1;
        if (this.countdownDisplay < 0) {
            this.state.start('GameOver');
        }
        this.countdownText.text = this.countdownString + this.countdownDisplay;
        this.countdownText.x = this.game.world.centerX - this.countdownText.textWidth / 2;


    }
};