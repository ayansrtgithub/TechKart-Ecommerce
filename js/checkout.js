// ===============================
// GET CART DATA
// ===============================

cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];


const checkoutItems =
    document.getElementById(
        "checkout-items"
    );

const checkoutPrice =
    document.getElementById(
        "checkout-price"
    );


// ===============================
// CALCULATE TOTAL
// ===============================

let total = 0;

cart.forEach((item) => {

    const priceNumber = parseInt(

        item.price.replace(
            /[^0-9]/g,
            ""
        )

    );

    total +=
        priceNumber *
        (item.quantity || 1);

});


checkoutItems.innerText =
    cart.length;

checkoutPrice.innerText =
    "₹" + total.toLocaleString();


// ===============================
// PAYMENT FORM
// ===============================

const paymentForm =
    document.getElementById(
        "paymentForm"
    );


paymentForm.addEventListener(
    "submit",
    (e) => {

        e.preventDefault();


        // =========================
        // GET PREVIOUS ORDERS
        // =========================

        let orders =

            JSON.parse(

                localStorage.getItem(
                    "orders"
                )

            ) || [];


        // STATUS OPTIONS

        const statuses = [

            "Pending",

            "Processing",

            "Shipped",

            "Delivered"

        ];


        // =========================
        // ADD CART ITEMS
        // =========================

        cart.forEach((item) => {

            orders.push({

                name: item.name,

                price: item.price,

                date: new Date()
                    .toLocaleDateString(),

                status:

                    statuses[

                    Math.floor(

                        Math.random() *
                        statuses.length

                    )

                    ]

            });

        });


        // =========================
        // SAVE ORDERS
        // =========================

        localStorage.setItem(

            "orders",

            JSON.stringify(
                orders
            )

        );


        // CLEAR CART

        localStorage.removeItem(
            "cart"
        );


        // REDIRECT

        window.location.href =
            "success.html";

    });