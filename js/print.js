// "Print this! (PDF)"" button script

// source
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>

// script
const printButton = document.getElementById("print-button");
printButton.addEventListener("click", () => {
  // Create a new PDF document.
  const pdf = new jsPDF();

  // Get the HTML content of the page.
  const html = document.documentElement.innerHTML;

  // Print the HTML content to the PDF document.
  pdf.fromHTML(html);

  // Save the PDF document.
  pdf.save("2023_Vega-RESUME.pdf");
});