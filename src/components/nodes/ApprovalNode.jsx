export default function ApprovalNode({ data }) {
  return (
    <div style={boxStyle("orange")}>
      <strong>Approval</strong>
      <div>{data.title || "Approval Step"}</div>
      <small>{data.role || "No Role"}</small>
    </div>
  );
}

const boxStyle = (bg) => ({
  padding: 10,
  borderRadius: 8,
  background: bg,
});