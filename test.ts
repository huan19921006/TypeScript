class Email {
    private email: string;
    constructor(email: string) {
        if (this.validateEmail(email)) {
            this.email = email;
        } else {
            throw new Error("Invalid email!");
        }
    }
    private validateEmail(email: string) {
        var re = /\S+@\S+\.\S/;
        return re.test(email);
    }
    get():string {
        return this.email;
    }
}
class Person {
    public name: string;
    public email: Email;
    constructor(name: string, email: Email) {
        this.name = name;
        this.email = email;
    }
    greet() {
        alert("Hi!");
    }
}

class Teacher extends Person {
    public subjects : string[];
    constructor(name: string, email: Email, subjects: string[]) {
        super(name, email);
        this.subjects = subjects;
    }
    greet() {
        super.greet();
        alert("I teach " + this.subjects);
    }
    teach() {
        alert("Welcome to class!");
    }
}

var teacher = new Teacher("remo", new Email("526382350@qq.com"), ["math", "physics"]);
var me = new Person('remo', new Email("526382350@qq.com"));

me.greet();
teacher.greet();
teacher.teach();