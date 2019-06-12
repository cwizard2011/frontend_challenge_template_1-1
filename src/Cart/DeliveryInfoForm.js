import React, { Component } from 'react';
import axios from 'axios';
import { withToastManager } from 'react-toast-notifications';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Spinner from '../Spinner';
import '../utils/toastrconfig';
import './styles.scss';


export class Checkout extends Component {
  state = {
    productIncart: [],
    total_price: '0.00',
    cartID: '',
    isLoading: false,
    regions: [],
    userObj: {},
    orderId: 0,
    isButtonDisabled: true,
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    const getCartID = await localStorage.getItem('cartId');
    const accessToken = await localStorage.getItem('user');
    if (accessToken) {
      const parsedAccessToken = JSON.parse(accessToken);
      try {
        const retrieveUser = await axios.get('https://backendapi.turing.com/customer', {
          headers: {
            'USER-KEY': `${parsedAccessToken.accessToken}`,
            'Content-type': 'application/json'
          }
        });
        const regionsData = await axios.get('https://backendapi.turing.com/shipping/regions');
        this.setState({ userObj: retrieveUser.data, regions: regionsData.data })
      } catch (error) {
        console.log('error retrieving user', error)
      }
    }
    if (!getCartID) {
      this.setState({ productIncart: [], isLoading: false })
    } else {
      const cartItem = await axios.get(`https://backendapi.turing.com/shoppingcart/${getCartID}`);
      const totalPrice = await axios.get(`https://backendapi.turing.com/shoppingcart/totalAmount/${getCartID}`)
      this.setState({ productIncart: cartItem.data, total_price: totalPrice.data.total_amount, isLoading: false });
    }
  }

  updateUserValue = (event) => {
    
  }

  setRegionAndRegionID = (event) => {
   
  }

  getToken = async(token) => {
    
  }

  validateUserProfile = () => {
    
  }

  render() {
    const {
      isLoading,
      regions,
      userObj: {
        firstname,
        lastname,
        address_1,
        city,
        country,
        postal_code,
      } } = this.state;

    if (isLoading) {
      return <Spinner />
    }

    return (
      <div id="delivery">
        <div className="form-container-billing">
          <h5 className="billing-text">Billing Details</h5>
          <Form>
          <FormGroup>
            <Label for="exampleEmail">First Name <span className="required-field-style">*</span></Label>
            <Input
              value={firstname || ""}
              type="text"
              name="first-name"
              placeholder="First Name"
              onChange={this.updateUserValue}
              />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Last Name<span className="required-field-style">*</span></Label>
            <Input
              value={lastname || ""}
              type="text"
              name="last-name"
              placeholder="Last Name"
              onChange={this.updateUserValue}
              />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Address</Label>
            <Input
              value={address_1 || ""}
              type="text"
              name="address_2"
              id="address_2"
              placeholder="Address 2"
              onChange={this.updateUserValue}
              />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">City <span className="required-field-style">*</span></Label>
            <Input
              value={city || ""}
              type="text"
              name="city"
              id="city"
              placeholder="City"
              onChange={this.updateUserValue}
              />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">State <span className="required-field-style">*</span></Label>
            <Input
              value={city || ""}
              type="text"
              name="state"
              placeholder="State"
              onChange={this.updateUserValue}
              />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Region <span className="required-field-style">*</span></Label>
            <Input
              type="select"
              name="region"
              id="region"
              onChange={this.setRegionAndRegionID}
            >
              {
                regions && regions.map((regional, index) => (
                  <option className="region-option" value={regional.shipping_region_id} key={index}>
                    {regional.shipping_region}
                  </option>
                ))
              }
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Shipping Type <span className="required-field-style">*</span></Label>
            <Input
              type="select"
              name="type"
              id="type"
              onChange={this.setRegionAndRegionID}
            >
              <option className="type-option">Select shipping type</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Postal Code <span className="required-field-style">*</span></Label>
            <Input
              value={postal_code || ""}
              type="text" name="zip" id="postal_code" placeholder="Postal Code" onChange={this.updateUserValue} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Country <span className="required-field-style">*</span></Label>
            <Input
              value={country || ""}
              type="text" name="country" id="country" placeholder="Country" onChange={this.updateUserValue} />
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
