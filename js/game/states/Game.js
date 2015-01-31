btbs.Game = function () {

    this.score = 0;

};

btbs.Game.prototype = {
    create: function () {

        this.game.scoreboardLauncher = false;




        this.player = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'square');
        this.player.anchor.setTo(0.5);
        this.player.scale.setTo(4);
        this.player.tint = 0x000000;
        this.player.smoothed = false;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        //this.game.physics.arcade.gravity.y = 400;


        this.game.physics.arcade.enableBody(this.player);
        this.player.body.collideWorldBounds = true;
        this.player.body.bounce.set(0.42);

        squares = this.game.add.group();
        squares.enableBody = true;

        for (var i = 0; i < 60; i++)
        {
            var s = squares.create(this.game.world.randomX, this.game.world.randomY, 'square');
            s.name = 'square' + s;
            s.tint = 0x000000;
            s.body.collideWorldBounds = true;
            s.body.bounce.setTo(0.8, 0.8);
            s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
        }




    },
    update: function () {

        this.player.rotation = this.game.physics.arcade.moveToPointer(this.player, 120, this.game.input.activePointer, 350);

        //this.game.physics.arcade.overlap(this.player, this.coins, this.coinHit, null, this);
        //this.game.physics.arcade.overlap(this.player, this.enemies, this.enemyHit, null, this);

    },
    shutdown: function () {

        this.player.destroy();

        this.score = 0;

        this.scoreboardLauncher = false;

    }
};