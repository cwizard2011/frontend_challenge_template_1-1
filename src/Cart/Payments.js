import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';


/**
 * @class Payments
 */
class Payments extends Component {
  /**
     * @returns {*} jsx
     */
  render() {
    return (
      <div id="payment">
      <Form>
          <FormGroup>
            <Label for="exampleEmail">Card Number <span className="required-field-style">*</span></Label>
            <Input
              type="text"
              name="cardnumber"
              placeholder="Card Number"
              />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Expiry Date <span className="required-field-style">*</span></Label>
            <Input
              type="month"
              name="exp-date"
              value="2018-05"
              placeholder="Expiry Date"
              />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">CVC <span className="required-field-style">*</span></Label>
            <Input
              type="text"
              name="cvc"
              placeholder="Exp Date"
              />
          </FormGroup>
            <button
              id="btnPayment"
              className="btn btn-primary"
            >
                Pay
              </button>
          </Form>
      </div>
    );
  }
}


export default Payments;
