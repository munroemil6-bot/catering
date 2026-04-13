// FORM SUBMIT + AUTO REFRESH
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Thank you! Royal Events will contact you soon.");

  // Refresh after short delay (better UX)
  setTimeout(() => {
    location.reload();
  }, 1000); // 1 second delay
});


// SEPARATE REFRESH BUTTON
document.getElementById("refreshBtn").addEventListener("click", function() {
  location.reload();
});