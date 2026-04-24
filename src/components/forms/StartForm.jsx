function StartForm({ data, onChange }) {
  return (
    <>
      <input
        placeholder="Start Title"
        value={data.title || ""}
        onChange={(e) => onChange("title", e.target.value)}
      />
    </>
  );
}

export default StartForm;