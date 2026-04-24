import Canvas from "./components/Canvas";
import Sidebar from "./components/Sidebar";
import SimulatorPanel from "./components/SimulatorPanel";
import NodeFormPanel from "./components/NodeFormPanel";
import { WorkflowProvider } from "./hooks/useWorkflow";

function App() {
  return (
    <WorkflowProvider>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Canvas />
        <NodeFormPanel />
        <SimulatorPanel />
      </div>
    </WorkflowProvider>
  );
}

export default App;