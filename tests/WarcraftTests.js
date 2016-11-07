import assert from 'assert'
import { Game } from '../src/WarcraftGame'

suite('When playing Warcraft game', function() {
    suite('Player can select orcs of humans race', function() {
        suite('When selecting orcs', function() {
            test('When selecting orcs game starts with orcs', function() {
                let game  = new Game;
                game.selectRace('Orcs');

                game.start();

                assert.equal(game.racePlayed, 'Orcs');
            });
            test('Orcs get peons as starting units', function() {
                let game = new Game;
                game.selectRace('Orcs');

                game.start();
                let unitsCreated = game.createUnits('Peon');

                assert.equal(unitsCreated, 'Peon');
            });
        });
        suite('When selecting humans', function() {
            test('When selecting humans game starts with humans', function() {
                let game  = new Game;
                game.selectRace('Humans');

                game.start();

                assert.equal(game.racePlayed, 'Humans');
            });
        });
    });
});