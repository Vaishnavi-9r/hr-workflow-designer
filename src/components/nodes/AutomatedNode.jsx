export default function AutomatedNode({ data }) {
  return (
    <div style={boxStyle("lightblue")}>
      <strong>Auto</strong>
      <div>{data.action || "No Action"}</div>
    </div>
  );
}

const boxStyle = (bg) => ({
  padding: 10,
  borderRadius: 8,
  background: bg,
});