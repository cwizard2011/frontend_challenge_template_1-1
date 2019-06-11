import React, { Component } from 'react';
import moment from 'moment';
import Navbar from '../Navbar';
import Spinner from '../Spinner';
import './styles.scss';

class OrderConfirmation extends Component {
  state = {
    productInCart: [],
    total_price: '0.00',
    isLoading: false,
    user: {},
    orderId: '',
    orderDetails: {},
    address: ''
  }

  async componentDidMount() {

  }

  render() {
    const {
      productInCart,
      total_price,
      isLoading,
      address,
      orderDetails: {
        created_on,
        order_id,
        total_amount
      } } = this.state;
    const { history } = this.props;

    if (isLoading) {
      return <Spinner />
    }

    return (
      <div>
        <Navbar
          productIncart={productInCart}
          cartPrice={total_price}
          history={history}
        />
        <div className="confirm-order-container">
          <h2 className="h2-text-confirm">THANK YOU FOR YOUR ORDER!</h2>
          <hr className="hr-line" />
          <p className="send-confirm">We will send a confirmation email once your order has shipped.</p>
          <hr className="divide-hr" />
          <p className="order-number-header">Order Number: #{order_id}</p>
          <div className="order-details-container">
            <div className="order-details-column-header">
              <p className="order-header-row">Order Number:</p>
              <p className="order-values">{order_id}</p>
            </div>
            <div className="order-details-column-header">
              <p className="order-header-row">Order Date</p>
              <p className="order-values">{moment(created_on).format('LL')}</p>
            </div>
            <div className="order-details-column-header">
              <p className="order-header-row">Delivery address</p>
              <p className="order-values">{address}</p>
            </div>
            <div className="order-details-column-header">
              <p className="order-header-row">Total Amount</p>
              <p className="order-values">${total_amount}</p>
            </div>
            <div className="order-details-column-header">
              <p className="order-header-row">Payment Type</p>
              <p className="order-values-stripe">STRIPE</p>
              <p className="order-values">XXXXXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderConfirmation;
