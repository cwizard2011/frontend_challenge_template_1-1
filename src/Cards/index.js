import React from 'react';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const Cards = ({
  product_id,
  name,
  price,
  discounted_price,
  thumbnail,
  history
}) => (
  <div style={{
      width: 200,
      marginTop: 50,
      overflow: 'hidden',
      borderRadius: 5,
      marginBottom: 15,
      marginLeft: 30,
      boxSizing: 'border-box',
      boxShadow: '0.5rem 0.5rem 3rem rgba(0,0,0,0.2)',
      cursor: 'pointer'
      }}
      onClick={() => history.push(`/product/${product_id}`)}
      className="product-card"
      >
    <Card>
      <CardImg top width="100%" src={require(`../assets/product_images/${thumbnail}`)} alt="Card image cap" />
      <CardBody className="product-card-link">
        <CardTitle className="product-card-title" style={{ textAlign: 'center', fontFamily: 'Montserrat', fontWeight: 'bold' }}>{name}</CardTitle>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {
            discounted_price > 0 ? (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <CardSubtitle style={{ textDecoration: 'line-through', marginLeft: 15, fontFamily: 'Montserrat' }}>${price}</CardSubtitle>
                <CardSubtitle style={{ fontFamily: 'Montserrat' }}>${discounted_price}</CardSubtitle>
              </div>
            ) : (
              <CardSubtitle style={{ marginLeft: 15, fontFamily: 'Montserrat', display: 'flex', alignContent: 'center' }}>${price}</CardSubtitle>
            )
          }
        </div>
        <div className="product-button"><button className="btn" onClick={() => history.push('/cart')}>Add to Cart</button></div>
      </CardBody>
    </Card>
  </div>
)

export default Cards;
