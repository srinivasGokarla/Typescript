//Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
// Generics makes it easier to write reusable code.
//Generics with functions help make more generalized methods which more accurately represent the types used and returned.
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42)); // ['hello', 42]
//Generics can be used to create generalized classes, like Map.
var NamedValue = /** @class */ (function () {
    function NamedValue(name) {
        this.name = name;
    }
    NamedValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue.prototype.getValue = function () {
        return this._value;
    };
    NamedValue.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue;
}());
var value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
var wrappedValue = { value: 10 };
console.log(wrappedValue);
//Generics can be assigned default values which apply if no other value is specified or inferred.
var NamedValue1 = /** @class */ (function () {
    function NamedValue1(name) {
        this.name = name;
    }
    NamedValue1.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue1.prototype.getValue = function () {
        return this._value;
    };
    NamedValue1.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue1;
}());
var value1 = new NamedValue1('myNumber');
value1.setValue('myValue');
console.log(value.toString()); // myNumber: myValue
//Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.
function createLoggedPair(v1, v2) {
    console.log("creating pair: v1='".concat(v1, "', v2='").concat(v2, "'"));
    return [v1, v2];
}
