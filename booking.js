import { db } from "./firebase.js";
import { collection, addDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("bookingForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const booking = {
    name: document.getElementById("name").value,
    date: document.getElementById("date").value
  };

  await addDoc(collection(db, "bookings"), booking);

  alert("Booking saved!");
});