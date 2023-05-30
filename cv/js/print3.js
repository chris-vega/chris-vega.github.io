// Select the button element
const pdfButton = document.getElementById("pdf-button3");

// Add a click event listener to the button
pdfButton.addEventListener("click", function () {
  // Call the print function to open the print dialog
  window.print();
});