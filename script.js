function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    document.getElementById("response").innerHTML =
        "Thank you " + name + "! Your enquiry has been submitted.";

    console.log("User Info:", name, email, message);
}
