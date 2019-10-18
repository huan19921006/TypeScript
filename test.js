var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Email = /** @class */ (function () {
    function Email(email) {
        if (this.validateEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error("Invalid email!");
        }
    }
    Email.prototype.validateEmail = function (email) {
        var re = /\S+@\S+\.\S/;
        return re.test(email);
    };
    Email.prototype.get = function () {
        return this.email;
    };
    return Email;
}());
var Person = /** @class */ (function () {
    function Person(name, email) {
        this.name = name;
        this.email = email;
    }
    Person.prototype.greet = function () {
        alert("Hi!");
    };
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, email, subjects) {
        var _this = _super.call(this, name, email) || this;
        _this.subjects = subjects;
        return _this;
    }
    Teacher.prototype.greet = function () {
        _super.prototype.greet.call(this);
        alert("I teach " + this.subjects);
    };
    Teacher.prototype.teach = function () {
        alert("Welcome to class!");
    };
    return Teacher;
}(Person));
var teacher = new Teacher("remo", new Email("526382350@qq.com"), ["math", "physics"]);
var me = new Person('remo', new Email("526382350@qq.com"));
me.greet();
teacher.greet();
teacher.teach();
