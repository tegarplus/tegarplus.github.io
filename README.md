# Usage

## Selecting a Diagram

- On page load, the default diagram type is set to "flowchart".
- To select a different diagram type, use the provided UI buttons.

## Custom Diagrams

- To create a custom diagram, select the "custom" option.
- Enter your Mermaid diagram syntax in the input field that appears.
- The diagram will be rendered in real-time as you type.

## Viewing Diagram Syntax

- Toggle between diagram view and syntax view using the provided buttons.
- The syntax view displays the Mermaid syntax used to generate the diagram.

## Copying Diagram Syntax

- Use the "Copy Syntax" button to copy the Mermaid syntax to your clipboard.

# Code Overview

## `custom.js`

Contains functions for handling custom Mermaid diagram input and rendering.

- `initCustomListener()`: Initializes the event listener for custom input.
- `showCustomInput()`: Displays the custom input field.
- `hideCustomInput()`: Hides the custom input field.
- `drawCustom()`: Renders the custom Mermaid diagram.

## `flowchart.js`

Handles the loading and rendering of predefined flowcharts.

- `getFlowcharts()`: Fetches the definitions of predefined flowcharts.
- `drawFlowchart(container)`: Renders the flowcharts in the specified container.

## `main.js`

Contains general functions for diagram rendering and view management.

- `drawDiagram(container)`: Renders the selected diagram type.
- `viewMode(viewType)`: Toggles between diagram view and syntax view.
- `copySyntax()`: Copies the current diagram's syntax to the clipboard.
- `showDiagramContainer()`: Displays the diagram container.
- `showSyntaxContainer()`: Displays the syntax container.

## `util.js`
Contains utility functions for button styling, fetching diagram definitions, updating diagram titles, and displaying toast messages.

- `styleSelectedButton(diagramType)`: Styles the selected button based on the diagram type.
- `getDiagramDefinition(filename)`: Fetches the diagram definition from a file.
- `updateDiagramTitle(diagramType)`: Updates the diagram title in the UI.
- `toast(message)`: Displays a toast message with the specified content.

## `index.html`

The main HTML file that sets up the initial UI and includes the necessary scripts.