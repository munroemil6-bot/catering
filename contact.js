document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Thank you! Royal Events will contact you soon.");

  setTimeout(() => {
    location.reload();
  }, 1000); // 1 second delay
});


document.getElementById("refreshBtn").addEventListener("click", function() {
  location.reload();
});