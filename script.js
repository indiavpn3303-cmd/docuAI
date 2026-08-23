function generateDocument() {
  const input = document.getElementById("input").value.trim();
  const type = document.getElementById("documentType").value;

  const result = document.getElementById("result");
  const output = document.getElementById("output");

  if (!input) {
    alert("Please enter some text first.");
    return;
  }

  let generated = "";

  if (type === "professional") {
    generated =
      "PROFESSIONAL DOCUMENT\n\n" +
      input +
      "\n\nThis content has been organized into a professional document.";
  }

  if (type === "summary") {
    generated =
      "SUMMARY\n\n" +
      input +
      "\n\nKey information has been extracted and organized for easier reading.";
  }

  if (type === "email") {
    generated =
      "EMAIL DRAFT\n\n" +
      "Subject: " +
      input.slice(0, 50) +
      "\n\nDear Sir/Madam,\n\n" +
      input +
      "\n\nBest regards,\n";
  }

  if (type === "notes") {
    generated =
      "CLEAN NOTES\n\n" +
      "• " +
      input.replace(/\n/g, "\n• ");
  }

  if (type === "todo") {
    generated =
      "TO-DO LIST\n\n" +
      "☐ Review the following information\n" +
      "☐ Organize the important points\n" +
      "☐ Complete the required tasks\n\n" +
      input;
  }

  output.textContent = generated;
  result.style.display = "block";

  result.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


function copyResult() {
  const output = document.getElementById("output").innerText;

  navigator.clipboard.writeText(output);

  alert("Copied to clipboard!");
}