//random number shown to start the game 19-120//

//crystal value 1-12

var randomNumber;
var lost;

var win;

randomNumver = Math.floor(Math.ranomd()*120) +19;

console.log(randomNumber);

$("result").html('Random Result: ')

for(var i =0; i<4; i++)
{
    var random = Math.floor(Math.random()*12);
    var crystal = $("<div>");
        crystal.attr("class", 'crystal', "data-random": random);


    $(".crystals").append(crystal);  
    console.log("yeah")

}