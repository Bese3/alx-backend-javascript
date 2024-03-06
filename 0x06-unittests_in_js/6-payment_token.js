
function getPaymentTokenFromAPI(success) {
  if (success) {
    return new Promise((res, _rej) => {
      res({
        data: 'Successful response from the API'
      });
    })
  }
}

module.exports = getPaymentTokenFromAPI;
