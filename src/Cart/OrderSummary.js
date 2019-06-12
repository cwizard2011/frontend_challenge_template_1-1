import React, { Component } from 'react';


/**
 * @class OrderSummary
 */
export default class OrderSummary extends Component {
  /**
     * @returns {*} jsx
     */
  render() {
    return (
      <div id="confirm">
        <div className="row mt-4">
          <div className="col-md-6">
            <h3>Order Summary</h3>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Items</th>
                    <th scope="col">Size</th>
                    <th scope="col">Color</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                <tr className="order-item">
                  <td className="order-item-title">Rose Flower</td>
                  <td className="order-item-size">XL</td>
                  <td className="order-item-color">White</td>
                  <td id="order-item-price">$30 </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Delivery Address</h3>
            <p><span id="orderFirstName">Peter</span>&nbsp;<span id="orderLastName">Charles,</span>&nbsp;</p>
            <p>
              <span id="orderAddress">No 324 Allen Drive,</span>&nbsp;<span id="orderCity">Seattle,</span>&nbsp;<span id="orderState"> WS,</span>
              &nbsp;<span id="orderCountry">USA.</span>
              &nbsp;<span id="orderZip">101231</span>
            </p>
            <hr />

            <h3>Delivery Option</h3>
            <p id="orderType">Standard free shipping</p>
          </div>
        </div>
        <hr className="mt-4" />
        <div className="row mb-4">
          <div className="col-md-3">
            <p className="font-weight-bold">
            Discount: $ 5
            </p>
          </div>
          <div className="col-md-3">
            <p className="font-weight-bold">
            SubTotal: $ 25
            </p>
          </div>
          <div className="col-md-3">
            <p className="font-weight-bold">
              <span>
            Shipping cost: 0
              </span>
            </p>
          </div>
          <div className="col-md-3">
            <p id="orderGrandPriceValue" className="font-weight-bold">Grand Total: $ 25</p>
          </div>
        </div>
      </div>
    );
  }
}

