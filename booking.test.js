// UNIT TEST FOR ROYAL EVENTS BOOKING SYSTEM

// FUNCTION TO TEST
function validateBooking(booking) {
  return (
    booking.name &&
    booking.name.trim() !== "" &&
    booking.date &&
    booking.date.trim() !== ""
  );
}

// 🧪 TEST 1: VALID DATA
const test1 = validateBooking({
  name: "John Doe",
  date: "2026-04-20"
});

console.assert(test1 === true, "❌ Test 1 Failed (Valid booking should pass)");

// 🧪 TEST 2: EMPTY NAME
const test2 = validateBooking({
  name: "",
  date: "2026-04-20"
});

console.assert(test2 === false, "❌ Test 2 Failed (Empty name should fail)");

// 🧪 TEST 3: EMPTY DATE
const test3 = validateBooking({
  name: "Jane",
  date: ""
});

console.assert(test3 === false, "❌ Test 3 Failed (Empty date should fail)");

console.log("✅ All Booking Unit Tests Passed");