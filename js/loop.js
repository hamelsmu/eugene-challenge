// Wait for the document to load before running the script
(function ($) {

    // We use some Javascript and the URL #fragment to hide/show different parts of the page
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page
    $(window).on('load hashchange', function(){

      // First hide all content regions, then show the content-region specified in the URL hash
      // (or if no hash URL is found, default to first menu item)
      $('.content-region').hide();

      // Remove any active classes on the main-menu
      $('.main-menu a').removeClass('active');
      var region = location.hash.toString() || $('.main-menu a:first').attr('href');

      // Now show the region specified in the URL hash
      $(region).show();

      // Highlight the menu link associated with this region by adding the .active CSS class
      $('.main-menu a[href="'+ region +'"]').addClass('active');

      // Alternate method: Use AJAX to load the contents of an external file into a div based on URL fragment
      // This will extract the region name from URL hash, and then load [region].html into the main #content div
      // var region = location.hash.toString() || '#first';
      // $('#content').load(region.slice(1) + '.html')

    });

  })(jQuery);

  // Loop through descriptors
  $(document).ready(function() {

    var items = ["an applied scientist.", "an ML engineer.", "a writer & speaker.", "an operator-angel.", "a husband & pawdad.", "a Stoic."],
        $text = $( '#hi span' ),
        delay = 1.8; //seconds

    function loop ( delay ) {
        $.each( items, function ( i, elm ){
            $text.delay( delay*1E3).fadeOut();
            $text.queue(function(){
                $text.html( items[i] );
                $text.dequeue();
            });
            $text.fadeIn();
            $text.queue(function(){
                if ( i == items.length -1 ) {
                    loop(delay);
                }
                $text.dequeue();
            });
        });
    }

    loop( delay );

  });

  // End loop