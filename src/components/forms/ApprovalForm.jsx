function ApprovalForm({ data, onChange }) {
  return (
    <>
      <input
        placeholder="Title"
        value={data.title || ""}
        onChange={(e) => onChange("title", e.target.value)}
      />

      <input
        placeholder="Approver Role"
        value={data.role || ""}
        onChange={(e) => onChange("role", e.target.value)}
      />

      <input
        type="number"
        placeholder="Auto Approve Threshold"
        value={data.threshold || ""}
        onChange={(e) => onChange("threshold", e.target.value)}
      />
    </>
  );
}

export default ApprovalForm;