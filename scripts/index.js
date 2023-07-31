var canvas=document.querySelector("canvas");
if(canvas.getContext)
{
    var c=canvas.getContext("2d");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    window.addEventListener("resize",function(){
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;
    });

    let grad = c.createLinearGradient(0,canvas.height,0,0);
    grad.addColorStop("0", "rgba(255,0,127, 1)");
    grad.addColorStop("0.6", "rgba(255,0,127, 0)");
    grad.addColorStop("1.0", "rgba(255,0,127, 0)");

    function verticalDraw(x)
    {
        c.beginPath();
        c.lineWidth = 3;
        c.strokeStyle = grad;
        c.moveTo(canvas.width/2,200);
        c.lineTo(x,canvas.height);
        c.stroke();
    }

    function VerticalDrawCall()
    {
        var intervalx=canvas.width/10;
        var dx=0-intervalx*8;

        for(var i=1;i<27;i++)
        {
            verticalDraw(dx);
            dx+=intervalx;
        }
    }

    function TextDraw(color)
    {
        c.font = "150px 'Press Start 2P'";
        c.textAlign = 'center';
        c. textBaseline = 'middle';
        c.fillStyle=color;
        c.fillText("Simon",canvas.width/2,200);
        c.font = "150px 'Press Start 2P'";
        c.lineWidth=10;
        c.strokeStyle="rgba(0,0,0,0.3)";
        c.strokeText("Simon",canvas.width/2,200);

        c.font = "30px 'Press Start 2P'";
        c.fillStyle="#ffa812";
        c.fillText("Follow the pattern",canvas.width/2,350);
        c.fillStyle="#FFEA00";
        c.fillText("of lights and sounds",canvas.width/2,400);
        c.strokeStyle="black";
        c.lineWidth=2;
        c.strokeText("Follow the pattern",canvas.width/2,350);
        c.strokeText("of lights and sounds",canvas.width/2,400);
    }

    var opacity=0.1;
    var intervaly=canvas.height/10;
    var dy=canvas.height/2.5;
    var Horizontal=[];
    function HLine(y,opacity)
    {
        this.y=y;
        this.opacity=opacity;
    }

    function CreateHLines()
    {
        for(var i=1;i<7;i++)
        {
            Horizontal.push(new HLine(dy,opacity));
            dy+=intervaly;
            opacity+=0.04;
        }
    }

    CreateHLines();
    var ClickArea={
        x:canvas.width/2,
        y:canvas.height/2+200,
        w:200,
        h:50,
        mouseX:0,
        mouseY:0
    };
    var color="white";
    function UpdateBtn()
    {
        ClickArea.x=canvas.width/2;
        ClickArea.y=canvas.height/2+200;
        c.font = "30px 'Press Start 2P'";
        c.textAlign = 'center';
        c. textBaseline = 'middle';
        c.fillStyle=color;
        c.fillText("Play",ClickArea.x,ClickArea.y);

        c.lineWidth=2;
        c.strokeStyle="black";
        c.strokeText("Play",ClickArea.x,ClickArea.y);
    }

    window.onmousemove =function(event)
    {
        ClickArea.mouseX=event.clientX;
        ClickArea.mouseY=event.clientY;

        var bx=ClickArea.x-100;
        var by=ClickArea.y-25;
        if((ClickArea.mouseX>bx && ClickArea.mouseX<bx+200) && (ClickArea.mouseY>by && ClickArea.mouseY < by+50))
        {
            color="green";
            canvas.style.cursor="pointer";
        }
        else {
            color="white";
            canvas.style.cursor = "default";
        }
    }
    document.addEventListener("click",function (){
        var bx=ClickArea.x-100;
        var by=ClickArea.y-25;

        if(ClickArea.mouseX>bx && ClickArea.mouseY>by && ClickArea.mouseX<bx+200 && ClickArea.mouseY < by+50)
        {
            window.location.replace("./main.html");
        }
    });

    function MoveHorizontalLine() {
        c.clearRect(0, 0, canvas.width, canvas.height);
        VerticalDrawCall();
        for(var i=0;i<Horizontal.length;i++)
        {
            var line=Horizontal[i];
            if(line.y>=canvas.height)
            {
                Horizontal.splice(0,Horizontal.length);
                opacity=0.1;
                dy=canvas.height/2.5;
                CreateHLines();
            }
            c.beginPath();
            c.lineWidth=3;
            c.strokeStyle=`rgba(255,0,127, ${line.opacity})`;
            c.moveTo(0,line.y);
            c.lineTo(canvas.width,line.y);
            c.stroke();
            line.y+=2;
        }
        var fillColor=["red","green","yellow","blue"];
        var rand=Math.random()*4;
        TextDraw(fillColor[Math.round(rand)]);
        UpdateBtn();
        requestAnimationFrame(MoveHorizontalLine);
      }
      requestAnimationFrame(MoveHorizontalLine);
    
}