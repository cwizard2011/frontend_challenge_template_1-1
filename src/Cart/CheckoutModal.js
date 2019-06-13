/**
  The Checkout modal display the checkout stepper on the Cart page
  This modal should only be displayed if a user is authenticated
  You can customise everything in this file including classNames, IDs and names, no restriction
  to what can be modified in this file for as long as the app works as expected
*/

import React from 'react';
import CheckoutStepper from './CheckoutStepper';


/**
   * @class Modal
   * @param {*} event - form event
   */
export class CheckoutModal extends React.Component {

  /**
   * @description Render the JSX template
   *
   * @memberof CheckoutModal
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
        style={{ overlay: { backgroundColor: 'rgba(0,0,0,0)' } }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header card-title card-header">
              <h2 className="modal-title" id="exampleModalLongTitle">Checkout</h2>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <CheckoutStepper />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default CheckoutModal;
