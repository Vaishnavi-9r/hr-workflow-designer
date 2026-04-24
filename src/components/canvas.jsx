import ReactFlow, {
  addEdge,
  Background,
  Controls,
} from "reactflow";
import { useCallback } from "react";
import { useWorkflow } from "../hooks/useWorkflow";
import { nodeTypes } from "./nodes/nodeTypes";
const onNodeClick = (_, node) => {
  setSelectedNode(node);

  setNodes((nds) =>
    nds.map((n) => ({
      ...n,
      style:
        n.id === node.id
          ? { border: "2px solid blue" }
          : { border: "1px solid #ccc" },
    }))
  );
};

function Canvas() {
  const {
    nodes,
    setNodes,
    edges,
    setEdges,
    setSelectedNode,
  } = useWorkflow();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onNodeClick = (_, node) => {
    setSelectedNode(node);
  };

  return (
    <div style={{ flex: 1 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Canvas;