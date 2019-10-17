var answer = prompt('Do you prefer cats or dogs');
var message;

if (answer === 'cats'){
  message = 'Cats are cool!';
} else if (answer === 'dogs'){
  message = 'Dogs are cool';
}

document.write('<h3>' + message + '</h3>');