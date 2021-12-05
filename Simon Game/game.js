
var gamePattern=[];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern=[];
var level =0;
var started = false;

$(document).keypress(function () {
  if(!started) {
    started = true;
    nextSequence(); // function to start the light
  }
});

$(".btn").click( function () {
  var userChosenColour= $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
  console.log(userClickedPattern);
}
 //setTimeout( nextSequence(), 1000);  buttonColours.indexOf(
 //userClickedPattern = [];
);

function nextSequence() {
  userClickedPattern = [];   // coz no var in front, it only change the value in the function
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  level = level+1;
  $( "#level-title").text( "Level " + level);
  //var sound = new Audio("sounds/" + randomChosenColour + ".mp3");
  //console.log(sound);
  //sound.play();
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout( function() {$("#"+currentColour).removeClass("pressed");}, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] == userClickedPlolattern[currentLevel]) {
      if (userClickedPattern.length == gamePattern.length){
/// important::: will skip this function if cunrrently is not the last index, so if any color break the first if, then fail
        nextSequence();
      }
  } else {
    console.log(currentLevel+";"+userClickedPattern+";"+gamePattern);
    $("body").addClass("game-over");
    setTimeout( function () {$("body").removeClass("game-over");},200);
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern=[];
  started = false;
  $( "#level-title").text( "Press A Key to Start ");
}
