// ===============================
// GET ORDERS
// ===============================

const orders =
    JSON.parse(
        localStorage.getItem("orders")
    ) || [];


// ===============================
// GET CONTAINER
// ===============================

const container =
    document.getElementById(
        "orders-container"
    );


// ===============================
// EMPTY ORDERS
// ===============================

if (orders.length === 0) {

    container.innerHTML = `

<h2 style="text-align:center">

No Orders Yet 📦

</h2>

`;

}


// ===============================
// DISPLAY ORDERS
// ===============================

orders.forEach((item) => {

    const card =
        document.createElement("div");

    card.classList.add(
        "order-card"
    );

    card.innerHTML = `

    <div class="order-info">

    <h3>${item.name}</h3>

    <p>${item.price}</p>

    <p>${item.date}</p>

    </div>

    <div class="
order-status
${item.status.toLowerCase()}
">

${item.status === "Pending"

            ? "📦 Pending"

            :

            item.status === "Processing"

                ? "⏳ Processing"

                :

                item.status === "Shipped"

                    ? "🚚 Shipped"

                    :

                    "✅ Delivered"

        }

</div>

    `;

    container.appendChild(
        card
    );

});