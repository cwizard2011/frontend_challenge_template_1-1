/**
  This component display single product using the product ID
  To complete this component, you need to implement the following:
  - Dynamically render single product detail from the backend
  - Dynamically render product attributes, size and color
  - Hide review form if user is not logged in and display login message
  - Hide login message and Display review form if user is logged in
  - Disable `Add to Cart` button if product is already in the cart
  - Dynamically render product reviews from the backend
  - Add functionality to post review
  - Add functionality to change product size, color and item quantity
  - Take initiatives to customize this component and add live to the page

  NB: YOU CAN STYLE AND CUSTOMISE THIS PAGE, BUT YOU HAVE TO USE OUR DEFAULT CLASSNAME, IDS AND HTML INPUT NAMES
*/
import React, { Component } from 'react';
import { Input, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import StarRatings from 'react-star-ratings';
import Spinner from '../Spinner';
import Navbar from '../Navbar';
import './styles.scss';

export class SingleProduct extends Component {
  state = {
    isLoading: false,
    isModalOpen: false,
  }

  toggleModalVisibility = (isModalOpen) => {
    this.setState({ isModalOpen });
  }

  renderModal = () => {
    const { isModalOpen } = this.state;
    const { history } = this.props;
    return (
      <Modal isOpen={isModalOpen} toggle={() => this.toggleModalVisibility(false)}>
        <ModalHeader>Checkout</ModalHeader>
        <ModalBody>
          Product added to your cart.
        </ModalBody>
        <ModalFooter>
          <button
            style={{
              height: 40,
              width: 250,
              backgroundColor: '#f7436b',
              borderRadius: 20,
              color: '#FFF',
              borderColor: '#f7436b',
              boxShadow: '0.5rem 0.5rem 3rem rgba(0,0,0,0.2)',
              fontFamily: 'Montserrat'
            }}
            onClick={() => {
              this.toggleModalVisibility(false);
              history.push('/');
              }}
          >
            Continue Shopping
          </button>
          <button
            style={{
              height: 40,
              width: 150,
              backgroundColor: '#f7436b',
              borderRadius: 20,
              color: '#FFF',
              borderColor: '#f7436b',
              boxShadow: '0.5rem 0.5rem 3rem rgba(0,0,0,0.2)',
              fontFamily: 'Montserrat'
            }}
            onClick={() => history.push('/cart')}
          >
            Go to cart
          </button>
        </ModalFooter>
      </Modal>
    )
  }

  render() {
    const {
      isLoading,
    } = this.state;

    if (isLoading) {
      return <Spinner />
    }

    return (
      <div>
        <Navbar
          history={this.props.history}
          />
        <div className="single-products-container">
          <div className="image-wrapper-container">
            <img
              alt=""
              src={require(`../assets/product_images/afghan-flower-thumbnail.gif`)}
              style={{
                height: 300,
                width: 300
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 30 }}>
              <img
                alt=""
                src={require(`../assets/product_images/afghan-flower.gif`)}
                style={{
                  height: 70,
                  width: 70,
                  cursor: 'pointer'
                }}
                className="responsive-style-image"
              />
              <img
                alt=""
                src={require(`../assets/product_images/afghan-flower-2.gif`)}
                style={{
                  height: 70,
                  width: 70,
                  cursor: 'pointer'
                }}
                className="responsive-style-image"
              />
            </div>
          </div>
          <div className="single-product-detail product-details">
            <span style={{ color: '#A9A9A9', fontFamily: 'Montserrat' }}>Home</span>
            <span style={{ marginLeft: 5, marginRight: 5, color: '#A9A9A9', fontSize: 7 }}>&#9830;</span>
            <span style={{ color: '#A9A9A9', fontFamily: 'Montserrat' }}>All categories</span>
            <span style={{ marginLeft: 5, marginRight: 5, color: '#A9A9A9', fontSize: 7 }}>&#9830;</span>
            <span style={{ color: '#A9A9A9', fontFamily: 'Montserrat' }}>Men's Clothing & Accessories</span>
            <div>
              <StarRatings
                numberOfStars={5}
                rating={3}
                starRatedColor="#FFA500"
                starDimension="25px"
                starSpacing="5px"
              />
            </div>
            <h3 style={{
              marginTop: 10,
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
              }}
              className="product-details-title"
              >Afghan Flower</h3>
            <p style={{
              marginTop: 10,
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
              }}
              >This product is the best Italian product in  town</p>
            <p style={{ color: 'red', fontWeight: 'bold', fontFamily: 'Montserrat' }}>$ 18</p>
            <div>
              <p style={{ fontFamily: 'Montserrat' }}>Color</p>
              <div style={{ display: 'flex' }}>
                <div style={{
                  backgroundColor: 'red',
                }}
                className="color-choice product-details-color"
                />
                <div
                  style={{
                  backgroundColor: 'blue',
                  marginLeft: 15,
                }}
                  className="color-choice product-details-color"
                />
                <div
                  style={{
                  backgroundColor: 'green',
                  marginLeft: 15,
                }}
                  className="color-choice product-details-color"
                />
                <div
                  style={{
                  backgroundColor: 'orange',
                  marginLeft: 15,
                }}
                  className="color-choice product-details-color"
                />
                <div
                  style={{
                  backgroundColor: 'purple',
                  marginLeft: 15,
                }}
                  className="color-choice product-details-color"
                />
              </div>
            </div>
            <div style={{ marginTop: 10 }}>
              <p style={{ fontFamily: 'Montserrat' }}>Size</p>
              <div style={{ display: 'flex' }}>
                <p style={{
                  backgroundColor: '#DCDCDC',
                  color: 'black',
                }}
                className="size-style-left product-details-size"
                >S</p>
                <p style={{
                  backgroundColor: '#DCDCDC',
                  color: 'black',
                }}
                className="size-style product-details-size"
                >M</p>
                <p style={{
                  backgroundColor: '#DCDCDC',
                  color: 'black',
                }}
                className="size-style product-details-size"
                >L</p>
                <p style={{
                  backgroundColor: '#DCDCDC',
                  color: 'black',
                }}
                className="size-style product-details-size"
                >XL</p>
                <p style={{
                  backgroundColor: '#DCDCDC',
                  color: 'black',
                }}
                className="size-style product-details-size"
                >XXL</p>
              </div>
            </div>
            <div>
              <p style={{ fontFamily: 'Montserrat' }}>Quantity</p>
              <div style={{ display: 'flex' }}>
              <div style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#D3D3D3',
                  borderRadius: '50%',
                  textAlign: 'center',
                  marginRight: 10,
                  cursor: 'pointer'
                }}>
                  <p
                    className="decrease-quantity"
                    style={{ marginTop: -3 }}
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
                  marginRight: 10,
                  fontFamily: 'Montserrat'
                }}
                name="product-details-quantity"
                >1</p>
                <div style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#D3D3D3',
                  borderRadius: '50%',
                  textAlign: 'center',
                  marginRight: 10,
                  cursor: 'pointer'
                }}>
                  <p
                    className="increase-quantity"
                    style={{ marginTop: -3 }}
                  >
                    +
                  </p>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', marginTop: 15 }}>
              <button
                style={{
                  height: 40,
                  width: 150,
                  backgroundColor: '#f7436b',
                  borderRadius: 20,
                  color: '#FFF',
                  borderColor: '#f7436b',
                  boxShadow: '0.5rem 0.5rem 3rem rgba(0,0,0,0.2)',
                  fontFamily: 'Montserrat',
                  cursor:  'pointer'
                }}
                onClick={() => this.setState({ isModalOpen: true })}
                id="btnCart"
                className="product-button"
              >
                Add to cart
              </button>
              <div style={{
                marginLeft: 'auto',
                display: 'flex',
                marginTop: 5
                }}
                >
                <i className="far fa-heart" style={{
                  marginRight: 10,
                  color: '#f7436b',
                  marginTop: 5,
                  cursor: 'pointer'
                }}></i>
                <p style={{ color: '#A9A9A9', fontFamily: 'Montserrat' }}>Add to wishlist</p>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-container">
          <div style={{
            maxHeight: 400,
            overflowY: 'scroll',
          }}>
            <h5 style={{ marginBottom: 20, fontFamily: 'Montserrat' }}>Product Reviews</h5>
                <div style={{ display: 'flex' }}>
                  <div>
                    <div className="review-star">
                    <StarRatings
                      numberOfStars={5}
                      rating={4}
                      starRatedColor="#FFA500"
                      starDimension="15px"
                      starSpacing="5px"
                    />
                    </div>
                    <p style={{
                      marginTop: 20,
                      fontWeight: 'bold',
                      fontFamily: 'Montserrat'
                    }}>Peter Charles</p>
                    <p style={{
                      marginTop: -15,
                      fontSize: 12,
                      color: '#A9A9A9',
                      fontFamily: 'Montserrat'
                    }}>2 days ago</p>
                  </div>
                  <p className="review-text" style={{ marginLeft: 200, marginTop: 5, fontFamily: 'Montserrat' }}>
                    This product is nice and awesome
                  </p>
                </div>
          </div>
          <hr />
              <div id="review">
                <h5 style={{ fontFamily: 'Montserrat', marginTop: 25 }}>Add a Review</h5>
                <div className="star-wrapper">
                  <label style={{ fontFamily: 'Montserrat' }}>Choose a nickname</label>
                  <input
                    type="text"
                    name="nickname"
                    className="input-text-style"
                  />
                </div>
                <div className="star-wrapper">
                  <label style={{ fontFamily: 'Montserrat' }}>Your review</label>
                  <Input
                    type="textarea"
                    name="text"
                    id="text"
                    className="input-text-box-style"
                  />
                </div>
                <div className="star-wrapper">
                  <p style={{ fontFamily: 'Montserrat' }}>Overall rating</p>
                  <div className="star-rating-style">
                    <StarRatings
                      numberOfStars={5}
                      rating={0}
                      starRatedColor="#FFA500"
                      starHoverColor="#FFA500"
                      starDimension="20px"
                      starSpacing="5px"
                      name="review"
                    />
                  </div>
                </div>
                <button style={{
                  backgroundColor: '#f7436b',
                  boxShadow: '0.5rem 0.5rem 3rem rgba(0,0,0,0.2)',
                  cursor: 'pointer'
                }}
                className="button-style-review"
                id="addReview"
                >
                  Submit
                </button>
            </div>
           <p className="not-logged-in">You need to be logged in to post reviews. <span onClick={() => this.props.history.push('/login')} className="log-in-link">Log in now</span></p>
          {this.renderModal()}
        </div>
      </div>
    )
  }
}

export default SingleProduct;
