export default function StartNode({ data }) {
  return (
    <div style={boxStyle("lightgreen")}>
      <strong>Start</strong>
      <div>{data.title || "No Title"}</div>
    </div>
  );
}

const boxStyle = (bg) => ({
  padding: 10,
  borderRadius: 8,
  background: bg,
  minWidth: 120,
  textAlign: "center",
});