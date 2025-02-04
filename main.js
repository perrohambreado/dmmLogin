const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector("#btnSubmit");

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const emailll = "perrohambreado@gmail.com";
const passworddd = "muyhambreado";

btn.addEventListener("click", function (event) {
    event.preventDefault();

    let isValid = true;

    // email
    if (email.value.trim() === "") {
        isValid = false;
        email.classList.add("errorField");
        alert("Type an email");
    } else if (!emailRegex.test(email.value)) {
        isValid = false;
        email.classList.add("errorField");
        alert("Type a valid email");
    } else if ((email.value.trim() !== emailll)) { 
        isValid = false;
        email.classList.add("errorField");
        alert("Email not registered");
    } else {
        email.classList.remove("errorField");
    }

    // password
    if (password.value.trim() === "" || password.value.length < 8) {
        isValid = false;
        password.classList.add("errorField");
        alert("Password must have at least 8 characters");
    } else if (password.value.trim() !== passworddd)  {
        isValid = false;
        password.classList.add("errorField");
        alert("Wrong password");
    } else {
        password.classList.remove("errorField");
    }

    if (isValid) {
        alert("Welcome back");
    }
});

email.addEventListener("keyup", function() {
    email.classList.remove("errorField");
});

password.addEventListener("keyup", function() {
    password.classList.remove("errorField");
});
