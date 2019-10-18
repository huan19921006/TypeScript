var greetUnnamed : (name: string) => string;
greetUnnamed = function (name: string) : string {
    if (name) {
        return "Hi! " + name;
    }
}
alert(greetUnnamed('huan'));

function add (...foo: number[]): number {
    var result = 0;
    for (var i = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return result;
}

alert(add(2,2));
alert(add(2,2,2));

var bar = 0;

(function(global) {
    var foo: number = 0;
    bar = 1;
    console.log(global.bar);
    console.log(foo);
})(this);

console.log(bar);
