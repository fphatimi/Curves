var phi = 0;
console.log("Hello World!");
alert("testing canvas");
animate(3, 5);



function degToRad(degrees) {
    return degrees * Math.PI / 180;
  };
/* ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

ctx.fillStyle = 'rgb(255,0,0)';
ctx.fillRect(50,50,100,150);

ctx.fillStyle = 'rgb(0,255,0)';
ctx.fillRect(75,75,100,100);

ctx.fillStyle = 'rgba(255,0,255,0.75)';
ctx.fillRect(25,100,175,50);

ctx.strokeStyle = 'rgb(255,255,255)';
ctx.lineWidth = 5;
ctx.strokeRect(25,25,175,200);
 */

function drawLissajous(a, b)
{
    phi+=5;
    phi = phi % 360;
    console.log("phi=" + phi);
    const canvas = document.querySelector('.myCanvas');
    console.log("width=" + canvas.width);
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    var xoffset = width/2;
    var yoffset = height/2;
    var radius = 100;
    var x = 0;
    var y = 0;
    var xlast = 0;
    var ylast = 0;
    ctx.strokeStyle = 'rgb(255,0,70)';
    ctx.fillStyle = 'rgb(45, 70, 0)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    
    for(let t=0; t<=360; t++)
    {
        if (t==0)
        {
            xlast = xoffset + radius * Math.cos(a * degToRad(t) + degToRad(phi));
            ylast = yoffset + radius * Math.sin(b * degToRad(t) + degToRad(phi));
            ctx.moveTo(xlast, ylast);
            
        }
        else {
            x = xoffset + radius * Math.cos(a * degToRad(t) + degToRad(phi));
            y = yoffset + radius * Math.sin(b * degToRad(t) + degToRad(phi));
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        xlast = x;
        ylast = y;
    }
 
}

function animate(a, b)
{
    setInterval(drawLissajous, 50, a, b);

}