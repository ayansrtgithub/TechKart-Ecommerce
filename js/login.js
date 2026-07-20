const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Login Successful!");

    localStorage.setItem(

        "user",

        JSON.stringify({

            name: "Ayan Kundu",

            email: "ayan@gmail.com"

        })

    );


    // REDIRECT TO PROFILE

    window.location.href = "profile.html";

});