import React from 'react';
import PropTypes from 'prop-types';
import CheckoutStepper from './CheckoutStepper';



/**
   * @class Modal
   * @param {*} event - form event
   */
export class CheckoutModal extends React.Component {
  state = {
    regions: null,
    countryList: null,
    fullname: '',
    address1: '',
    address2: '',
    city: '',
    states: '',
    zipCode: '',
    country: '',
    shippingId: '',
    shippingType: '',
    shippingRegionId: '',
    shippings: null,
    errors: {},
    error: {},
    update: false,
    payed: false,
  };

  componentDidMount = () => {
  }

  /**
     *
     * @param {*} prevProps previous props
    * @param {*} prevState previous state
    * @returns {*} Updated cart object
    */
   componentDidUpdate = (prevProps, prevState) => {
  
   }

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

CheckoutModal.propTypes = {
  hideModalCheckout: PropTypes.func,
  getUserInfo: PropTypes.func,
  getCountries: PropTypes.func,
  getRegions: PropTypes.func,
  updateProfile: PropTypes.func,
  handleToken: PropTypes.func,
  cart: PropTypes.shape({})
};


export default CheckoutModal;
