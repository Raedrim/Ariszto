$(document).ready(function() {

    //Mobile Navbar functions
    $('#hamburger,#close').click(function(){
        $('#hamburger,#close').toggle();
        $('.custom-navigation, #links').toggleClass('visible');
    });

});