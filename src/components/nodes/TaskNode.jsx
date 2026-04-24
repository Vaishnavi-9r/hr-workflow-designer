export default function TaskNode({ data }) {
  return (
    <div style={boxStyle("#ddd")}>
      <strong>Task</strong>
      <div>{data.title || "Untitled Task"}</div>
      <small>{data.assignee || "No Assignee"}</small>
    </div>
  );
}

const boxStyle = (bg) => ({
  padding: 10,
  borderRadius: 8,
  background: bg,
  minWidth: 140,
});