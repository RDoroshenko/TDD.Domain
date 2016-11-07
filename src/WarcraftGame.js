export class Game {
    constructor () {
        this.racePlayed = 'undefined';
    };
    start() {};
    selectRace(race) {
        this.racePlayed = race;
    };
};