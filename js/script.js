$(document).ready(function () {
    $('.fa-pizza-slice').click(function () {
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

});