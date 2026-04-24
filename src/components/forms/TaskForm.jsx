function TaskForm({ data, onChange }) {
  return (
    <>
      <input
        placeholder="Title"
        value={data.title || ""}
        onChange={(e) => onChange("title", e.target.value)}
      />

      <input
        placeholder="Description"
        value={data.description || ""}
        onChange={(e) => onChange("description", e.target.value)}
      />

      <input
        placeholder="Assignee"
        value={data.assignee || ""}
        onChange={(e) => onChange("assignee", e.target.value)}
      />

      <input
        placeholder="Due Date"
        value={data.dueDate || ""}
        onChange={(e) => onChange("dueDate", e.target.value)}
      />
    </>
  );
}

export default TaskForm;