const handleResponseFromAPI = (promise) => {
  promise.then(() => ({
    status: 200,
    body: 'success',
  })).catch(() => {
    console.log(Error());
  }).finally(() => {
    console.log('Got a response from the API');
  });
};
export default handleResponseFromAPI;
