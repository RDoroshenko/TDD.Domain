import assert from 'assert'
import { Game } from '../src/WarcraftGame'

suite('When playing Warcraft game', function() {
    suite('Player can select orcs of humans race', function() {
        test('When selecting orcs game starts with orcs', function() {
            let game  = new Game;
            game.selectRace('Orcs');

            game.start();

            assert.equal(game.racePlayed, 'Orcs');
        })
    })

});