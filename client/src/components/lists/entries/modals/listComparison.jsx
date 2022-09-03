import React, {useState, useContext, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import ProductContext from '../../../ProductContext.jsx'
import FeaturesContext from '../../../FeaturesContext.jsx'
import { getProduct } from '../../../../getHelpers.js'

const ListComparison = (props) => {
  const { currentProduct } = useContext(ProductContext);
  const [currentList, setCurrentList] = useState([]);
  const [featureList, setFeatureList] = useState([]);

  // filters out duplicate features
  const filterDuplicates = (list) => {
    const record = {};
    return list.filter(item => record.hasOwnProperty(item) ? false : (record[item] = true));
  }

  const mergeFeatures = () => {
    // gets features from the main product currently displayed
    getProduct(currentProduct.id)
    .then((response) => {
      setCurrentList(response.data.features.map(item => item.value))
      return response.data.features.map(item => item.value ? item.value : item.feature)
    })
    .then((list) => {
      // combines those features with entry features, filters out duplicates and render into elements
      console.log(props.entryFeatures);
      const rawListData = list.concat(props.entryFeatures);
      console.log('HERE IS THE RAW DATA FROM LISTCOMPARISON: ', rawListData)
      setFeatureList(filterDuplicates(rawListData))
    })
  }

  const handleCurrentChecks = () => {
    return featureList.map(item => {
      return currentList.indexOf(item) === -1
      ? <div className="empty"></div>
      : <FaCheck className="check"/>
    })
  }

  const handleRelatedChecks = () => {
    return featureList.map(item => {
      return props.entryFeatures.indexOf(item) === -1
        ? <div className="empty"></div>
        : <FaCheck className="check"/>
    })
  }

  useEffect(() => {
    mergeFeatures();
  }, [props.entryFeatures])


  if (!props.show) {
    return null;
  } else {
    return (
      <div className="comparison-modal">
        <div className="comparison-content">
          <div className="comparison-list">
            <div className="current-features">Current Product
            {
              handleCurrentChecks()
            }
            </div>
            <div className="features">Features
            {
              featureList.map(item => <div className="feature">{item}</div> )
            }
            </div>
            <div className="related-features">Related Entry Name
            {
              handleRelatedChecks()
            }
            </div>
          </div>
        </div>
        <button className="close-modal" onClick={() => {props.close(false)}}>Click here to close</button>
      </div>
    )
  }
}

export default ListComparison;