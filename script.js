// Set the initial point value to zero
console.log('JS connected')
var points = 0;

// Write a function that generates a random number
function randomNumber(min, max) {
  var interval = Math.random() * (max - min) + min;
  return Math.floor(interval);
}
// This function will respond to the users mouseclick on the appearing item
// and will cause the item to shrink back to height 0 (disappearing in the
// eues of the user)

// I will also try to update the points live at the top of the screen
function catchMe(event) {
  console.log('BOO');
  $(event.target).css({
    height: '0px',
  })
  $('.flex-container').css({
    height: '50px',
  })
  points += 100;
}

// I keep this open to the entire body since the items will be located at
// different parts of the screen
$('.creature').click(catchMe)




// write a function that makes a div appear in the first window
// the initial height of this div is 0 so it already exists, it is
// just growing through this animation
function grow(div) {
  $(div).animate({
    height: '50px',
    width: '50px',
  }, 500);
  // The shirt function will cause the height to shrink back to 0,
  // making it appear as if the div has disappeared. The setTimeout
  // will make it shrink after appearing for a set number of seconds
  // which will decrease in the next level
  setTimeout( function() {shrink(div); }, 2000);
}

// write a function that makes a div shrink and disappear
function shrink(div) {
  $(div).animate({
    height: '0px',
  })
}

// have a setInterval function that continues to call the appear function
// The randomNumber will be generated by the function above and will switch
// up how frequently the divs appear in the windows
var window1 = setInterval(function() { grow('#one'); }, randomNumber(4000, 10000));

var window2 = setInterval(function() { grow('#two'); }, randomNumber(4000, 10000));

var window3 = setInterval(function() { grow('#three'); }, randomNumber(4000, 10000));

var window4 = setInterval(function() { grow('#four'); }, randomNumber(4000, 10000));

var window5 = setInterval(function() { grow('#five'); }, randomNumber(4000, 10000));

var window6 = setInterval(function() { grow('#six'); }, randomNumber(4000, 10000));

var window7 = setInterval(function() { grow('#seven'); }, randomNumber(4000, 10000));

var window8 = setInterval(function() { grow('#eight'); }, randomNumber(4000, 10000));

var window9= setInterval(function() { grow('#nine'); }, randomNumber(4000, 10000));

var window10 = setInterval(function() { grow('#ten'); }, randomNumber(4000, 10000));

var window11 = setInterval(function() { grow('#eleven'); }, randomNumber(4000, 10000));


// // Repeat function for window three
// function grow3() {
//   $('#three').animate({
//     height: '50px',
//     width: '50px',
//   }, 500);
//   setTimeout(shrink3, 2000)
// }

// function shrink3() {
//   $('#three').animate({
//     height: '0px',
//   })
// }

// var window3 = setInterval(grow3, randomNumber(4000, 10000));


// // Repeat function for window four
// function grow4() {
//   $('#four').animate({
//     height: '50px',
//     width: '50px',
//   }, 500);
//   setTimeout(shrink4, 2000)
// }

// function shrink4() {
//   $('#four').animate({
//     height: '0px',
//   })
// }

// var window4 = setInterval(grow4, randomNumber(4000, 10000));


// // Repeat function for window five
// function grow5() {
//   $('#five').animate({
//     height: '50px',
//     width: '50px',
//   }, 500);
//   setTimeout(shrink5, 2000)
// }

// function shrink5() {
//   $('#five').animate({
//     height: '0px',
//   })
// }

// var window5 = setInterval(grow5, randomNumber(4000, 10000));



// // Repeat function for window six
// function grow6() {
//   $('#six').animate({
//     height: '50px',
//     width: '50px',
//   }, 500);
//   setTimeout(shrink6, 2000)
// }

// function shrink6() {
//   $('#six').animate({
//     height: '0px',
//   })
// }

// var window6 = setInterval(grow6, randomNumber(4000, 10000));


// // Repeat function for window seven
// function grow7() {
//   $('#seven').animate({
//     height: '50px',
//     width: '50px',
//   }, 500);
//   setTimeout(shrink7, 2000)
// }

// function shrink7() {
//   $('#seven').animate({
//     height: '0px',
//   })
// }

// var window7 = setInterval(grow7, randomNumber(4000, 10000));


// // Repeat function for window eight
// function grow8() {
//   $('#eight').animate({
//     height: '50px',
//     width: '50px',
//   }, 500);
//   setTimeout(shrink8, 2000)
// }

// function shrink8() {
//   $('#eight').animate({
//     height: '0px',
//   })
// }

// var window8 = setInterval(grow8, randomNumber(4000, 10000));


// // Repeat function for window nine
// function grow9() {
//   $('#nine').animate({
//     height: '50px',
//     width: '50px',
//   }, 500);
//   setTimeout(shrink9, 2000)
// }

// function shrink9() {
//   $('#nine').animate({
//     height: '0px',
//   })
// }

// var window9 = setInterval(grow9, randomNumber(4000, 10000));


// // Repeat function for window ten
// function grow10() {
//   $('#ten').animate({
//     height: '50px',
//     width: '50px',
//   }, 500);
//   setTimeout(shrink10, 2000)
// }

// function shrink10() {
//   $('#ten').animate({
//     height: '0px',
//   })
// }

// var window10 = setInterval(grow10, randomNumber(4000, 10000));

// // Repeat function for window eleven
// function grow11() {
//   $('#eleven').animate({
//     height: '50px',
//     width: '50px',
//   }, 500);
//   setTimeout(shrink11, 2000)
// }

// function shrink11() {
//   $('#eleven').animate({
//     height: '0px',
//   })
// }

// var window11 = setInterval(grow11, randomNumber(4000, 10000));


// Create a timer using a loop
// Tictoc will add seconds to clock
var seconds = 30;
var timer = null;

function tictoc(){
  seconds -= 1;
  console.log(seconds);
  if (seconds === 0) {
    clearInterval(window1);
    clearInterval(window2);
    clearInterval(window3);
    clearInterval(window4);
    clearInterval(window5);
    clearInterval(window6);
    clearInterval(window7);
    clearInterval(window8);
    clearInterval(window9);
    clearInterval(window10);
    clearInterval(window11);
  }
}

// The set interval will ensure that tictoc is only adding seconds
// to the clock after every second
function startTime() {
  timer = setInterval(tictoc, 1000)
}

// // Make a function to turn off the timer
// function stopTime() {
//   clearInterval(timer);
//   // Record the current time and store it as the amount of time to win
//   winningTime = seconds + ' seconds';
//   console.log('Stop!')
// }

// The ".one()" event listener will ensure that my timer is only turned on
// after the first key press or else I will mess up the counter's intervals
$(document).ready(startTime)








// function position(event) {
//   console.log('I\'m here');
//   var x = event.pageX;
//   var y = event.pageY;
//   console.log('x = ' + x + ', y = ' + y)

// }


// $('html').click(position)
