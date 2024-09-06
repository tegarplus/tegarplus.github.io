async function drawDiagram(container) {
  let detectedType = "not detected";
  try {
    const mermaidDefinition = await getDiagramDefinition(selectedType);
    container.innerHTML = `<div class="mermaid">${mermaidDefinition}</div>`;

    const syntaxContainer = document.getElementById("syntax-container");
    syntaxContainer.innerHTML = `<pre>${mermaidDefinition}</pre>`;

    mermaid.run({ querySelector: ".mermaid" });
    detectedType = mermaid.detectType(mermaidDefinition);
  } catch (error) {
    console.error("Error loading diagram:", error);
    container.innerHTML =
      "<p>Error loading diagram. Please check the console for details.</p>";
  }
  updateDiagramTitle(detectedType);
}

async function viewMode(viewType) {
  if (selectedType === null) {
    alert("Please select a diagram type first.");
    return;
  }
  selectedView = viewType;

  if (viewType === "diagram") {
    showDiagramContainer();
    const diagramContainer = document.getElementById("diagram-container");
    selectDiagram(selectedType);
  } else {
    showSyntaxContainer();
  }
  document.getElementById("btn-view-" + viewType).classList.add("fg-accent");
}

async function copySyntax() {
  if (selectedType === null) {
    alert("Please select a diagram type first.");
    return;
  }

  if (selectedType === "custom") {
    const customInput = document.getElementById("custom-input");
    navigator.clipboard.writeText(customInput.value);
  } else if (selectedType === "flowchart") {
    const flowchartDefinition = await getDiagramDefinition("flowchart");
    navigator.clipboard.writeText(flowchartDefinition);
  } else {
    const mermaidDefinition = await getDiagramDefinition(selectedType);
    navigator.clipboard.writeText(mermaidDefinition);
  }
}

function showDiagramContainer() {
  document.getElementById("btn-view-diagram").classList.remove("fg-accent");
  document.getElementById("btn-view-syntax").classList.remove("fg-accent");

  document.getElementById("syntax-container").style.display = "none";
  document.getElementById("diagram-container").style.display = "block";
}

function showSyntaxContainer() {
  document.getElementById("btn-view-diagram").classList.remove("fg-accent");
  document.getElementById("btn-view-syntax").classList.remove("fg-accent");

  document.getElementById("diagram-container").style.display = "none";
  document.getElementById("syntax-container").style.display = "block";
}
