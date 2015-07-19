'use strict';

//global variables
window.onload = function () {
    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

    // Game States
    game.state.add('Boot', btbs.Boot);
    game.state.add('MainMenu', btbs.MainMenu);
    game.state.add('Game', btbs.Game);
    game.state.add('GameOver', btbs.GameOver);
    game.state.add('Preload', btbs.Preload);


    game.state.start('Boot');
};