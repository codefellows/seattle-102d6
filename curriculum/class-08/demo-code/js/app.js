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
    greetingTwo = 'GET TO BED!';

  } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
    greetingTwo = 'GET Lunch!';

  } else if (hourNow > 0) {
    greeting = 'Good morning!';
    greetingTwo = 'GET OUT OF BED!';
  } else {
    greeting = 'Welcome!';
    greetingTwo = 'Just GET!';

  }
  return '<h3>' + greeting + '<br>' + greetingTwo + '</h3>';
}

var howMany = function (){
  var count = prompt('Great, how many would you like to oder?');

  while (count === '' || isNaN(count)){
    var count = prompt('Great, how many would you like to oder? PLEASE enter a number');
  }

  return count;
}

function getItem() {
  var order = prompt('will you buy a house or hotel');
  var item;

  if (order === 'house') {
    item = '<img src="images/house.png">';
  } else if (order === 'hotel') {
    item = '<img src="images/hotel.png">';
  }

  return item;
}

function showOrder(){
  var item = getItem();
  var total = howMany();
  var result = '';

  for(var i = 0; i < total; i++){
    result = result + '<p>Model #' + (i + 1) + '' + item + '</p>';
  }
  return result;
}

function whileDemo(){
  var answer = prompt('Do you understand while loops?');

  while (answer !== 'yes'){
    var answer = prompt('Do you understand while loops? Here\'s another try!');
  }
}

function forDemo(){
  for (var i = 1; i <= 12; i = i + 4){
    console.log(i);
  }
}

function makeCoffee(userName, bean, milk, flavor){
  return 'Here you go, ' + userName + ' ' + 'your ' + bean + ' ' + milk +  ' ' + flavor + ' latte is ready';
}