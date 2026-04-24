export const validateWorkflow = (nodes, edges) => {
  const hasStart = nodes.some(n => n.type === "start");
  const hasEnd = nodes.some(n => n.type === "end");

  if (!hasStart) return "Missing Start Node";
  if (!hasEnd) return "Missing End Node";

  if (edges.length === 0) return "Connect nodes to form workflow";

  return "Valid";
};