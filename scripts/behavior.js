$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a.jq, footer a[href='#myPage']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top-50
            }, 900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                //window.location.hash = hash; //siempre no :P
            });
        } // End if
    });

    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top-50;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 550) {
                $(this).addClass("slide");
            }
        });
    });
})
 
$(function() {
    
    $(".totop").on("click", function( e ) {
        
        e.preventDefault();
    
        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top-50
        }, 1000);
        
    });
        
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') == 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
})

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});