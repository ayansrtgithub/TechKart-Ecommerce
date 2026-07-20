// ===============================
// GET PRODUCT
// ===============================

const product =
    JSON.parse(

        localStorage.getItem(
            "selectedProduct"
        )

    );


// ===============================
// HTML ELEMENTS
// ===============================

const img =
    document.getElementById(
        "details-img"
    );

const title =
    document.getElementById(
        "details-title"
    );

const price =
    document.getElementById(
        "details-price"
    );


// ===============================
// DISPLAY DATA
// ===============================

if (product) {

    img.src =
        product.image;

    title.innerText =
        product.name;

    price.innerText =
        product.price;

}