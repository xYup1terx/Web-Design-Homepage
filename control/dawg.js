   $( function() {
    $( ".drag" ).draggable({ revert: "invalid" });

        $( ".pup" ).droppable({
         accept: ".drag",
    
      drop: function( event, ui ) {

      var outfit = $(ui.draggable).data("outfit");
      var sound = $(ui.draggable).data("sound");

       new Audio( sound ).play();

      ui.draggable.hide();
      
    $( ".drag" ).css("opacity", "0");
    $(".button").css("opacity","1")
    $(".good").css("opacity","1")
      

       $( ".pup" ).fadeOut( 300, function() {
       $( ".pup" ).attr( "src", outfit );
       $( ".pup" ).fadeIn( 300 );
      });
    }

  });
});








// https://jqueryui.com/droppable/#default
// https://www.w3schools.com/jquery/html_attr.asp
// https://jqueryui.com/droppable/#revert
// https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes
// https://www.w3schools.com/tags/att_global_data.asp
// https://docs.w3cub.com/jquery/data
// https://jqueryui.com/hide/ 
// https://jqueryui.com/show/
// https://stackoverflow.com/questions/9419263/how-to-play-audio
// https://mimo.org/glossary/html/data-attribute