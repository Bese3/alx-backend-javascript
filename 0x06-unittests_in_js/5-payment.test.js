const sinon = require('sinon')
const { expect } = require('chai')
const sendPaymentRequestToApi = require('./5-payment')
const Utils = require('./utils')


describe('sendPaymentRequestToApi', function () {
  let spy;
  beforeEach(function() {
    if (!spy) {
      spy = sinon.spy(console, 'log');
    }
  })

  afterEach(function() {
    spy.resetHistory();
  })

  after(function() {
    spy.restore();
  })

  it('send request API with arg(100, 20)', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 120')).to.be.true;
  })

  it('send request API with arg(10, 10)', function() {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 20')).to.be.true;
  })

})