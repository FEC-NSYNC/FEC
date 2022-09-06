import React from 'react';
import data from './data.js';
import './ratingsAndReviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-regular-svg-icons';
import {faStar as fullStar, faStarHalf} from '@fortawesome/free-solid-svg-icons';


export default function RatingsStars (props) {
const [stars, setStars] = React.useState([])

function handleStars(num){
  if(num > 5){
    num = 5
  }
  let overflow = 5 - num;
  while(num > 0){
    if(num >= 1){
      setStars(prevState => [...prevState, 'fullStar'])
      num--
    }
    else if (num < 1){
      setStars(prevState => [...prevState, 'halfStar'])
      num--
    }
    }
    while(overflow > 1){
        setStars(prevState => [...prevState, 'emptyStar'])
        overflow--
    }
  }

React.useEffect(() => {
  handleStars(props.stars)
},[]);

const renderStars =
      stars.map((star) => {
        if(star === 'fullStar'){
          return <FontAwesomeIcon className='ratings-star' icon={fullStar} />
        }
        else if(star === 'halfStar'){
          return <span className="fa-layers fa-fw fa-lg ratings-star">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalf} />
          </span>
          }
        else if(star === 'emptyStar'){
          return <FontAwesomeIcon className='ratings-star' icon={faStar} />
        }
        })




return(
<div className='star-row'>
{renderStars}
</div> )
}