"use stric";
import { showMessage } from "./helpers/function";
import { sendMessage } from "./telegram";

const form = document.querySelector("#contactForm");
console.log(form);
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    address: form.address.value.trim(),
    city: form.city.value.trim(),
    subject: form.subject.value.trim(),
    message: form.message.value.trim(),
  };
  if (
    !data.name ||
    !data.email ||
    !data.phone ||
    !data.message ||
    !data.subject
  ) {
    showMessage("error", "Please fill in all required fields.");
    return;
  }
  try {
    const html = `<b>Name: </b> ${data.name} \n<b>Phone: </b> ${data.phone} \n<b>Address: </b> ${data.address} \n<b>City: </b> ${data.city} \n<b>Subject: </b> ${data.subject} \n<b>Message: </b> ${data.message}`;
    const text = `<u>New Message:</u> \n \n${html}`;
    const res = await sendMessage(text, "HTML");
    if (res.ok) {
      showMessage("success", "Message sent successfully");
      form.reset();
    } else {
      showMessage("error", "Failed to send message. Please try again.");
    }
  } catch (e) {
    showMessage("error", e.message);
    console.error("Error:", e);
  }
});
