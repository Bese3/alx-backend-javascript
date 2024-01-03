export default function iterateThroughObject(reportWithIterator) {
  let allEmployees = '';

  for (const employee of reportWithIterator) {
    allEmployees += `${employee} | `;
  }

  return allEmployees.slice(0, -3);
}
