var greetUnnamed : (name: string) => string;
greetUnnamed = function (name: string) : string {
    if (name) {
        return "Hi! " + name;
    }
}
alert(greetUnnamed('huan'));