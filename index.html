function generateDocument() {
  const input = document.getElementById("input").value.trim();
  const type = document.getElementById("documentType").value;

  const result = document.getElementById("result");
  const output = document.getElementById("output");
  const button = document.querySelector(".options button");

  if (!input) {
    alert("Please enter some text first.");
    return;
  }

  button.disabled = true;
  button.textContent = "Generating...";

  result.style.display = "block";
  output.textContent = "";

  setTimeout(() => {
    let generated = "";

    switch (type) {
      case "professional":
        generated =
          "PROFESSIONAL DOCUMENT\n\n" +
          input +
          "\n\nThis document has been organized into a professional format.";
        break;

      case "summary":
        generated =
          "SUMMARY\n\n" +
          input +
          "\n\nKey information has been organized into a concise summary.";
        break;

      case "email":
        generated =
          "EMAIL DRAFT\n\n" +
          "Subject: " +
          input.slice(0, 60) +
          "\n\nDear Sir/Madam,\n\n" +
          input +
          "\n\nBest regards,";
        break;

      case "notes":
        generated =
          "CLEAN NOTES\n\n" +
          input
            .split("\n")
            .filter(line => line.trim())
            .map(line => "• " + line.trim())
            .join("\n");
        break;

      case "todo":
        generated =
          "TO-DO LIST\n\n" +
          input
            .split("\n")
            .filter(line => line.trim())
            .map(line => "☐ " + line.trim())
            .join("\n");
        break;
    }

    output.textContent = generated;

    button.disabled = false;
    button.textContent = "Generate with AI ✦";

    result.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 700);
}


async function copyResult() {
  const output = document.getElementById("output").innerText;

  if (!output) {
    return;
  }

  try {
    await navigator.clipboard.writeText(output);
    alert("Result copied!");
  } catch (error) {
    alert("Could not copy the result.");
  }
}