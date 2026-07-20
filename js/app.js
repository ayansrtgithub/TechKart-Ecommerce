// ===============================
// CART DATA
// ===============================

let cart =

    JSON.parse(
        localStorage.getItem("cart")
    ) || [];


// ===============================
// TOAST FUNCTION
// ===============================

function showToast(

    message = "Product Added To Cart ✅"

) {

    const toast =
        document.getElementById("toast");

    if (!toast) return;

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


// ===============================
// ADD TO CART
// ===============================

const addToCartButtons =

    document.querySelectorAll(
        ".add-cart"
    );


addToCartButtons.forEach((button) => {

    button.addEventListener(
        "click",
        (e) => {

            e.stopPropagation();


            // PRODUCT CARD

            const productCard =

                button.closest(
                    ".product-card"
                )

                ||

                button.closest(
                    ".product-detail-card"
                );


            if (!productCard) return;


            // GET PRODUCT DATA

            const product = {

                name:

                    productCard
                        .querySelector(
                            "h1,h3"
                        )
                        .innerText,

                price:

                    productCard
                        .querySelector(
                            ".price,p"
                        )
                        .innerText,

                image:

                    productCard
                        .querySelector(
                            "img"
                        )
                        .src,

                quantity: 1

            };


            // CHECK EXISTING

            const existingProduct =

                cart.find(item =>

                    item.name
                    ===
                    product.name

                );


            if (existingProduct) {

                existingProduct.quantity++;

            }

            else {

                cart.push(product);

            }


            // SAVE

            localStorage.setItem(

                "cart",

                JSON.stringify(cart)

            );


            // TOAST

            showToast();


            // UPDATE COUNT

            updateCartCount();

        }

    );

});


// ===============================
// PRODUCT SEARCH
// ===============================

const searchInput =

    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(

        "keyup",

        () => {

            const searchValue =

                searchInput.value.toLowerCase();


            const productCards =

                document.querySelectorAll(
                    ".product-card"
                );


            productCards.forEach((card) => {

                const productName =

                    card.querySelector("h3")
                        .innerText
                        .toLowerCase();


                if (

                    productName.includes(searchValue)

                ) {

                    card.style.display = "block";

                }

                else {

                    card.style.display = "none";

                }

            });

        }

    );

}


// ===============================
// PRODUCT MODAL
// ===============================

const modal =
    document.getElementById("productModal");

const modalImg =
    document.getElementById("modalImg");

const modalTitle =
    document.getElementById("modalTitle");

const modalPrice =
    document.getElementById("modalPrice");

const modalCartBtn =
    document.querySelector(".modal-cart-btn");

const closeBtn =
    document.querySelector(".close-btn");

let currentProduct = {};


// ===============================
// CLICKABLE PRODUCT CARD
// OPEN PRODUCT DETAILS PAGE
// ===============================

const clickableCards =

    document.querySelectorAll(
        ".clickable-card"
    );


clickableCards.forEach((card) => {

    card.addEventListener("click", (e) => {

        // PREVENT BUTTON CLICK

        if (

            e.target.closest(".add-cart")

            ||

            e.target.closest(".wishlist-btn")

        ) {

            return;

        }


        const id =
            card.dataset.id;

        const image =
            card.querySelector("img").src;

        const title =
            card.querySelector("h3").innerText;

        const price =
            card.querySelector("p").innerText;


        const product = {

            id: id,

            image: image,

            name: title,

            price: price

        };


        // SAVE PRODUCT

        localStorage.setItem(

            "selectedProduct",

            JSON.stringify(product)

        );


        // REDIRECT

        window.location.href =

            "product-details.html";

    });

});


// ===============================
// CLOSE MODAL
// ===============================

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

    });

}


if (modal) {

    window.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });

}


// ===============================
// MODAL ADD TO CART
// ===============================

if (modalCartBtn) {

    modalCartBtn.addEventListener("click", () => {

        let cart =

            JSON.parse(
                localStorage.getItem("cart")
            ) || [];


        const existingProduct =

            cart.find(item =>

                item.name === currentProduct.name

            );


        if (existingProduct) {

            existingProduct.quantity++;

        }

        else {

            cart.push(currentProduct);

        }


        localStorage.setItem(

            "cart",

            JSON.stringify(cart)

        );


        showToast();

        updateCartCount();

    });

}


// ===============================
// WISHLIST
// ===============================

const wishlistButtons =

    document.querySelectorAll(
        ".wishlist-btn"
    );


wishlistButtons.forEach((button) => {

    button.addEventListener("click", (e) => {

        e.stopPropagation();

        const productCard =

            button.closest(".product-card");


        const product = {

            name:
                productCard.querySelector("h3").innerText,

            price:
                productCard.querySelector("p").innerText,

            image:
                productCard.querySelector("img").src

        };


        let wishlist =

            JSON.parse(
                localStorage.getItem("wishlist")
            ) || [];


        wishlist.push(product);


        localStorage.setItem(

            "wishlist",

            JSON.stringify(wishlist)

        );


        showToast(
            "Added To Wishlist ❤️"
        );

    });

});


// ==========================
// MOBILE MENU
// ==========================

const menuToggle =

    document.querySelector(".menu-toggle");

const navLinks =

    document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// ===============================
// CATEGORY FILTER
// ===============================

const filterButtons =

    document.querySelectorAll(
        ".filter-btn"
    );


const productCards =

    document.querySelectorAll(
        ".product-card"
    );


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const category =
            button.dataset.category;


        productCards.forEach((card) => {

            if (

                category === "all"

                ||

                card.dataset.category === category

            ) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});


// ===============================
// PREMIUM THEME TOGGLE
// ===============================

const themeToggle =

    document.getElementById(
        "theme-toggle"
    );

const body = document.body;


// LOAD SAVED THEME

if (

    localStorage.getItem("theme")
    === "dark"

) {

    body.classList.add("dark");

}


// TOGGLE THEME

themeToggle.addEventListener(
    "click",
    () => {

        body.classList.toggle("dark");


        // SAVE THEME

        if (

            body.classList.contains(
                "dark"
            )

        ) {

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

        else {

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    });

// ===============================
// ACTIVE NAVBAR LINK
// ===============================

const currentPage =

    window.location.pathname
        .split("/")
        .pop();


const navbarLinks =

    document.querySelectorAll(
        ".nav-links a"
    );


navbarLinks.forEach((link) => {

    const linkPage =
        link.getAttribute("href");


    if (

        (currentPage === ""

            &&

            linkPage === "index.html")

        ||

        (linkPage === currentPage)

    ) {

        link.classList.add("active");

    }

});


// ===============================
// CART COUNT BADGE
// ===============================

function updateCartCount() {

    const cartCount =

        document.getElementById(
            "cart-count"
        );


    if (!cartCount) return;


    const cartData =

        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    let totalQuantity = 0;


    cartData.forEach((item) => {

        totalQuantity +=
            item.quantity || 1;

    });


    cartCount.innerText =
        totalQuantity;

}


// INITIAL CALL

updateCartCount();