export class Game {
    constructor() {
        this.racePlayed = 'undefined';
    };

    start() {};

    selectRace(race) {
        this.racePlayed = race;
    };

    createStartingUnits() {
        return this.racePlayed == 'Orcs' ? 'Peon' : 'Peasant';
    };
}

export class Peon {
    constructor() {

    };

    action() {
        return true;
    };
}