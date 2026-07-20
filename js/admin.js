// ===============================
// GET DATA
// ===============================

const orders =
    JSON.parse(
        localStorage.getItem("orders")
    ) || [];


const wishlist =
    JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];


// ===============================
// TOTAL ORDERS
// ===============================

document.getElementById(
    "total-orders"
).innerText =
    orders.length;


// ===============================
// WISHLIST COUNT
// ===============================

document.getElementById(
    "wishlist-count"
).innerText =
    wishlist.length;


// ===============================
// TOTAL REVENUE
// ===============================

let revenue = 0;

orders.forEach((item) => {

    const price =
        parseInt(

            item.price.replace(
                /[^0-9]/g,
                ""

            )

        );

    revenue += price;

});


document.getElementById(
    "total-revenue"
).innerText =

    "₹" + revenue.toLocaleString();