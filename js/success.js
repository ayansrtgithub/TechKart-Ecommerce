// ===============================
// GENERATE ORDER ID
// ===============================

const orderId =

    "TK" +

    Math.floor(

        100000 +

        Math.random() * 900000

    );


document.getElementById(
    "order-id"
).innerText =

    orderId;