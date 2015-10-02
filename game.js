

var playerName = prompt('What is your name?');
console.log('The players name is ' + playerName);

//alert('Thank you ' + playerName + ' please answer the following questions with a "yes" or "no" or with "y" or "n"');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var total = document.getElementById('total');

var pickOne = document.getElementById('pickOne');
var pickTwo = document.getElementById('pickTwo');
var pickThree = document.getElementById('pickThree');

var questions = ['Does Robert have any tattoos?', 'Does Robert have any pets?', 'Does Robert love camping?'];

var score = 0;

function q1 () {
	var question1 = prompt(questions[0]);

	if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y'){
  	one.innerHTML = 'Good job ' + playerName + ', you got that one right. He has a lot of tattoos.';
  	score ++;

  	one.className = ("correct");

  	pickOne.innerHTML = '<img src = "img-file/hamster-kiss.jpg"width = "200"/>';

	} else if (question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n'){

		one.className = ("wrong");

  	one.innerHTML = 'Sorry ' + playerName + ', you got that wrong. Robert has more tattoos than he can count!';
	}else {
    //Answer not a yes or no, y or n so we will re-send question.

    q1();

  }

	console.log('Answer to question1 "tattoos" '+ question1);
}


function q2 () {
	var question2 = prompt(questions[1]);

	if (question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y'){
  	two.innerHTML = 'Good guess ' + playerName + ', he does have a black lab.';
  	score ++;

  	two.className = ("correct");

  	pickTwo.innerHTML = '<img src = "img-file/black-lab-mix.jpg"width = "200"/>';


	} else if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n'){

		two.className = ("wrong");

	  two.innerHTML = 'Nope ' + playerName + ', he does have a dog.';
	}else {
   //Answer not a yes or no, y or n so we will re-send question.
    q2();

  }
	console.log('Answer to question2 "Pets" ' + question2);
}

function q3 () {
	var question3 = prompt(questions[2]);

	if (question3.toLowerCase() === "yes" || question3.toLowerCase() === 'y'){
	   three.innerHTML = 'Correct ' + playerName + ' he will go camping anytime of year and in any weather.';
	 score ++;

	 three.className = ("correct");

	 pickThree.innerHTML = '<img src = "img-file/15th_century_bell_tent.png"width = "200"/>';



	} else if (question3.toLowerCase() === "no" || question3.toLowerCase() === 'n'){

		three.className = ("wrong");

	  three.innerHTML = 'Sorry ' + playerName + ', he is happiest when he is in the woods.';
	} else {
    //Answer not a yes or no, y or n so we will re-send question.
    q3();

  }
	console.log('Answer to question3 "Camping" ' + question3);
}

q1();
q2();
q3();

if (score >= 3){
  	total.innerHTML = 'Great job ' + playerName +', you got them all right! Thanks for playing.';
} else {
  total.innerHTML = playerName + ' you got ' + score + ' out of 3 right. Thanks for playing.';
}






// alert('Your answer was ' + question1 + ' to the question about tattoos');
// alert('Your answer was ' + question2 + ' to the question about pets.');
// alert('Your answer was ' + question3 + ' to the question about camping.');
