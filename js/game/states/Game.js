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




    },
    update: function () {


        //this.game.physics.arcade.overlap(this.player, this.coins, this.coinHit, null, this);
        //this.game.physics.arcade.overlap(this.player, this.enemies, this.enemyHit, null, this);

    },
    shutdown: function () {

        this.player.destroy();

        this.score = 0;

        this.scoreboardLauncher = false;

    }
};