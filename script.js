async function generateDocument() {
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
  output.textContent = "Generating your document...";

  try {
    const response = await fetch(
      "https://docu-ai-phi.vercel.app/api/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          input: input,
          type: type
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    output.textContent = data.content;
  } catch (error) {
    console.error(error);
    output.textContent = "Unable to generate document.";
    alert(error.message);
  } finally {
    button.disabled = false;
    button.textContent = "Generate with AI ✦";

    result.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
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