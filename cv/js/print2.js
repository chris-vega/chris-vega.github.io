// Select the button element
const pdfButton = document.getElementById("pdf-button");

// Add a click event listener to the button
pdfButton.addEventListener("click", function () {
  // Select the HTML element to convert to PDF
  const htmlElement = document.documentElement;

  // Set up the options for PDF generation
  const options = {
    margin: 10,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // Use html2pdf library to generate PDF
  html2pdf().set(options).from(htmlElement).save();
});