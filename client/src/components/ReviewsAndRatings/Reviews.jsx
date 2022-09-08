import React from 'react';
import Ratings from './Ratings.jsx'
import ReviewCard from './ReviewCard.jsx'
import ReviewList from './ReviewList.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-regular-svg-icons';
import './ratingsAndReviews.css';
const axios = require('axios');
const {API_KEY} = process.env;

export default function Reviews ({ product, interactions }) {
const [reviews, setReviews] = React.useState([])
const [productId, setProductId] = React.useState(65656)

function getReviews (productID) {
  return axios({
   method: 'get',
   url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews?product_id=${productID}`,
   headers: {
     'Authorization': `${API_KEY}`,
   },
 });
};

React.useEffect(() => {
  if(product?.id){
  setProductId(product?.id)
  }
 getReviews(productId)
 .then(res => {
  setReviews(res.data)
 })
 .catch(err => console.log(err))
}, [])

console.log('the product id is: ', productId)

  return (
    // <div>
    //   <h1>Ratings and Reviews</h1>
    <div onClick={(e) => interactions(e, 'RatingsAndReviews')}>
      <div className="reviews-container">
        <Ratings />
        <ReviewList reviewData={reviews} />
      </div>
    </div>
  )
}

