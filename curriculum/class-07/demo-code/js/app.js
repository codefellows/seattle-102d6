function askName() {
  var username = prompt('What is your name?');

  return '<h3>' + 'Hello, ' + username + '.' + '</h3>';
}

function greeting() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  var greetingTwo;

  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good morning!';
    greetingTwo = 'GET OUT OF BED!';
  } else {
    greeting = 'Welcome!';
  }
  return '<h3>' + greeting + '<br>' + greetingTwo + '</h3>';
}

function askPreference() {
  var answer = prompt('will you buy a house or hotel');
  var message;

  if (answer === 'house') {
    message = '<img src="images/house.png">';
  } else if (answer === 'hotel') {
    message = '<img src="images/hotel.png">';
  }

  return message;
}

function lister(){
  console.log('red');
}

var parameterLister = function(color){
  var message = 'your color is ' + color;
  return message;
}