var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.morningGreet = function () {
        console.log("Namasteee India.........");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.morningGreet();
