async function getOrgcharts() {
  const diagrams = [
    { title: "Using graph", filename: "org_chart" },
    { title: "Using class diagram", filename: "org_chart2" },
  ];

  // Use Promise.all to wait for all async operations to complete
  const diagramsWithDefinitions = await Promise.all(
    diagrams.map(async (diagram) => {
      const definition = await getDiagramDefinition(diagram.filename);
      return { ...diagram, definition };
    })
  );

  return diagramsWithDefinitions;
}

async function drawOrgchart(container) {
  const diagrams = await getOrgcharts();

  const syntaxContainer = document.getElementById("syntax-container");

  diagrams.forEach((diagram) => {
    let diagramType = "not detected";
    try {
      diagramType = mermaid.detectType(diagram.definition);
    } catch (error) {
      console.log("Error detecting diagram type:", error);
    }

    const divDiagramBlock = document.createElement("div");
    divDiagramBlock.style.display = "flex";
    divDiagramBlock.style.flexDirection = "column";
    divDiagramBlock.style.gap = "8px";
    divDiagramBlock.innerHTML = `
      <div style="display: flex; gap: 8px; flex-direction: row; align-items: baseline; flex-wrap: wrap;">
        <h3>${diagram.title}</h3>
        <span>(detected as <code>${diagramType}</code>)</span>
      </div>
      <div class="mermaid">${diagram.definition}</div>
    `;
    container.appendChild(divDiagramBlock);

    const divSyntaxBlock = document.createElement("div");
    divSyntaxBlock.innerHTML = `<h3>${diagram.title}</h3><pre>${diagram.definition}</pre>`;
    syntaxContainer.appendChild(divSyntaxBlock);
  });

  mermaid.run({ querySelector: ".mermaid" });
  updateDiagramTitle("-");
}
