import { useEffect, useState } from "react";
import { getAutomations } from "../../api/mockApi";

function AutomatedForm({ data, onChange }) {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    getAutomations().then(setActions);
  }, []);

  const selectedAction = actions.find((a) => a.id === data.action);

  return (
    <>
      <select
        value={data.action || ""}
        onChange={(e) => onChange("action", e.target.value)}
      >
        <option value="">Select Action</option>
        {actions.map((a) => (
          <option key={a.id} value={a.id}>
            {a.label}
          </option>
        ))}
      </select>

      {selectedAction &&
        selectedAction.params.map((param) => (
          <input
            key={param}
            placeholder={param}
            value={data[param] || ""}
            onChange={(e) => onChange(param, e.target.value)}
          />
        ))}
    </>
  );
}

export default AutomatedForm;