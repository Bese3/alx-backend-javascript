const handleResponseFromAPI = (promise) => {
  promise.then(() => {
    console.log('Got a response from the API');
  }).catch(() => {
    console.log(Error());
  });
};
export default handleResponseFromAPI;
