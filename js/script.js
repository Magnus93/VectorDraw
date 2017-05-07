
window.onload = function() {
  console.log("hahaha");
  $("svg").attr("onclick", "clickFunction(event)");
  /*$("main").click(function() {
    if ($("svg").is(":visible")) {
      $("svg").hide();
    } else {
      $("svg").show();
    }
  });*/
  setInterval(run, 50);
}

function clickFunction(evt) {
  var x = event.clientX - $("svg").offset().left;
  var y = event.clientY - $("svg").offset().top;
  console.log("Clicked", x, y);
  var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circ.setAttribute("cx", x.toString());
  circ.setAttribute("cy", y.toString());
  circ.setAttribute("r", "10");
  circ.setAttribute("stroke", "teal");
  circ.setAttribute("stroke-width", "2");
  circ.setAttribute("fill", "pink");
  $("svg").append(circ);
  console.log("got herer!");
}

function run () {
  console.log("505050505");
}
