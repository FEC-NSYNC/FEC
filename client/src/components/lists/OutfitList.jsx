import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import OutfitListEntry from './entries/OutfitListEntry.jsx';
import AddToOutfits from './entries/AddToOutfits.jsx';


const OutfitList = (props) => {
  const [currentOutfits, setCurrentOutfits] = useState([]);
  // const [IDlist, setIDlist] = useState([])
  const [count, setCount] = useState(1)
  const [countLeft, setCountLeft] = useState(0);
  const [countRight, setCountRight] = useState(3);

  const slideLeft = () => {
    const slider = document.getElementById('slider-outfits');
    slider.scrollLeft -= (window.innerWidth/4.625);
  };

  const slideRight = () => {
    const slider = document.getElementById('slider-outfits');
    slider.scrollLeft += (window.innerWidth/4.625);
  };

  const handleAddToList = () => {
    if (currentOutfits.indexOf(props.currentProduct.id) === -1) {
      setCurrentOutfits(currentOutfits => [...currentOutfits, props.currentProduct.id]);
    } else {
      alert('This product is already on your list');
    }
  }

  const handleDelete = (target) => {
    setCurrentOutfits(currentOutfits.filter(outfit => outfit !== target));
  }

  const handleCount = () => {
    setCount(count + 1);
  }

  const handleCountLeft = () => {
    setCountLeft(countLeft - 1);
    setCountRight(countRight - 1);
  }

  const handleCountRight = () => {
    setCountRight(countRight + 1);
    setCountLeft(countLeft + 1);
  }

  useEffect(() => {

  }, [currentOutfits]);

  return (
    <>
      <h1>Your outfits</h1>
      <div className="container outfits" id="slider-outfits">
        {countLeft === 0
          ? null
          : <FaArrowLeft className="slide-left" onClick={() => {slideLeft(); handleCountLeft()}} />
        }
        <div className="add-container" onClick={() => {handleAddToList(); handleCount();}}>
          <AddToOutfits />
        </div>
        {currentOutfits.length
          ? currentOutfits.map((outfit, index) =>
            <OutfitListEntry outfit={outfit} remove={handleDelete} key={index} updateCount={handleCount}/>
            )
          : null
        }
        {currentOutfits.length < 3 || countRight === currentOutfits.length
          ? null
          : <FaArrowRight className="slide-right" onClick={() => {slideRight(); handleCountRight()}} />
        }
      </div>
    </>
  );
};

export default OutfitList;
