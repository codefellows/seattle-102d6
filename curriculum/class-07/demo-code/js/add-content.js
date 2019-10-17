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
document.write('<h3>' + greeting + '<br>' + greetingTwo + '</h3>');





