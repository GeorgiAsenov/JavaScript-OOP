var sun = (function () {

    const MAX_SUNS = 5;
    var allOfThem = [];

    function Sun() {
        console.log('I am only one sun!');
        this.masa = Math.round(Math.random() * 10);
    }
    var sunny;
    
    function printOneSun() {
        if (allOfThem.length < MAX_SUNS) {
            sunny = new Sun();
            allOfThem.push(sunny);
        } else {
            return allOfThem[Math.floor(Math.random() * allOfThem.length)]
        }
        return sunny;
    }
    return printOneSun;

})();

console.log(sun().masa);
console.log(sun().masa);
console.log(sun().masa);
console.log(sun().masa);
console.log(sun().masa);
console.log(sun().masa);
console.log(sun().masa);
console.log(sun().masa);
console.log(sun().masa);
console.log(sun().masa);
console.log(sun().masa);
console.log(sun().masa);
console.log(sun().masa);
console.log(sun().masa);

