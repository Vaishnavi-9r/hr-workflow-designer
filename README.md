 HR Workflow Designer

A mini visual workflow builder for HR processes built using **React + React Flow**.
This application allows users to design, configure, and simulate workflows like onboarding, approvals, and automated actions.

 Features
 Workflow Canvas

* Interactive canvas using React Flow
* Add multiple node types:

  * Start Node
  * Task Node
  * Approval Node
  * Automated Node
  * End Node
* Connect nodes visually using edges

 Node Configuration Panel

* Dynamic form for each node type
* Real-time updates reflected in UI
* Controlled components for better state handling

 ⚙️ Workflow Simulation

* Simulates workflow execution step-by-step
* Displays execution logs in a timeline format


Validation

* Ensures workflow has:

  * Start node
  * End node
* Prevents invalid execution
 Architecture

The project follows a modular and scalable structure:

```
src/
 ├── components/
 │    ├── Canvas.jsx
 │    ├── Sidebar.jsx
 │    ├── NodeFormPanel.jsx
 │    ├── SimulatorPanel.jsx
 │
 │    ├── nodes/
 │    │     ├── StartNode.jsx
 │    │     ├── TaskNode.jsx
 │    │     ├── ApprovalNode.jsx
 │    │     ├── AutomatedNode.jsx
 │    │     ├── EndNode.jsx
 │    │     └── nodeTypes.js
 │
 │    ├── forms/
 │    │     ├── StartForm.jsx
 │    │     ├── TaskForm.jsx
 │    │     ├── ApprovalForm.jsx
 │    │     ├── AutomatedForm.jsx
 │    │     └── EndForm.jsx
 │
 ├── hooks/
 │    └── useWorkflow.jsx
 │
 ├── api/
 │    └── mockApi.js
 │
 ├── utils/
 │    └── validation.js



Open in browser:

```
http://localhost:5173
```

 Key Design Decisions

* Used **React Context API** for global state management
* Separated node UI and form logic for scalability
* Implemented **dynamic forms** for different node types
* Used mock APIs to simulate backend behavior

 Future Improvements

* Drag-and-drop sidebar
* Undo/Redo functionality
* Workflow save/load (JSON export/import)
* Advanced validation (cycle detection)
* UI enhancement using Tailwind or Material UI


