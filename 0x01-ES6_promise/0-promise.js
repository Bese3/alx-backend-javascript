export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    const x = 0;
    if (x === 0) {
      resolve('Resolved');
    } else {
      reject(Error('Rejected'));
    }
  });
  return myPromise;
}
