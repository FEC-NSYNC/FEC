import React, { useState, useEffect } from 'react';
import { getProduct, getStyles, getRelated } from '../../../getHelpers.js';
import ProductContext from '../../ProductContext.jsx';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import '/client/dist/Lists.css';

const OutfitListEntry = (props) => {
  const {outfit, remove, updateCount, count} = props;
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [reviews, setReviews] = useState('');

  const newRender = (productID) => {
    handleProductChange(productID);
  };

  useEffect(() => {
    getProduct(outfit)
      .then((res) => {
        setCategory(res.data.category);
        setName(res.data.name);
      })
      .catch((e) => {
        console.error(e);
      });

    getStyles(outfit)
      .then((res) => {
        setImage(res.data.results[0].photos[0].thumbnail_url);
        setPrice(res.data.results[0].original_price);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [outfit]);

  return (
    <div className="entry">
      <FaTimes
        className="button-compare-outfit"
        onClick={() => {remove(outfit); updateCount(count - 1)}}/>
      <div className="image-container">
        <img className="image"
        src={image} alt="could not be displayed" />
      </div>
      <h3 className="name">{name}</h3>
      <h4 className="category">{category}</h4>
      <h4 className="price original">{price}</h4>
      <div className="reviews">No reviews</div>
    </div>
  );
};

export default OutfitListEntry;
