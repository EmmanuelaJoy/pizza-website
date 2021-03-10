//business logic
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "fa-sun"

/*toggles the moon icon*/
themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
})


function Pizza(name, size, amount, crust, toppings, total) {
    this.pizzaName = name;
    this.pizzaSize = size;
    this.pizzaAmount = amount;
    this.pizzaCrust = crust;
    this.pizzaToppings = toppings;
    this.pizzaTotal = total;
}

Pizza.prototype.fullName = function () {
    return this.pizzaAmount + " " + this.pizzaName;
}



Pizza.prototype.sizePrice = function () {
    if (this.pizzaSize === "small") {
        this.sizePrice + 650;
    } else if (this.pizzaSize === "medium") {
        this.sizePrice + 850;
    } else if (this.pizzaSize === "large") {
        this.sizePrice + 1000;
    }
}

Pizza.prototype.crustPrice = function () {
    if (this.pizzaSize === "small") {
        this.crustPrice + 100;
    } else if (this.pizzaSize === "medium") {
        this.sizePrice + 150;
    } else if (this.pizzaSize === "large") {
        this.sizePrice + 200;
    }
}

Pizza.prototype.crustPrice = function () {
    if (this.pizzaSize === "small") {
        this.crustPrice + 50;
    } else if (this.pizzaSize === "medium") {
        this.sizePrice + 100;
    } else if (this.pizzaSize === "large") {
        this.sizePrice + 1500;
    }
}

//user-interface logic

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

    //add order button
    $("form#orderForm").submit(function (event) {
        event.preventDefault();

        var inputtedPizzaName = $("#pizza-name option:selected").val();
        var inputtedPizzaSize = $("#pizza-size option:selected").val();
        var inputtedPizzaAmount = $("input#pizza-amount").val();
        var inputtedPizzaCrust = $("#pizza-crust option:selected").val();
        var inputtedPizzaToppings = [];
        $("input[type=checkbox][name=pizzaTop]:checked").each(function () {
            inputtedPizzaToppings.push($(this).val());
        });


        var newOrder = new Pizza(inputtedPizzaName, inputtedPizzaSize, inputtedPizzaAmount, inputtedPizzaCrust, inputtedPizzaToppings);
        var placeOrder = function () {
            if (inputtedPizzaName == '' || inputtedPizzaSize == '' || inputtedPizzaAmount == '' || inputtedPizzaCrust == '') {
                event.preventDefault();
            } else {
                alert("Your order for " + inputtedPizzaName + " has been added, you may proceed to checkout or order another pizza");
            }

        }
        placeOrder();

        $("ul#orders").append("<li><span class='order'>" + newOrder.fullName() + " pizza" + "</span></li>");
        $("#pizza-name option:selected").val("");
        $("#pizza-size option:selected").val("");
        $("input#pizza-amount").val("");
        $("#pizza-crust option:selected").val("");


        $(".order").last().click(function () {
            $("#show-orders").show();
            $("button#removeOrders").show();
            $("button#placeOrder").show();
            $("#show-orders h4").text(newOrder.pizzaName);
            $(".name").text(newOrder.pizzaName);
            $(".size").text(newOrder.pizzaSize);
            $(".amount").text(newOrder.pizzaAmount);
            $(".crust").text(newOrder.pizzaCrust);
            $(".toppings").text(newOrder.pizzaToppings);
        });

        $("#orderForm").trigger("reset");

    });

    //place order button
    $("button#placeOrder").click(function () {
        $("button#addOrder").hide();
        $("button#placeOrder").hide();
        $("#addedprice").slideDown(1000);
        $("button#homeDelivery").slideDown(1000);
        $("button#pickup").slideDown(1000);
        console.log("Your total bills is sh. " + checkoutTotal);
        $("#pizzatotal").append("Your bill is sh. " + checkoutTotal);
    });

    //delivery button
    $("button#homeDelivery").click(function () {
        let deliveryArea = prompt("Where would you like the pizza to be delivered?");
        let confirmation = confirm("Proceed with " + deliveryArea + " home address?")
        if (confirmation == true) {
            alert("Your pizza will be delivered to " + deliveryArea + " kindly proceed to checkout");
            $("button#checkout").show();
        } else if (confirmation == false) {
            alert("Select another delivery area");
        }
    });
});