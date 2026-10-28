  // $( function() {
  //   $( "#draggable, #draggable-nonvalid" ).draggable();
  //   $( "#droppable" ).droppable({
  //     accept: "#draggable",
  //     classes: {
  //       "ui-droppable-active": "ui-state-active",
  //       "ui-droppable-hover": "ui-state-hover"
  //     },
  //     drop: function( event, ui ) {
  //       $( this )
  //         .addClass( "ui-state-highlight" )
  //         .find( "p" )
  //           .html( "Dropped!" );
  //     }
  //   });
  // } );

    $( function() {
    $( ".bad" ).draggable({ revert: "valid" });
    $( ".good" ).draggable({ revert: "invalid" });

 
    $( ".bowl" ).droppable({
     
      drop: function( event, ui ) {

      if ( ui.draggable.hasClass( "bad" ) ) {
        
       $( ".sus" ).css( "display", "block" );
       $( ".sus" )[0].offsetWidth;

       $( ".sus" ).one( "animationend", function() {
          $( ".sus" ).css( "display", "none" );

       });

      }

    }
  });
});


// https://css-tricks.com/restart-css-animation/
// https://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element
//https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event
// https://docs.w3cub.com/jquery/one
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else