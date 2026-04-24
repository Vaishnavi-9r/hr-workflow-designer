import { useWorkflow } from "../hooks/useWorkflow";
import { useRef } from "react";

function Sidebar() {
  const { setNodes } = useWorkflow();

  // useRef keeps value between renders ✅
  const yPosition = useRef(0);

  const addNode = (type) => {
    console.log("Adding node:", type);
    yPosition.current += 80;

    setNodes((nds) => [
      ...nds,
      {
        id: Date.now().toString(),
        type,
        position: { x: 200, y: yPosition.current },
        data: { title: "" },
      },
    ]);
  };

  return (
    <div style={{ width: 200, padding: 10, borderRight: "1px solid gray" }}>
      <h4>Nodes</h4>

      <button onClick={() => addNode("start")}>Start</button>
      <button onClick={() => addNode("task")}>Task</button>
      <button onClick={() => addNode("approval")}>Approval</button>
      <button onClick={() => addNode("automated")}>Automated</button>
      <button onClick={() => addNode("end")}>End</button>
    </div>
  );
}

export default Sidebar;