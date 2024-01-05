const guardrail = (mathFunction) => {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(`Error ${error}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
export default guardrail;