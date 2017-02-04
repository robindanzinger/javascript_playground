'use strict';
var expect = require('must');
describe('playing around', function () {
  
  function curry (func) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return curry.bind.apply(curry, [this, func].concat(args));
  }

  it('curry with autoexecute', function () {
    var countCalls = 0;
    var printWhenAllParametersSet = curry(function (a, b, c) {
      countCalls++;
      console.log("now I was called with ", a, b, c);
    });

    printWhenAllParametersSet("1", "2", "3"); 
    printWhenAllParametersSet("hallo");
    printWhenAllParametersSet("hallo")("welt");
    printWhenAllParametersSet("hallo")("welt")("!");
 
    var triplesum = function (a, b, c) {
      console.log(a, "+", b, "+", c, "=", a + b + c);
      return a + b + c;
    };
    var c = curry(triplesum);
    expect(c(2)(3)(4)).to.equal(9);
  });
});
