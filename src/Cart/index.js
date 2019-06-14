/**
    This is the Cart component for /cart page, it also display the Checkout button
 * This component is just pure HTML and CSS with no functionality, the completed component should 
  perform the following function:
  1. Display Item in the cart if there is any item and display "Clear cart" button to clear all item in the cart
  2. Should display a message if no item in the cart and a button to go back to shop
  3. Should display checkout button only if the user is logged in and there is item in the cart
  4. Should hide checkout button if a user is not logged in and display the login message with link to login
  NB: Don't change any HTML ID, classNames, HTML names, but you can customise the design to your taste using our
    predefined ID, classNames and names
 */

import React, { Component } from 'react';
import { withToastManager } from 'react-toast-notifications';
import Navbar from '../Navbar';
import { Table } from 'reactstrap';
import './styles.scss';
import CheckoutModal from './CheckoutModal';

export class Cart extends Component {

  render() {
    const { history } = this.props;
    return (
      <div id="cart">
        <Navbar history={history} />
          <div style={{ textAlign: 'center', marginTop: 150 }}>
            <p style={{ fontSize: 25 }}>You have no items in cart</p>
            <button className="back-to-shop"
          >
              Back to Shop
            </button>
            <button
              data-toggle="modal"
              data-target="#exampleModalLong"
              type="button"
              className="btn btn-primary text-uppercase checkout"
            >
              Checkout
                  </button>
                  <CheckoutModal />
          </div>
            <div className="product-in-cart-wrapper">
              <p>
                1 item(s) in cart
              </p>
              <button>
                Clear Cart
              </button>
            </div>
          <div style={{ marginTop: "20px" }}>
          <Table>
        <thead>
          <tr>
            <th className="header-styles">Item</th>
            <th className="header-styles">Size</th>
            <th className="header-styles">Color</th>
            <th className="header-styles">Quantity</th>
            <th className="header-styles">Price</th>
          </tr>
        </thead>
        <tbody>
        {
            <tr>
              <td>
              <div style={{ display: 'flex' }}>
              <img
                  src={require(`../assets/product_images/alsace.gif`)}
                  alt=""
                  style={{
                    height: 80,
                    width: 80
                  }}
                />
                <div style={{ marginLeft: 15 }}>
                  <p className="cart-item-title" style={{ fontFamily: 'Montserrat' }}>Alsace</p>
                  <i
                    className="fas fa-times cart-item-remove" style={{ color: 'red', marginRight: 10, cursor: 'pointer' }}
                  >
                  </i>
                  <span style={{ fontFamily: 'Montserrat', fontSize: 14 }}>Remove</span>
                </div>
                </div>
              </td>
              <td className="cart-item-size" style={{ fontFamily: 'Montserrat' }}>XL</td>
              <td className="cart-item-color" style={{ fontFamily: 'Montserrat' }}>White</td>
              <td style={{ display: 'flex' }}>
                <div className="decrement">
                  <p
                    className="decrease-quantity"
                  >
                    -
                  </p>
                </div>
                <p style={{
                  backgroundColor: '#FFF',
                  borderStyle: 'solid',
                  borderWidth: 'thin',
                  borderColor: '#D3D3D3',
                  borderRadius: '50%',
                  width: 30,
                  textAlign: 'center',
                  marginTop: -3,
                  fontFamily: 'Montserrat'
                }}
                className="cart-item-quantity"
                >1</p>
                <div className="increment">
                  <p
                    className="increase-quantity"
                  >
                    +
                  </p>
                </div>
              </td>
              <td className="cart-item-price" style={{ fontFamily: 'Montserrat' }}>$24.50</td>
            </tr>
        }
        <tr>
          <td>
            Total
          </td>
          <td id="cartTotalPriceValue">
            $ 25.50
          </td>
        </tr>
        </tbody>
      </Table>
          </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <button className="back-to-shop"
            onClick={() => history.push('/')}
          >
            Back to shop
          </button>
          <p onClick={() => history.push('/login')} className="login-to-checkout">Log in to proceed to checkout</p>
        </div>
      </div>
    )
  }
}

const CartWithToast = withToastManager(Cart);

export default CartWithToast;
