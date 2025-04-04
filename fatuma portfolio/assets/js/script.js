
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const resultElement = document.createElement("p"); // Create a paragraph element to display the result
    form.appendChild(resultElement); // Append the result element to the form
  
    form.addEventListener("submit", async function(event) {
      event.preventDefault();
      resultElement.textContent = "Sending...."; // Display "Sending..." message
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3a0964f5-b75c-48a4-8026-fbf7c870b595");
  
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
  
        const data = await response.json();
  
        if (data.success) {
          resultElement.textContent = "Form Submitted Successfully";
          form.reset(); // Reset the form
        } else {
          console.log("Error", data);
          resultElement.textContent = data.message; // Display the error message
        }
      } catch (error) {
        console.error("Request failed", error);
        resultElement.textContent = "An error occurred. Please try again."; // Display a generic error message
      }
    });
  });
  