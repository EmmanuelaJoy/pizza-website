$(document).ready(function () {
    //toggle function for the pizza-slice icon that displays on smaller screens
    $('.fa-pizza-slice').click(function () {
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function () {
        $('.fa-pizza-slice').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });

    //a function that displays a different image on the landing page when someone clicks on the dots below
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

    //a function that makes the header position sticky
    $(window).on('scroll load', function () {
        if ($(window).scrollTop() > 10) {
            $('#header').addClass('header-active');
        } else {
            $('#header').removeClass('header-active');
        }
    });

    //a hover function for the menu items
    $(".card-img-top").hover(function () {
        $(this).stop().animate({
            opacity: .6
        }, 200);
        $('.price').css('visibility', 'visible');
    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 500);
        $('.price').css('visibility', 'hidden');
    });


    //declaring an object called pizzasize
    let pizzaSize = {
        small: 850,
        medium: 1150,
        large: 1300
    }

    //pizza constructor
    function Pizza(name, size, crust, toppings) {
        this.pizzaName = name;
        this.pizzaSize = size;
        this.pizzaCrust = crust;
        this.pizzaToppings = toppings;
    }
    var order1 = new Pizza("bbq", "small", "thick", "bacon");

    /*let pizza = {
        name: [],
        pizzaSize,
        crust: [Crispy, Stuffed, Gluten - free],
        toppings: [Salami, Mushroom, Mozzarella, Onions, Bacon]
    }*/


});