//business logic
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "fa-sun"

/*toggles the moon icon*/
themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
})

/*pizza objects constructor*/
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

let sizePrice;

$(function () {
    $('#pizza-size').change(function () {
        sizePrice = {
            'small': 650,
            'medium': 850,
            'large': 1000
        };
        $('input[name=sizePrice]').val(sizePrice[$(this).val()]);
    });
});

$(function () {
    $('#pizza-crust').change(function () {
        var crustPrices = {
            'crispy': 100,
            'stuffed': 150,
            'gluten-free': 200
        };
        $('input[name=crustPrice]').val(crustPrices[$(this).val()]);
    });
});


$(".pizzaTop").click(function (event) {
    var toppingsTotal = 0;
    $(".pizzaTop:checked").each(function () {
        toppingsTotal += 100;
        $('input[name=toppingsPrice]').val(toppingsPrice[$(this).val()]);

    });

    if (toppingsTotal == 0) {
        $('#topAmount').val('');
    } else {
        $('#topAmount').val(toppingsTotal);
    }
});

/*Pizza.prototype.crustPrice = function () {
    if (inputtedPizzaSize === "small") {
        this.crustPrice + 100;
        return crustPrice;
    } else if (inputtedPizzaSize === "medium") {
        this.sizePrice + 150;
    } else if (inputtedPizzaSize === "large") {
        this.sizePrice + 200;
    }
}

Pizza.prototype.toppingsPrice = function () {
    if (inputtedPizzaSize === "small") {
        this.toppingsPrice + 50;
    } else if (inputtedPizzaSize === "medium") {
        this.toppingsPrice + 100;
    } else if (inputtedPizzaSize === "large") {
        this.toppingsPrice + 1500;
    }
}

total = sizePrice() + crustPrice() + toppingsPrice();
console.log(total);
let checkoutTotal = 0;
checkoutTotal = checkoutTotal + total; */

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
        var proceed = function () {
            if (inputtedPizzaName == '' || inputtedPizzaSize == '' || inputtedPizzaAmount == '' || inputtedPizzaCrust == '') {
                event.preventDefault();
            } else {
                alert("Your order for " + inputtedPizzaName + " has been added, click on it to proceed to checkout or order another pizza");
            }

        }
        proceed();

        $("ul#orders").append("<li><span class='order'>" + newOrder.fullName() + " pizza" + "</span>" + "<i class='fas fa-trash'></i>" + "</li>");
        $("#pizza-name option:selected").val("");
        $("#pizza-size option:selected").val("");
        $("input#pizza-amount").val("");
        $("#pizza-crust option:selected").val("");


        $(".order").last().click(function () {
            $("#show-orders").show();
            $("button#proceed").show();
            $("#show-orders h4").text(newOrder.pizzaName);
            $(".name").text(newOrder.pizzaName);
            $(".size").text(newOrder.pizzaSize)
            $(".amount").text(newOrder.pizzaAmount);
            $(".crust").text(newOrder.pizzaCrust)
            $(".toppings").text(newOrder.pizzaToppings)
        });

        $("#orderForm").trigger("reset");

    });

    //proceed to checkout button
    $("button#proceed").click(function () {
        $("button#addOrder").hide();
        $("button#proceed").hide();
        $("#buyerInfo").show();
    });

    //place order button
    $("button#placeOrder").click(function (event) {
        event.preventDefault();
        var buyerName = $("#buyerName").val();
        var buyerNumber = $("#buyerNumber").val();
        var buyerAddress = $("#buyerAddress").val();
        if (buyerName == '' || buyerNumber == '' || buyerAddress == '') {
            alert("Fill in form details first");
        } else {
            alert("Details received! Choose delivery option.");
            $("#buyerInfo").hide();
            $("#deliveryOption").slideDown(1000);
        }
    });

    //delivery button
    $("button#homeDelivery").click(function () {
        let deliveryArea = prompt("Where would you like the pizza to be delivered?");
        let confirmation = confirm("Proceed with " + deliveryArea + " home address?")
        if (confirmation == true) {
            alert("Please note that you will incur 200/= charge for delivery to " + deliveryArea);
            alert("Your pizza will be delivered to " + deliveryArea + " kindly proceed to checkout");
            $("button#checkout").show();
        } else if (confirmation == false) {
            alert("Select another delivery area");
        }
    });

    //pickup button
    $("button#pickup").click(function () {
        alert("Your order will be ready for pickup at Roysambu along Lumumba Drive. Proceed to checkout");
        $("button#checkout").show();
    });

    // Checkout button
    $("button#checkout").click(function () {
        $("#deliveryOption").hide();
        $("ul#orders").hide();
        $("button#checkout").hide();
    });
});