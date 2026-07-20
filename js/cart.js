// ===============================
// GET CART DATA FROM LOCAL STORAGE
// ===============================

cart = JSON.parse(
    localStorage.getItem("cart")
) || [];

if (typeof updateCartCount === "function") {

    updateCartCount();

}


// ===============================
// GET HTML ELEMENTS
// ===============================

const cartItemsContainer =
    document.getElementById("cart-items");

const totalItems =
    document.getElementById("total-items");

const totalPrice =
    document.getElementById("total-price");


// ===============================
// DISPLAY CART ITEMS
// ===============================

function displayCart() {

    if (
        !cartItemsContainer ||
        !totalItems ||
        !totalPrice
    ) {
        return;
    }

    cartItemsContainer.innerHTML = "";

    let total = 0;


    cart.forEach((item, index) => {

        const priceNumber = parseInt(

            item.price.replace(
                /[^0-9]/g,
                ""
            )

        );


        // FIXED TOTAL
        total +=
            priceNumber *
            (item.quantity || 1);


        const cartCard =
            document.createElement("div");

        cartCard.classList.add(
            "cart-card"
        );


        cartCard.innerHTML = `

        <img src="${item.image}">

        <div class="cart-info">

            <h3>${item.name}</h3>

            <p>${item.price}</p>

            <div class="quantity-box">

                <button
                onclick="decreaseQuantity(${index})">

                −

                </button>

                <span>

                ${item.quantity || 1}

                </span>

                <button
                onclick="increaseQuantity(${index})">

                +

                </button>

            </div>

            <button
            class="remove-btn"
            onclick="removeItem(${index})">

            Remove

            </button>

        </div>

        `;


        cartItemsContainer.appendChild(
            cartCard
        );

    });


    totalItems.innerText =
        cart.length;


    totalPrice.innerText =
        "₹" + total.toLocaleString();

}



// ===============================
// INCREASE QUANTITY
// ===============================

function increaseQuantity(index) {

    cart[index].quantity++;

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    displayCart();

    updateCartCount();

}



// ===============================
// DECREASE QUANTITY
// ===============================

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    }

    else {

        cart.splice(index, 1);

    }

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    displayCart();

    updateCartCount();

}



// ===============================
// REMOVE ITEM
// ===============================

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    displayCart();

    updateCartCount();

}



// ===============================
// INITIAL CALL
// ===============================

displayCart();