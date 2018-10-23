function Cargar(){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var x = canvas.width/2;
  var y = canvas.height-30;
  var dx = 2;
  var dy = -2;
  var ballRadius = 10;
  var paddleHeight = 10;
  var paddleWidth = 75;
  var paddleX = (canvas.width-paddleWidth)/2;
  var fotogramas = 10;

  //variables para saber si se pulsa el teclado..
  var rightPressed = false;
  var leftPressed = false;

  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    //rebote de pelota
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
      dx = -dx;
    }
    if(y + dy < ballRadius){
      dy = -dy;
    } else if (y + dy > canvas.height-ballRadius) {

      if(x > paddleX && x < paddleX + paddleWidth){
        dy = -dy;
        fotogramas = fotogramas--;
      }else{
        alert("GAME OVER");
        document.location.reload();
      }
    }

    //movimiento tabla
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
    }

    x += dx;
    y += dy;

  }
  function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
  function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
  function keyDownHadler(ev){
    if(ev.keyCode == 39){
      rightPressed = true;
    }
    else if(ev.keyCode == 37){
      leftPressed = true;
    }
  }
    function keyUpHadler(ev){
      if(ev.keyCode == 39){
        rightPressed = false;
      }
      else if(ev.keyCode == 37){
        leftPressed = false;
      }
  }

  document.addEventListener("keydown", keyDownHadler,false);
  document.addEventListener("keyup", keyUpHadler,false);
  setInterval(draw, fotogramas);

}
