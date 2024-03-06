const sinon = require('sinon')
const chai =require('chai')
const expect = chai.expect
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment')


describe('sendPaymentRequestToApi', function() {
  it('sending payment request', function() {
    const spy = sinon.spy(Utils)
    sendPaymentRequestToApi(100, 20)
    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calculateNumber.calledOnce).to.be.true;
    spy.calculateNumber.restore();
  })
})