/**
  This component display the order confirmation message after payment,
  You can customize things on this page, but the the default HTML IDs should be left untouched
*/
import React, { Component } from 'react';

/**
 * @class OrderConfirmation
 */
export default class OrderConfirmation extends Component {

  /**
     * @returns {*} jsx
     */
  render() {
    return (
      <div id="finish" className="mt-4 mb-4 mx-auto text-center">
        <img
          src="https://res.cloudinary.com/cwizard/image/upload/v1552252411/Turing/iconfinder_Checkmark_1891021.png" // eslint-disable-line
          alt="Success"
        />
        <h1 id="finishStatus">Success!</h1>
        <p className="text-center">
        Your item will be shipped shortly, check your inbox or spam for confirmation email
        </p>
        <button
          type="button"
          data-dismiss="modal"
          className="register-button checkout ml-2"
        >
          Back to shop

        </button>
      </div>
    );
  }
}
