/*
  Team wbbc - Bayan Berri and Charles Weng
  SoftDev2 pd7
  K11: All That Bouncin'
  2018-03-12
*/

/*
  ==============================================================================
                                  Variables/Initiation
  ==============================================================================
*/

var svg= document.getElementById("vimage");
var clear=document.getElementById("clear");
var width=svg.getAttribute("width");
var height=svg.getAttribute("height");

/*
  ==============================================================================
                                  Functions
  ==============================================================================
*/

var clearSVG = function() {//byebye balls
  console.log("Clear SVG");
  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }
};

var createCircle = function(e) {//let it be in existence
  var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circ.setAttribute("cx", Math.floor(Math.random()*width));
  circ.setAttribute("cy", Math.floor(Math.random()*height));
  circ.setAttribute("r", 20);
  circ.setAttribute("fill", "cyan");
  circ.setAttribute("stroke", "black");
  circ.setAttribute("dx", Math.floor(Math.random() * 3) + 1);
  circ.setAttribute("dy", Math.floor(Math.random() * 3) + 1);
  svg.appendChild(circ);
};

var moveDVD = function() {//let it b bouncy
  var ctr, child, radius, x, y, dx, dy;
  for (ctr = 0; ctr < svg.children.length; ctr++) {
    child = svg.children[ctr];
    radius = child.getAttribute("r");
    x = Number(child.getAttribute("cx"));
    y = Number(child.getAttribute("cy"));
    dx = Number(child.getAttribute("dx"));
    dy = Number(child.getAttribute("dy"));

    if (x < radius || x > width - radius) {
      child.setAttribute("dx", dx *= -1);
    }
    if (y < radius || y > height - radius) {
      child.setAttribute("dy", dy *= -1);
    }

    child.setAttribute("cx", x + dx);
    child.setAttribute("cy", y + dy);
  }
};

setInterval(moveDVD, 10);

clear.addEventListener("click", clearSVG);
svg.addEventListener("click", createCircle);
