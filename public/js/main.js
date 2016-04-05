$(document).ready(function() {
    $(window).scroll(function() {
        $('.animate-show').each(function() {
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > top_of_object ){
                $(this).animate({'opacity':'1'}, 700);
            }
        })
    });
});