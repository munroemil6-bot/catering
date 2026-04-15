import { db } from "./firebase.js";
import { collection, addDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const form = document.getElementById("bookingForm");
const message = document.getElementById("topMessage");

message.style.display = "none";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const booking = {
    name: form.name.value,
    email: form.email.value,
    date: form.date.value,
    guests: form.guests.value,
    service: form.dataset.service
  };

  console.log("Booking:", booking);

  try {
    await addDoc(collection(db, "bookings"), booking);

    message.style.display = "block";
    message.style.backgroundColor = "green";
    message.innerText = `${booking.name} booked successfully!`;

    form.reset();

    setTimeout(() => {
      message.style.display = "none";
    }, 3000);

  } catch (error) {
    console.error(error);

    message.style.display = "block";
    message.style.backgroundColor = "red";
    message.innerText = "Booking failed. Try again.";

    setTimeout(() => {
      message.style.display = "none";
    }, 3000);
  }
});

const refreshBtn = document.getElementById("refreshBtn");

refreshBtn.addEventListener("click", () => {
  location.reload();
});
