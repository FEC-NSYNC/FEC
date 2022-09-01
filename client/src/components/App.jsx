import React, { useState, useEffect } from 'react';
import ProductDetailPage from './ProductDetailPage.jsx';
import OutfitList from './lists/OutfitList.jsx';
import RelatedList from './lists/RelatedList.jsx';
import ProductContext from './ProductContext.jsx';
import QuestionList from './QuestionList.jsx';
import AnswerList from './AnswerList.jsx';
import QuestionModal from './Modal/QuestionModal.jsx';
import './App.css';

const axios = require('axios');

const { API_URL } = process.env;
const header = { Authorization: process.env.API_KEY };

function App() {
  const [allProducts, setAllProducts] = useState({});
  const [product, setProduct] = useState(null);
  const [allStyles, setAllStyles] = useState([]);
  const [defaultPhoto, setDefaultPhoto] = useState('');
  const [photos, setPhotos] = useState({});
  const [related, setRelated] = useState([]);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);

  // get all produts for initial loading
  useEffect(() => {
    axios.get(`${API_URL}/products`, { headers: header })
      .then((response) => {
        const productMap = {};
        response.data.forEach((item) => {
          productMap[item.id] = item;
        });
        setAllProducts(productMap);
        return response.data;
      })
      .then((data) => {
        // temp way to set initial product until catalog page
        setProduct(data[0]);
        console.log("PRODUCT UPDATED TO: ", data[0]);
      });
  }, []);

  // trigger updates when product is changed
  useEffect(() => {
    console.log("PRODUCT CHANGE TRIGGERED");
    console.log(product);
    if (product) {
      console.log("product exists");
      axios.get(`${API_URL}/products/${product.id}/styles`, { headers: header })
        .then((response) => {
          setAllStyles(response.data.results);
          setDefaultPhoto(response.data.results[0].photos[0].thumbnail_url)
          return response.data.results;
        })
        .then((data) => {
          const pics = {};
          data.forEach((style) => {
            pics[style.style_id] = style.photos;
          });
          setPhotos(pics);
        })
        .then(() => {
          axios.get(`${API_URL}/products/${product.id}/related`, { headers: header })
            .then((response) => {
              setRelated(response.data);
            });
        });
        console.log('B I G console log ==============')
        console.log('product ==>', product)
        console.log('allStyles ==> ', allStyles)
        console.log('defaultPhoto ==>', defaultPhoto)
        console.log('photos ==> ', photos)
        console.log('related ==> ', related)
        console.log('search ==> ', search)
        console.log('show ==> ', show)
        console.log('================================')
    }
  }, [product]);

  // trigger for product change in other components
  const handleProductChange = (productId) => {
    axios.get(`${API_URL}/products/${productId}`, { headers: header })
      .then((response) => {
        setProduct(response.data);
      });
  };

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <>
    <div>
      <ProductDetailPage
        related={related}
        product={product}
        allStyles={allStyles}
        allPhotos={photos}
      />
      <ProductContext.Provider className="list-container" value={{ handleProductChange, product }}>
        <RelatedList
          related={related}
        />
        <OutfitList
          currentProduct={product}
        />
      </ProductContext.Provider>
    </div>
    <div className='App'>
      <h1>Questions & Answers</h1>
      <div className='searchParent'>
        <input
          className='searchChild'
          type='text'
          placeholder='Have a question? Search for answers...'
          value={search}
          onChange={handleSearch}
        />
        <button onClick={() => setShow(true)}>Ask a Question</button>
      </div>
      <QuestionModal onClose={() => setShow(false)} show={show} />
      <div className='QuestionList'>
        <QuestionList />
      </div>
    </div>
    </>
  );
}

export default App;
