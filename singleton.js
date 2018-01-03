var sun = (function () {
    var theOne = null;

    function Sun() {
        console.log('I am only one sun!');
    }

    function printOneSun() {
        if (theOne == null) {
            theOne = new Sun();
        } else {
            return theOne;
        }
    }
    return printOneSun;

})();

var first = sun();
var second = sun();
var third = sun();