function EndForm({ data, onChange }) {
  return (
    <>
      <input
        placeholder="End Message"
        value={data.message || ""}
        onChange={(e) => onChange("message", e.target.value)}
      />

      <label>
        Summary:
        <input
          type="checkbox"
          checked={data.summary || false}
          onChange={(e) => onChange("summary", e.target.checked)}
        />
      </label>
    </>
  );
}

export default EndForm;