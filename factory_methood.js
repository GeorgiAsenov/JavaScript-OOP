// Factory method
function createperson(isItMan, isItWoman, isItBlack, howLong, power) {

    // Constructors
    function Man() {
        this.name = 'Ahmed';
        this.color = 'Brown';
    }

    Man.prototype.walk = function () {
        console.log('right-left')
    }

    function AfricanMan(howLong) {
        this.howLong = howLong;
        this.name = 'Avuevuevue';
    }
    AfricanMan.prototype.walk = function () {
        console.log('left-right')
    }

    function Hippopotamus(power, weight) {
        this.power = power;
        this.weight = weight;
    }

    Hippopotamus.prototype.walk = function () {
        console.log('BOOM-BOOM....')
    }


    if (isItMan) {
        if (isItBlack) {
            return new AfricanMan(howLong);
        } else {
            return new Man();
        }

    } else {
        return new Hippopotamus(power, 2000);
    }
}

var creature = createperson(true, false, false, 25, 1000);
creature.walk();
console.log(creature.name);