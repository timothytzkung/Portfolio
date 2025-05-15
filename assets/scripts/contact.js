
// Javascript for mailing
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent actual form submission

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const recipient = "tim_kung@sfu.ca";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nContact Email: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
});