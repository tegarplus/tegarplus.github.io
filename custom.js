function initCustomListener() {
  document.getElementById("custom-input").addEventListener("input", drawCustom);
}

function showCustomInput() {
  document.getElementById("custom-input").style.display = "block";
}

function hideCustomInput() {
  document.getElementById("custom-input").style.display = "none";
}

async function drawCustom() {
  const container = document.getElementById("diagram-container");
  const customInput = document.getElementById("custom-input");
  const mermaidDefinition = customInput.value;
  showCustomInput();

  if (!mermaidDefinition) {
    container.innerHTML = "<p>Enter your Mermaid diagram syntax above.</p>";
    return;
  }

  const isValidMermaid = await mermaid.parse(mermaidDefinition, {
    suppressErrors: true,
  });

  if (!isValidMermaid) {
    container.innerHTML = "<p>Invalid Mermaid diagram syntax.</p>";
    return;
  }

  const syntaxContainer = document.getElementById("syntax-container");
  syntaxContainer.innerHTML = `<pre>${mermaidDefinition}</pre>`;

  let detectedType = "not detected";

  try {
    container.innerHTML = `<div class="mermaid">${mermaidDefinition}</div>`;
    mermaid.run({ querySelector: ".mermaid" });
    detectedType = mermaid.detectType(mermaidDefinition);
  } catch (error) {
    console.error("Error rendering custom diagram:", error);
    container.innerHTML =
      "<p>Error rendering custom diagram. Please check the console for details.</p>";
  }
  updateDiagramTitle(detectedType);
}
