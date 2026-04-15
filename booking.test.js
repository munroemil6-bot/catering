(function () {

function validateBooking(booking) {
  return (
    typeof booking.name === "string" &&
    booking.name.trim().length > 0 &&
    typeof booking.date === "string" &&
    booking.date.trim().length > 0
  );
}

let allPassed = true;

function test(condition, message) {
  if (!condition) {
    console.error("❌", message);
    allPassed = false;
  }
}

// TEST CASES
test(validateBooking({ name: "John", date: "2026" }), "Valid booking failed");
test(!validateBooking({ name: "", date: "2026" }), "Empty name should fail");
test(!validateBooking({ name: "Jane", date: "" }), "Empty date should fail");

if (allPassed) {
  console.log("✅ All Unit Tests Passed");
}

})();