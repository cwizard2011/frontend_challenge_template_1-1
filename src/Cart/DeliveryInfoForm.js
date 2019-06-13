/**
  This is the delivery info form, you can customise to achieve your goal.
  DO NOT CHANGE THE DEFAULT IDS AND CLASSNAMES IN THIS FILE
  YOU can use any form component of your choice but ensure you use our IDs, ClassNames and INPUT names, it is recommended
  you use our form with some styling instead of changing the whole form component
*/
import React, { Component } from 'react';
import { withToastManager } from 'react-toast-notifications';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../utils/toastrconfig';
import './styles.scss';


export class Checkout extends Component {

  render() {
    return (
      <div id="delivery">
        <div className="form-container-billing">
          <h5 className="billing-text">Billing Details</h5>
          <Form>
          <FormGroup>
            <Label for="exampleEmail">First Name <span className="required-field-style">*</span></Label>
            <Input
              value=""
              type="text"
              name="first-name"
              placeholder="First Name"
              />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Last Name<span className="required-field-style">*</span></Label>
            <Input
              value=""
              type="text"
              name="last-name"
              placeholder="Last Name"
              />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Address</Label>
            <Input
              value=""
              type="text"
              name="address_2"
              id="address_2"
              placeholder="Address 2"
              />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">City <span className="required-field-style">*</span></Label>
            <Input
              value=""
              type="text"
              name="city"
              id="city"
              placeholder="City"
              />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">State <span className="required-field-style">*</span></Label>
            <Input
              value=""
              type="text"
              name="state"
              placeholder="State"
              />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Region <span className="required-field-style">*</span></Label>
            <Input
              type="select"
              name="region"
              id="region"
            >
            <option className="region-option">Select Region</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Shipping Type <span className="required-field-style">*</span></Label>
            <Input
              type="select"
              name="type"
              id="type"
            >
              <option className="type-option">Select shipping type</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Postal Code <span className="required-field-style">*</span></Label>
            <Input value="" type="text" name="zip" id="postal_code" placeholder="Postal Code" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Country <span className="required-field-style">*</span></Label>
            <Input value="" type="text" name="country" id="country" placeholder="Country" />
          </FormGroup>
          </Form>
          <p style={{ fontSize: 14, color: 'gray' }}><span className="required-field-style">*</span> Required Fields</p>
        </div>
      </div>
    )
  }
}

const CheckoutWithToast = withToastManager(Checkout);

export default CheckoutWithToast;
