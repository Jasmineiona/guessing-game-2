var playerName = prompt('What is your name?');
console.log('The players name is ' + playerName);

alert('Thank you ' + playerName + ' please answer the following questions with a "yes" or "no" or with "y" or "n"');
//here for furture use
//var score = 0;

var question1 = prompt("Does Robert have any tattoos?");

if (question1.toLowerCase() == 'yes' || 'y') {
  alert('Good job ' + playerName + ' you got that one right. He has a lot of tattoos');
  //score += 1;

} else{
alert('Sorry ' + playerName +' you got that wrong. Robert has more tattoos than he can count');
}
console.log('Answer to question1 "tattoos" '+ question1);


var question2 = prompt('Does Robert have any pets?');

if (question2.toLowerCase == 'yes' || 'y') {
alert('Good guess ' + playerName + ' he does have a black lab');
// score += 1;
} else{
  alert('Nope ' + playerName + ' He does have a dog');
}
console.log('Answer to question2 "Pets" ' + question2);


var question3 = prompt('Does Robert love camping?');

if (question3.toLowerCase() == "yes" || 'y') {
alert('Correct ' + playerName + ' he will go camping anytime of year and in any weather.');
// score +=1;
} else{
  alert('Sorry ' + playerName + ' He is happiest when he is in the woods');


}
console.log('Answer to question3 " Camping" ' + question3);






// alert('Your answer was ' + question1 + ' to the question about tattoos');
// alert('Your answer was ' + question2 + ' to the question about pets.');
// alert('Your answer was ' + question3 + ' to the question about camping.');
