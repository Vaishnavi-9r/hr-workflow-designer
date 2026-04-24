export const getAutomations = async () => {
  return [
    { id: "send_email", label: "Send Email", params: ["to", "subject"] },
    { id: "generate_doc", label: "Generate Document", params: ["template"] },
  ];
};

export const simulateWorkflow = async (workflow) => {
  return workflow.nodes.map((node, i) => ({
    step: i + 1,
    message: `Executed ${node.type}`,
  }));
};