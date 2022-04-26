var Abc = /** @class */ (function () {
    function Abc() {
        // properties and methods
        this.a = "hello all";
        this.z();
    }
    Abc.prototype.z = function () {
        console.log(this.a);
    };
    return Abc;
}());
var ob = new Abc();
