$(document).ready(function () {
    $('.fa-pizza-slice').click(function () {
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $('.dot1').click(function () {
        $('#img1').css('display', 'block');
        $('#img2').css('display', 'none');
        $('#img3').css('display', 'none');
    });

    $('.dot2').click(function () {
        $('#img2').css('display', 'block');
        $('#img1').css('display', 'none');
        $('#img3').css('display', 'none');
    });

    $('.dot3').click(function () {
        $('#img3').css('display', 'block');
        $('#img1').css('display', 'none');
        $('#img2').css('display', 'none');
    });

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle("sticky", window.scroll)
    });


});