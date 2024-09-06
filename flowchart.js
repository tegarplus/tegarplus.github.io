async function getFlowcharts() {
  const diagrams = [
    { title: "Simple Flowchart", filename: "flowchart" },
    { title: "Advance Flowchart", filename: "flowchart2" },
    { title: "Styled Flowchart", filename: "flowchart3" },
    { title: "Styled Flowchart with Class", filename: "flowchart4" },
    { title: "Interactive Flowchart", filename: "flowchart5" },
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

async function drawFlowchart(container) {
  const diagrams = await getFlowcharts();

  const syntaxContainer = document.getElementById("syntax-container");

  diagrams.forEach((diagram) => {
    const divDiagramBlock = document.createElement("div");
    divDiagramBlock.innerHTML = `<h3>${diagram.title}</h3><div class="mermaid">${diagram.definition}</div>`;
    container.appendChild(divDiagramBlock);

    const divSyntaxBlock = document.createElement("div");
    divSyntaxBlock.innerHTML = `<h3>${diagram.title}</h3><pre>${diagram.definition}</pre>`;
    syntaxContainer.appendChild(divSyntaxBlock);
  });

  mermaid.run({ querySelector: ".mermaid" });
  updateDiagramTitle("flowchart");
}

function flowchartCallback(message) {
  console.log(message);
  alert(message);
}
