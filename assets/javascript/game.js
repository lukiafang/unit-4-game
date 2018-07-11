//random number shown to start the game 19-120//

//crystal value 1-12

var randomNumber;
var lost=0;

var win=0;
var previous=0;



var restart =function ()
{
    $(".crystals").empty();
    
    var localImages = 
            [
             'assets/images/crystal1.jpg',
             'assets/images/crystal2.jpg',
             'assets/images/crystal3.jpg',
             'assets/images/crystal4.jpg',
            ]; 

    randomNumber = Math.floor(Math.random()*120) +19;

    console.log(randomNumber);
    
    
    $("#result").html('Random Result: '+ randomNumber);

    

    
    for(var i =0; i<4; i++)
    {
        var random = Math.floor(Math.random()*12)+1;
        

        
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random":random ,
                
                
            });
            
            
            crystal.css("background-image","url('"+localImages[i]+"')");
            
            
        
        $(".crystals").append(crystal); 


        
        
       
    }

    $("#previous").html("Current Number: "+previous);
}

$(".crystal").attr('class','red');


var reset = function()
{

}

restart();


$(document).on('click',".crystal", function() 
{
    var num =parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Current Number: "+previous);
    console.log(previous);


    if(previous > randomNumber)
    {
        alert("you lost!");
        lost++;
        $("#lost").html("Lost: "+lost);
        previous = 0;
        restart();

    }
    else if(previous ===randomNumber)
    {
        alert("you win!!!");
        win++;
        $("#win").html("Win: "+win);
        previous = 0;
        restart();
    }

    
}
);

