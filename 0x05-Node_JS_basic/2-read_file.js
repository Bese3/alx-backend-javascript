const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    let data = fs.readFileSync(path, 'utf8');
    data = data.split('\n');
    const fieldlist = {};
    for (let i = 1; i < data.length; i += 1) {
      const firstName = data[i].split(',')[0];
      const field = data[i].split(',')[3];
      if (!Object.prototype.hasOwnProperty.call(fieldlist, field)) {
        // eslint-disable-next-line no-continue
        if (field === undefined) continue;
        fieldlist[field] = [];
      }
      fieldlist[field].push(firstName);
    }
    console.log(`Number of Students: ${data.length - 1}`);
    for (const key in fieldlist) {
      if (Object.prototype.hasOwnProperty.call(fieldlist, key)) {
        console.log(`Number of Students in ${key}: ${fieldlist[key].length}. List: ${fieldlist[key]}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
