document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const data = new URLSearchParams();
    data.append("name", name);
    data.append("email", email);
    data.append("message", message);

    fetch(
      "https://script.google.com/macros/s/AKfycbyKubJ5jUOdyVAd00LgeVcSG0JITOz9ZfV6bzXM4xhA1r_VcJLpHRSPAAmYcK9FokEo/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        alert("Message sent! Thank you for contacting me.");
        document.getElementById("contact-form").reset(); // Clear the form
      })
      .catch((error) => {
        console.error("Error!", error.message);
        alert("There was an error sending your message. Please try again.");
      });
  });
