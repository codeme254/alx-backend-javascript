const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", function () {
  const spy = sinon.spy(Utils);
  sendPaymentRequestToApi(100, 20);
  expect(spy.calculateNumber.calledWith("SUM", 100, 20)).to.be.true;
  expect(spy.calculateNumber.callCount).to.equal(1);
  spy.calculateNumber.restore();
});
