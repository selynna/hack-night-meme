var config = {
  apiKey: "AIzaSyCzTgMcVyI-pB89WzP3iysCp94O1RN6-F8",
  authDomain: "drawpepe.firebaseapp.com",
  databaseURL: "https://drawpepe.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

var pointsData = firebase.database().ref();
var points = [];

function setup() {
  var canvas = createCanvas(1400, 1400);
  background(255);
  fill(0);
  pointsData.on("child_added", function(point) {
    points.push(point.val());
  });
  canvas.mousePressed(drawPoint);
  canvas.mouseMoved(function() {
    if (mouseIsPressed) {
      drawPoint();
    }
  });
}

function draw() {
  background(255);
  fill(color("#FFFFFF"));
  noStroke();
  getColor();
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    // fill(point.color);
    fill(color(point.color));
    ellipse(point.x, point.y, 15, 15);
  }
}

function getBlack() {
  // $("#black").click(function() {
  //   console.log("click black");
  //   console.log(color);
  //   return color;
  // });
  var val = "#000000";
  return val;

}

function getGreen() {
  // $("#green").click(function() {
  //   console.log("click green");
  //   console.log(color);
  //   return color;
  // });
  var val = "#68984C";
  return val;
}

function getColor() {
  $("#black").click(function() {
    document.getElementById("colorRN").innerHTML = "#000000";
  })
  $("#green").click(function() {
    document.getElementById("colorRN").innerHTML = "#68984C";
  })
   $("#red").click(function() {
    document.getElementById("colorRN").innerHTML = "#AE6645";
  })
   $("#yellow").click(function() {
    document.getElementById("colorRN").innerHTML = "#FFFB28";
  })
   $("#white").click(function() {
    document.getElementById("colorRN").innerHTML = "#FFFFFF";
  })
  
}

function drawPoint() {
  var colorPicked = document.getElementById("colorRN").innerHTML;
  // var buttonblack = document.getElementById("black");
  // var buttongreen = document.getElementById("green");
  // buttonblack.addEventListener("click", function() {
  //   colorPicked = getBlack();
  // })
  // buttongreen.addEventListener("click", function() {
  //   colorPicked = getGreen();
  // })
  pointsData.push({
    x: mouseX,
    y: mouseY,
    color: colorPicked
  });
}
