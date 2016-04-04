(function(){
  'use strict'

/////////////////////////////////////1
var one = function doSomethingCool() {
  console.log("Something Cool!");
}
/////////////////////////////////////


/////////////////////////////////////2
setTimeOut(function() {
  alert("Hello, World!");
}, 2000);
/////////////////////////////////////

/////////////////////////////////////3
//[c]: z then y
//z doesn't have a set time. y has a set time of 1 second
/////////////////////////////////////

/////////////////////////////////////4
var reverseStr = function reverse(str) {
  return str.split('').reverse().join('');
}
/////////////////////////////////////

/////////////////////////////////////5
var spanishColor = function(colorName) {
  var colors = {rojo: "#ff0000", blanco: "#ffffff", azul: "#0000ff", verde: "#00ff00", negro: "#000000"};
  return colors[colorName];
}
/////////////////////////////////////

/////////////////////////////////////6
var foo;
foo = "bar";
/////////////////////////////////////

/////////////////////////////////////7
var callNtimes = function(callback, n) {
  var range = _.range(n);
  _.each(range, callback);
};
/////////////////////////////////////

/////////////////////////////////////8
var score = 0;

var increaseScore = function() {
  score++;
};

var decreaseScore = function() {
  score--;
};
/////////////////////////////////////

/////////////////////////////////////9
var addNumbers = function(numberA, numberB) {
  return numberA + numberB;
};

var twoPlusTwo = addNumbers(2, 2);

console.log(twoPlusTwo);
/////////////////////////////////////

/////////////////////////////////////10
var speed = 0;

var accelerate = function(amount){
  if (amount == undefined){
    amount = 1;
    return speed += amount;
  }else{
    return speed += amount;
  }
}
/////////////////////////////////////






/////////////////////////////////////bonus
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
