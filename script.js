function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

emailjs.init("0QgxW2j2gsvFFokJd");

const sendBtn = document.querySelector(".sendBtn");
const result = document.querySelector(".result");

sendBtn.addEventListener("click", sendEmail);

function sendEmail() {
    const form = document.querySelector(".contact-left");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    // Get the form data
    const to = "ostrycharzodszkodowania@gmail.com";
    const message = document.getElementById("message").value;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const mail = document.getElementById("mail").value;
    const fullName = name + " " + surname;
    const subject = "Nowa wiadomość od " + fullName + " - Kontakt: " + mail;

    // Check if the fields are completed
    if (name && surname && mail && message !== "") {
        // Send the email using EmailJS
        emailjs.send("service_ikrwart", "template_50f4sgn", {
            to_email: to,
            subject: subject,
            message: message
        }).then(function () {
            result.innerHTML = "Email sent successfully!";
            result.style.opacity = 1;

            // Clear the form fields after successful sending
            document.getElementById("name").value = "";
            document.getElementById("surname").value = "";
            document.getElementById("mail").value = "";
            document.getElementById("message").value = "";
        }, function (error) {
            result.innerHTML = "Email sending failed!";
            result.style.opacity = 1;
        });
    }
}


