const sinon = require("sinon");
const Utils = require("./utils");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./4-payment");

// By using sinon.spy, make sure the math used for
// sendPaymentRequestToApi(100, 20)
// is the same as Utils.calculateNumber('SUM', 100, 20)
// (validate the usage of the Utils function)
describe("sendPaymentRequestToApi", () => {
  // validate the usage of the Utils function
  const spy = sinon.spy(console);
  const stub = sinon.stub(Utils, "calculateNumber");

  stub.returns(10);

  sendPaymentRequestToApi(100, 20);
  expect(stub.calledWith("SUM", 100, 20)).to.be.true;
  expect(stub.callCount).to.be.equal(1);

  expect(spy.log.calledWith("The total is: 10")).to.be.true;
  expect(spy.log.callCount).to.be.equal(1);

  spy.log.restore();
  stub.restore();
});
