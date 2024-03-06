const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');


describe('sendPaymentRequestToApi', function() {
  it('sending request', function() {
    const stub = sinon.stub(Utils, 'calculateNumber');
    const spy = sinon.spy(console, 'log');
    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    // expect(stub.returnValues === 10).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;
    expect(spy.calledOnce).to.be.true;
    stub.restore();

  })
})
