const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id response for non int', function(done) {
    request.get(`${API_URL}/cart/hello/`, (_err, res, _bod) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    })
  })

  it('GET /cart/:id response for negative', function(done) {
    request.get(`${API_URL}/cart/-5`, (_err, res, _bod) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    })
  })

  it('GET /cart/:id response for positive', function(done) {
    request.get(`${API_URL}/cart/2`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 2');
      done();
    })
  })
});
