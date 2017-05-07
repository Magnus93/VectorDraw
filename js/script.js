
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
}

function run () {
  console.log("505050505");
}
