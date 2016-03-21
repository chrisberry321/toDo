class Greeter {
  greeting: string;

  constructor (message: string) {
    this.greeting = message;
  }
  greet() {
    return "hello, " + this.greeting;
  }
}

// javascript version of above
// var Greeter = function(message) {
//   this.greeting = message;
// }
//
// Greeter.prototype.greet = function() {
//   return "hello, " + this.greeting;
// }


var greeters= [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how old you?"));
greeters.push(new Greeter("my baby, hello my honey, hello my ragtime gal!"));
console.log(greeters);
for (var greeter of greeters){
  alert(greeter.greet());
}
// sorta js version of above
// var greeting1 = new Greeter("hello");
// var greeting2 = new Greeter("hola");
// var greeting3 = new Greeter("mwiriwe");
//
// greeting1.greeting
// greeting1.greet(); // "hello, hello"
