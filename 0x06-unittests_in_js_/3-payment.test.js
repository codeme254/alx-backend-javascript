const sinon = require("sinon");
const Utils = require("./utils");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./3-payment");

// By using sinon.spy, make sure the math used for
// sendPaymentRequestToApi(100, 20)
// is the same as Utils.calculateNumber('SUM', 100, 20)
// (validate the usage of the Utils function)
describe("sendPaymentRequestToApi", () => {
  // validate the usage of the Utils function
  const spy = sinon.spy(Utils);
  sendPaymentRequestToApi(500, 600);
  expect(spy.calculateNumber.calledWith("SUM", 500, 600)).to.be.true;
  expect(spy.calculateNumber.callCount).to.be.equal(1);
  spy.calculateNumber.restore();
});
