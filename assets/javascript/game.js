//random number shown to start the game 19-120//

//crystal value 1-12

var randomNumber;
var lost;

var win;
var previous=0;

$(".crystal").attr('class','red');

randomNumber = Math.floor(Math.random()*120) +19;

console.log(randomNumber);


$("#result").html('Random Result: '+ randomNumber);

for(var i =0; i<4; i++)
{
    var random = Math.floor(Math.random()*12)+1;
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random":random 
        });


    $(".crystals").append(crystal);  
}

$(".crystal").on('click',function() {
    var num =parseInt($(this).attr('data-random'));

    previous =+ num;

    console.log(previous);
}
);