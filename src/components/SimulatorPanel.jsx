import { useState } from "react";
import { useWorkflow } from "../hooks/useWorkflow";
import { simulateWorkflow } from "../api/mockApi";
import { validateWorkflow } from "../utils/validation";

function SimulatorPanel() {
  const { nodes } = useWorkflow();
  const [logs, setLogs] = useState([]); // ✅ FIX

  const runSimulation = async () => {
    const validation = validateWorkflow(nodes);

    if (validation !== "Valid") {
      alert(validation);
      return;
    }

    const result = await simulateWorkflow({ nodes });
    setLogs(result); // ✅ store logs
  };

  return (
    <div style={{ width: 250, padding: 10, borderLeft: "1px solid gray" }}>
      <h4>Simulator</h4>

      <button onClick={runSimulation}>Run</button>

      <div style={{ marginTop: 10 }}>
        {logs.map((log, i) => (
          <div key={i}>
            Step {log.step}: {log.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimulatorPanel;