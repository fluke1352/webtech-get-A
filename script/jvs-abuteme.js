$( document ).imagesLoaded( function() {

    // select all images that are links
    var $imageLinks = $( 'a img' );

    // loop through each image that is a link
    $imageLinks.each( function(){

        // wrap the image link in a div
        $( this ).parent( 'a' ).wrap( '<div class="img-link-wrapper" style="display: inline-block; text-align: center;"></div>' );

        // setup initial css
        $( this ).css({ '-webkit-transition' : '0.4s ease',
                        '-moz-transition' : '0.4s ease',
                        '-o-transition' : '0.4s ease',
                        'transition' : '0.4s ease'
                       });

        // set the height of the wrapper div to the height of the image
        var imgHeight = $( this ).height();
        var imgWidth = $( this ).width();
        $( this ).parents( 'div.img-link-wrapper' )
                 .css({ 'height' : imgHeight,
                        'width' : imgWidth,
                        'overflow' : 'hidden'
                       });

    });

    // set up a .hovered class
    $( 'body' ).append( '<style>.img-link-hovered { -webkit-transform: scale(1.05); -moz-transform: scale(1.05); -ms-transform: scale(1.05); -o-transform: scale(1.05); transform: scale(1.05); }</style>' );

    // add/remove the class on hover
    $( 'a img' ).hover( function() {
     	  $( this ).addClass( 'img-link-hovered' );
    }, function() {
        $( this ).removeClass( 'img-link-hovered' );
    });

});