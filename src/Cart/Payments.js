/**
  This component should display the stripe payment form,
  Currently, we use normal HTML form, you can use react stripe card components for the payment form,
  but ensure you use our Input name and HTML id
  Integrate stripe payment logic in this component to make the payment work.
  On the checkout stepper, Next button should be hidden on this page and after successful payment, the stepper
  should automatically go to Order confirmation/Finish step displaying the success or error message
*/
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
