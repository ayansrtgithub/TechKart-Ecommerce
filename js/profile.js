// ===============================
// GET USER
// ===============================

const user =

    JSON.parse(
        localStorage.getItem("user")
    );


// PROFILE CONTAINER

const profileContainer =

    document.getElementById(
        "profile-container"
    );


// ===============================
// USER NOT LOGGED IN
// ===============================

if (!user) {

    profileContainer.innerHTML = `

<div class="login-required">

<h2>

Please Login First

</h2>

<p>

Login to access your dashboard

</p>

<a href="login.html" class="btn">

Login

</a>

</div>

`;

}


// ===============================
// USER LOGGED IN
// ===============================

else {


    // GET DATA

    const orders =JSON.parse(localStorage.getItem("orders") ) || [];


    const wishlist = JSON.parse(localStorage.getItem("wishlist") ) || [];


    const cart =

        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    // TOTAL SPENT

    let totalSpent = 0;


    orders.forEach((order) => {

        totalSpent += parseInt(

            order.price.replace(
                /[^0-9]/g,
                ""
            )

        );

    });


    // LAST 3 ORDERS

    const latestOrders =

        orders.slice(-3).reverse();


    // PROFILE HTML

    profileContainer.innerHTML = `

<div class="profile-card">

<img
src="https://i.pravatar.cc/300"
class="profile-img"
>

<h2>

${user.name}

</h2>

<p>

${user.email}

</p>

<button class="btn logout-btn">

Logout

</button>

</div>


<div class="profile-info">

<h2>

Dashboard

</h2>


<div class="stats-grid">

<div class="stat-card">

<h3>${orders.length}</h3>

<p>Orders</p>

</div>


<div class="stat-card">

<h3>${wishlist.length}</h3>

<p>Wishlist</p>

</div>


<div class="stat-card">

<h3>${cart.length}</h3>

<p>Cart Items</p>

</div>


<div class="stat-card">

<h3>

₹${(totalSpent / 100000).toFixed(1)}L

</h3>

<p>Total Spent</p>

</div>

</div>


<div class="recent-orders">

<h2>

Recent Orders

</h2>


${latestOrders.map(order => `

<div class="recent-order-card">

<div>

<h4>${order.name}</h4>

<p>

${order.status}
on
${order.date}

</p>

</div>

<span class="${order.status.toLowerCase()}">

${order.status}

</span>

</div>

`).join("")}


<a href="orders.html" class="btn">

View All Orders

</a>


<a href="admin.html" class="btn">

Admin Dashboard

</a>

</div>

</div>

`;


    // ===============================
    // LOGOUT
    // ===============================

    const logoutBtn =

        document.querySelector(
            ".logout-btn"
        );


    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem("user");

        window.location.reload();

    });

}