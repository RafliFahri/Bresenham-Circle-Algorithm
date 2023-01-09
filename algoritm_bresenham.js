const canvas = document.getElementById("canvas").getContext("2d");

//Canvas
canvas.translate(250, 250);
canvas.scale(1, -1);
canvas.moveTo(-250, 0);
canvas.lineTo(250, 0);
canvas.moveTo(0, -250);
canvas.lineTo(0, 250);
canvas.stroke();

//Octan
function drawCircle(xc, yc, x, y) {
  canvas.fillRect(xc + y, yc + x, 1, 1);
  canvas.fillRect(xc + x, yc + y, 1, 1);
  canvas.fillRect(xc + x, yc - y, 1, 1);
  canvas.fillRect(xc + y, yc - x, 1, 1);
  canvas.fillRect(xc - y, yc - x, 1, 1);
  canvas.fillRect(xc - x, yc - y, 1, 1);
  canvas.fillRect(xc - x, yc + y, 1, 1);
  canvas.fillRect(xc - y, yc + x, 1, 1);
}

//Calculations to determine the coordinate points
function drawCircleBresenham(xc, yc, r) {
  var xi = 0;
  var yi = r;
  var arr = [];

  canvas.fillStyle = "BLUE";
  drawCircle(xc,yc,xi,yi);

  var mH = Math.abs(Math.pow((xi+1),2)+Math.pow(yi,2)-Math.pow(r,2));//Horizontal Point
  var mD = Math.abs(Math.pow((xi+1),2)+Math.pow((yi-1),2)-Math.pow(r,2));//Diagonal Point
  var mV = Math.abs(Math.pow(xi,2)+Math.pow((yi-1),2)-Math.pow(r,2));//Vertikal Point

  while (xi < yi) {
    var delta = Math.pow((xi+1),2)+Math.pow((yi-1),2)-Math.pow(r,2);
    console.log(delta);
    if (delta < 0) {
      let alpha = mH - mD;
      console.log("Alpha");
      if (alpha <= 0) {
        xi += 1;
        console.log("Horizontal");
      } else {
        xi += 1;
        yi -= 1;
        console.log("Diagonal");
      }
      arr.push([xi,yi]);
    } else {
      let beta = mD - mV;
      console.log("Delta");
      if (beta <= 0) {
        xi += 1;
        yi -= 1;
        console.log("Diagonal");
      } else {
        yi -= 1;
        console.log("Vertical");
      }
      arr.push([xi,yi]);
    }
    drawCircle(xc,yc,xi,yi);
  }
  console.log(arr);
  console.log(mH);
  console.log(mD);
  console.log(mV);
}
//To Run a Function
drawCircleBresenham(0, 0, 5);
