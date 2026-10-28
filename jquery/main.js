$(".dark-btn").click(
    function(){
  $(".container").toggleClass("dark");
  $(".box").toggleClass("dark");
//   $(".hm").toggleClass("dark");
}
);

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
);

$(".reveal-btn").click(
    function(){
        // $(".papa").addClass("reveal");
        // $(".hm").addClass("reveal");

        $(".papa").css("opacity", "1");
        $(".hm").css("opacity", "1");

        // $(".reveal-btn").css ("display", "none");
        $(".reveal-btn").hide();
    }
);

  $( function() {
    $( ".draggable" ).draggable({
        snap: true,
        grid: [40,40],
        containment: '.container',
        scroll: false
    });
  } );

