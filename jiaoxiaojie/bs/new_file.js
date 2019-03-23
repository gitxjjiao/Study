var length = 10;
function aaa() {
  console.log(this.length);
}
var obj = {
  length: 5,
  method: function(fn) {
    //fn();
    console.log(this.length)
    arguments[0]();
    //console.log(arguments);
  }
};

obj.method(aaa, 1);


Arguments(2) [ƒ, 1, callee: ƒ, Symbol(Symbol.iterator): ƒ]
0: ƒ fn()
1: 1
callee: ƒ (fn)
length: 2
Symbol(Symbol.iterator): ƒ values()
__proto__: Object,


