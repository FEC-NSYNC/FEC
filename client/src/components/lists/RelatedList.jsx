import React, { useContext } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ProductContext from './../ProductContext.jsx';
import RelatedListEntry from './entries/RelatedListEntry.jsx';

const RelatedList = () => {
  const { related } = useContext(ProductContext);
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 275;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 275;
  };

  return (
    <div className="container related" id="slider">
      <FaArrowLeft className="slide-left" onClick={slideLeft} />
      {related.map((item, index) => <RelatedListEntry item={item} key={index} />)}
      <FaArrowRight className="slide-right" onClick={slideRight} />
    </div>
  );
};

export default RelatedList;
