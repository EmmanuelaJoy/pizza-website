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

    /*a hover function for the menu items
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
    }); */


    const themeButton = document.getElementById("theme-button")
    const darkTheme = "dark-theme"
    const iconTheme = "fa-sun"

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
    })


    /* //declaring an object called pizzasize
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
 
     let pizza = {
         name: [],
         pizzaSize,
         crust: [Crispy, Stuffed, Gluten - free],
         toppings: [Salami, Mushroom, Mozzarella, Onions, Bacon]
     }*/

    //business logic
    function Pizza(name, size, amount, crust) {
        this.pizzaName = name;
        this.pizzaSize = size;
        this.pizzaAmount = amount;
        this.pizzaCrust = crust;
    }

    Pizza.prototype.fullName = function () {
        return this.pizzaAmount + " " + this.pizzaName;
    }

    $(document).ready(function () {
        $("form#orderForm").submit(function (event) {
            event.preventDefault();

            var inputtedPizzaName = $("#pizza-name option:selected").val();
            var inputtedPizzaSize = $("#pizza-size option:selected").val();
            var inputtedPizzaAmount = $("input#pizza-amount").val();
            var inputtedPizzaCrust = $("#pizza-crust option:selected").val();

            var newOrder = new Pizza(inputtedPizzaName, inputtedPizzaSize, inputtedPizzaAmount, inputtedPizzaCrust);

            $("ul#orders").append("<li><span class='order'>" + newOrder.fullName() + "</span></li>");

            $("#pizza-name option:selected").val("");
            $("#pizza-size option:selected").val("");
            $("input#pizza-amount").val("");
            $("#pizza-crust option:selected").val("");

            $(".order").last().click(function () {
                $("#show-orders").show();
                $("#show-orders h4").text(newOrder.pizzaName);
                $(".name").text(newOrder.pizzaName);
                $(".size").text(newOrder.pizzaSize);
                $(".amount").text(newOrder.pizzaAmount);
                $(".crust").text(newOrder.pizzaCrust);
            });

        });
    });

});