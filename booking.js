import { db } from "./firebase.js";
import { collection, addDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const form = document.getElementById("bookingForm");
const topMessage = document.getElementById("topMessage");

// VALIDATION FUNCTION (USED ALSO IN TEST)
function validateBooking(booking) {
  return (
    typeof booking.name === "string" &&
    booking.name.trim().length > 0 &&
    typeof booking.date === "string" &&
    booking.date.trim().length > 0
  );
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const booking = {
    name: form.name.value,
    email: form.email.value,
    date: form.date.value,
    guests: form.guests.value,
    service: form.dataset.service,
    timestamp: new Date().toISOString()
  };

  console.log("🚀 Booking:", booking);

  // 🧪 VALIDATION CHECK
  if (!validateBooking(booking)) {
    topMessage.innerText = "❌ Invalid booking details";
    topMessage.style.background = "red";
    return;
  }

  try {
    await addDoc(collection(db, "bookings"), booking);

    // ✅ SUCCESS MESSAGE AT TOP
    topMessage.innerText = `✅ ${booking.name} booked successfully!`;
    topMessage.style.background = "green";

    form.reset();

  } catch (error) {
    console.error(error);
    topMessage.innerText = "❌ Booking failed";
    topMessage.style.background = "red";
  }
});