document.getElementById("modalApplicationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission.
  
    const name = this.querySelector('input[placeholder="Name"]').value.trim();
    const email = this.querySelector('input[placeholder="Email"]').value.trim();
    const phone = this.querySelector('input[placeholder="Phone"]').value.trim();
    const country = this.querySelector('select').value;
  
    // Reference to the feedback modal elements
    const feedbackModal = new bootstrap.Modal(document.getElementById("feedbackModal"));
    const feedbackMessage = document.getElementById("feedbackMessage");
  
    if (!name || !email || !phone || !country) {
      feedbackMessage.textContent = "Please fill out all required fields!";
      feedbackMessage.style.color = "red";
    } else {
      feedbackMessage.textContent = "Success!";
      feedbackMessage.style.color = "green";
      this.reset(); // Reset form fields.
    }
  
    feedbackModal.show(); // Show the feedback modal.
  });
  