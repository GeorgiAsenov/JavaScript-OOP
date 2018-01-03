
function Tray() {
    this.capacity = 10;
    this.meatballs = [];
    this._observers = [];
}

Tray.prototype.addMeatball = function (meatball) {
    for (var i = 1; i < this.capacity; i++) {
        this.meatballs.push(meatball);
    }
    this.notifyObservers();
}

Tray.prototype.removeMeatball = function (meatball) {
    return this.meatballs.pop();
}

Tray.prototype.addObserver = function (observer) {
    this._observers.push(observer);
}

Tray.prototype.removeObserver = function (observer) {
    this._observers.splice(this._observers.findIndex(function (o) {
        return o == observer;
    }), 1);
}

Tray.prototype.notifyObservers = function () {
    this._observers.forEach(function (o) {
        o.eatIt(this);
    }, this);
}


function FirstObserver(name) {
    this.name = name;
}
FirstObserver.prototype.eatIt = function (tray) {
    console.log('i am the first and my name is: ' + this.name);
    console.log('i just ate: ' + tray.removeMeatball());
}

function SecondObserver(name) {
    this.name = name;
}
SecondObserver.prototype.eatIt = function (tray) {
    console.log('i am the second and my name is: ' + this.name);
    console.log('i just ate: ' + tray.removeMeatball());
}

var first = new FirstObserver('Luke');
var second = new SecondObserver('Ray');
var tray = new Tray();
tray.addObserver(first);
tray.addObserver(second)
tray.addMeatball('horse meatball');
tray.removeObserver(second);
tray.addMeatball('pork meatball')
