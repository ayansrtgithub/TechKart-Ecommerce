let wishlist =
    JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

const container =
    document.getElementById(
        "wishlist-items"
    );

wishlist.forEach((item, index) => {

    const div =
        document.createElement("div");

    div.classList.add(
        "product-card"
    );

    div.innerHTML = `

<img src="${item.image}">

<h3>${item.name}</h3>

<p>${item.price}</p>

<button
class="remove-wishlist"
onclick="removeWishlist(${index})">

Remove

</button>

`;

    container.appendChild(div);

});

function removeWishlist(index) {

    wishlist.splice(index, 1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    location.reload();

}