export default function EndNode({ data }) {
  return (
    <div style={boxStyle("pink")}>
      <strong>End</strong>
      <div>{data.message || "Done"}</div>
    </div>
  );
}

const boxStyle = (bg) => ({
  padding: 10,
  borderRadius: 8,
  background: bg,
});