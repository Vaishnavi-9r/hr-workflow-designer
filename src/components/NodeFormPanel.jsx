import { useWorkflow } from "../hooks/useWorkflow";
import StartForm from "./forms/StartForm";
import TaskForm from "./forms/TaskForm";
import ApprovalForm from "./forms/ApprovalForm";
import AutomatedForm from "./forms/AutomatedForm";
import EndForm from "./forms/EndForm";

function NodeFormPanel() {
  const { selectedNode, nodes, setNodes } = useWorkflow();

  if (!selectedNode) {
    return (
      <div style={{ width: 250, padding: 10 }}>
        <h4>No Node Selected</h4>
      </div>
    );
  }

  const updateNodeData = (key, value) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNode.id
          ? {
              ...node,
              data: {
                ...node.data,
                [key]: value,
              },
            }
          : node
      )
    );
  };

  const formProps = {
    data: selectedNode.data || {},
    onChange: updateNodeData,
  };

  return (
    <div style={{ width: 300, padding: 10, borderLeft: "1px solid gray" }}>
      <h4>Edit Node</h4>

      {selectedNode.type === "start" && <StartForm {...formProps} />}
      {selectedNode.type === "task" && <TaskForm {...formProps} />}
      {selectedNode.type === "approval" && <ApprovalForm {...formProps} />}
      {selectedNode.type === "automated" && <AutomatedForm {...formProps} />}
      {selectedNode.type === "end" && <EndForm {...formProps} />}
    </div>
  );
}

export default NodeFormPanel;