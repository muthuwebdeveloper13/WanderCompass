// contact form input

const contactFormName = document.getElementById("contact-form-name");
const contactFormEmail = document.getElementById("contact-form-email");
const contactFormSubject = document.getElementById("contact-form-subject");
const contactFormMessage = document.getElementById("contact-form-message");

// contact form error

const contactFormErrorName = document.getElementById("contact-form-error-name");
const contactFormErrorEmail = document.getElementById(
  "contact-form-error-email",
);
const contactFormErrorSubject = document.getElementById(
  "contact-form-error-subject",
);
const contactFormErrorMessage = document.getElementById(
  "contact-form-error-message",
);

const userContactForm = document.getElementById("contact-form-submit");

// validation

const validationForm = userContactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  let contactName = contactFormName.value.trim();
  let contactEmail = contactFormEmail.value.trim();
  let contactSubject = contactFormSubject.value.trim();
  let contactMessage = contactFormMessage.value.trim();
  let contactNamePattern = /^[a-zA-Z]/;
  let contactEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // name validation
  if (contactName === "") {
    contactFormErrorName.innerText = "Please Enter Your Name.";
    contactFormErrorName.classList.add("contact-form-error-name");
    isValid = false;
  } else if (contactName.length < 3) {
    contactFormErrorName.innerText = "Name must contain at least 3 characters";
    contactFormErrorName.classList.add("contact-form-error-name");
    isValid = false;
  } else if (!contactNamePattern.test(contactName)) {
    contactFormErrorName.innerText = "Enter a valid name must have characters";
    contactFormErrorName.classList.add("contact-form-error-name");
    isValid = false;
  } else {
    contactFormErrorName.classList.remove("contact-form-error-name");
  }

  //   email validation
  if (contactEmail == "") {
    contactFormErrorEmail.innerText = "Please Enter your Email.";
    contactFormErrorEmail.classList.add("contact-form-error-email");
    isValid = false;
  } else if (!contactEmailPattern.test(contactEmail)) {
    contactFormErrorEmail.innerText = "Enter valid Email.";
    contactFormErrorEmail.classList.add("contact-form-error-email");
    isValid = false;
  } else {
    contactFormErrorEmail.classList.remove("contact-form-error-email");
  }

  // subject validation
  if (contactSubject === "") {
    contactFormErrorSubject.innerText = "Please Enter Your Subject.";
    contactFormErrorSubject.classList.add("contact-form-error-subject");
    isValid = false;
  } else if (contactSubject.length < 3) {
    contactFormErrorSubject.innerText = "Subject is too short";
    contactFormErrorSubject.classList.add("contact-form-error-subject");
    isValid = false;
  } else {
    contactFormErrorSubject.classList.remove("contact-form-error-subject");
  }

  // Message validation
  if (contactMessage === "") {
    contactFormErrorMessage.innerText = "Please Enter Your Message.";
    contactFormErrorMessage.classList.add("contact-form-error-message");
    isValid = false;
  } else if (contactMessage.length < 10) {
    contactFormErrorMessage.innerText = "Message is too short.";
    contactFormErrorMessage.classList.add("contact-form-error-message");
    isValid = false;
  } else {
    contactFormErrorMessage.classList.remove("contact-form-error-message");
  }

  if (isValid) {
    alert("Message sent successfully.");
  }
});
