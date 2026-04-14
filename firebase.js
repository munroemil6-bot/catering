import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "royal-events-1a659.firebaseapp.com",
  projectId: "royal-events-1a659",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };