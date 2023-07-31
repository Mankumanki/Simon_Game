$(".Green").click(function(){
    if(!loss){GreenClick(true);}
});

$(".Blue").click(function(){
    if(!loss){BlueClick(true);}
});

$(".Red").click(function(){
    if(!loss){RedClick(true);}
});

$(".Yellow").click(function(){
    if(!loss){YellowClick(true);}
});

var data=[];
var ctr=0;
var loss=false;
var score=0;

if(data.length==0 && !loss)
{
    setTimeout(Random,1000);
}

function Check(click,btn)
{
    if(click)
    {
        if(data[ctr]!=btn)
        {
            data.splice(0,data.length);
            ctr=0;
            loss=true;
            var lossAudio=new Audio("./sounds/wrong.mp3");
            lossAudio.play();
            $("h1").text("Game Over!!!");
            sessionStorage.setItem("score",score);
            setTimeout(function(){
                window.location.replace("./gameEnd.html");
            },2000);
        }
        else{
            ctr++;
        }
    }
    if(data.length!=0 && ctr>=data.length){
        score++;
        $("h1").text("Score : "+score);
        setTimeout(Random,1000);
        ctr=0;
    }
}

function GreenClick(click)
{   
    $(".Green").addClass("GreenClicked");
    setTimeout(function(){$(".Green").removeClass("GreenClicked");},300);
    var greenSound=new Audio("./sounds/green.mp3");
    greenSound.play();
    Check(click,0);
}

function BlueClick(click)
{
    $(".Blue").addClass("BlueClicked");
    setTimeout(function(){$(".Blue").removeClass("BlueClicked");},300);
    var blueSound=new Audio("./sounds/blue.mp3");
    blueSound.play();
    Check(click,1);
}

function RedClick(click)
{
    $(".Red").addClass("RedClicked");
    setTimeout(function(){$(".Red").removeClass("RedClicked");},300);
    var redSound=new Audio("./sounds/red.mp3");
    redSound.play();
    Check(click,2);
}

function YellowClick(click)
{
    $(".Yellow").addClass("YellowClicked");
    setTimeout(function(){$(".Yellow").removeClass("YellowClicked");},300);
    var yellowSound=new Audio("./sounds/yellow.mp3");
    yellowSound.play();
    Check(click,3);
}

function Random()
{
    // 0-Green,1-Blue,2-Red,3-Yellow
    var num=Math.round(Math.random()*3);
    data.push(num);
    switch(num)
    {
        case 0: GreenClick(false,ctr);
        break;

        case 1: BlueClick(false,ctr);
        break;

        case 2: RedClick(false,ctr);
        break;

        case 3: YellowClick(false,ctr);
        break;

    }
}

$("h2").hover(function() {
    $(this).css("cursor","grab");
    $(this).css("color","red");
},function(){
    $(this).css("color","white");
});

$("h2").click(function(){
    window.location.replace("./index.html");
});
