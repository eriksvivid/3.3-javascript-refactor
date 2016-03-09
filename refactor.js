(function(){
  'use strict'

////1
var one = function doSomethingCool() {
  console.log("Something Cool!");
}
////

////2
setTimeOut(function() {
  alert("Hello, World!");
}, 2000);
////

////3
//[c]: z then y
//z doesn't have a set time. y has a set time of 1 second
////

////4
var reverseStr = function reverse(str) {
  return str.split('').reverse().join('');
}
////

////5

////

////6
var foo;
foo = "bar";
////

////7

////

////8

////

////9
var addNumbers = function(numberA, numberB) {
  return numberA + numberB;
};

var twoPlusTwo = addNumbers(2, 2);

console.log(twoPlusTwo);
////

////10

////






////////bonus
  var callLater = function(timeout, callback) {
    var defaultTimeout =  1000;

    if(typeof callback == 'undefined'){
      callback = timeout;
      tiemout = defaultTimeout;
    }

    setTimeOut(callback, timeout);
  };

  callLater(1000, function()
    console.log("I ran with 1000 ms");
  });

  callLater(function(){
    console.log("I ran with the default");
  });
}());
