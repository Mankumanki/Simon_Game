var score=sessionStorage.getItem("score");
ScoreCall();
function ScoreCall()
{
    $(".retry").hide();
    $(".main").hide();
    var src="./images/"
    $("img").hide();
    if(score>=0 && score<=8)
    {
        $("img").attr("src",src+"gif1.gif");
    }
    else if(score>8 && score<=14)
    {
        $("img").attr("src",src+"gif2.gif");
    }
    else if(score>14)
    {
        $("img").attr("src",src+"gif3.gif");
    }
    $("img").fadeIn(3000);
    $(".main").show();
    $(".retry").show();
}

$(".retry").click(function(){
    window.location.replace("./main.html");
});

$(".main").click(function(){
    window.location.replace("./index.html");
});

$(".retry").hover(function() {
    $(this).css("cursor","grab");
    $(this).css("color","green");
},function(){
    $(this).css("color","white");
});

$(".main").hover(function() {
    $(this).css("cursor","grab");
    $(this).css("color","pink");
},function(){
    $(this).css("color","white");
});

