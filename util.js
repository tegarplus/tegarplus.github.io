function styleSelectedButton(diagramType) {
  const buttons = document.querySelectorAll(".button-container button");
  buttons.forEach((button) => button.classList.remove("fg-accent"));

  const selectedButton = document.getElementById(`btn-${diagramType}`);
  selectedButton.classList.add("fg-accent");
}

async function getDiagramDefinition(filename) {
  const response = await fetch(`diagrams/${filename}.mermaid`);
  return response.text();
}

async function updateDiagramTitle(diagramType) {
  const diagramTypeTitle = document.getElementById("diagram-type");
  diagramTypeTitle.innerText = diagramType;
}

function toast(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);

  // Add styling to the toast
  toast.style.position = "fixed";
  toast.style.top = "80px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.backgroundColor = "#088";
  toast.style.color = "#fff";
  toast.style.padding = "10px";
  toast.style.borderRadius = "5px";
  toast.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
  toast.style.zIndex = "999";
  toast.style.width = "20vw";
  toast.style.padding = "20px";
  toast.style.display = "flex";
  toast.style.justifyContent = "center";
  toast.style.alignItems = "center";

  // Add animation to the toast
  toast.style.animation = "fadein 0.5s, fadeout 0.5s 2.5s";
  toast.style.animationFillMode = "forwards";

  // Define the fadein and fadeout animations
  const styleSheet = document.createElement("style");
  styleSheet.innerHTML = `
    @keyframes fadein {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes fadeout {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `;
  document.head.appendChild(styleSheet);
}
