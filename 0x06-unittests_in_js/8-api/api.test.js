const { expect } = require('chai');
const request = require('request');


describe('index page', function() {
  it('get /', function(done) {
    request('http://localhost:7865/', function(err, res, body) {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    })
  })
})