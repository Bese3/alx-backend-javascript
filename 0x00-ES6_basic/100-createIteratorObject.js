export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const org of Object.values(report)) {
    for (const employee of Object.values(org)) {
      allEmployees.push(...employee);
    }
  }
  return {
    [Symbol.iterator]() {
      let count = 0;
      return {
        next() {
          if (count < allEmployees.length) {
            const val = { done: false, value: allEmployees[count] };
            count += 1;
            return val;
          }
          return { done: true, value: allEmployees[count] };
        },
      };
    },
  };
}
