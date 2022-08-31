import React, { useState, useEffect } from 'react';
import ProductDetailPage from './ProductDetailPage.jsx';
import OutfitList from './lists/OutfitList.jsx';
import RelatedList from './lists/RelatedList.jsx';
import ProductContext from './ProductContext.jsx';

const axios = require('axios');

const { API_URL } = process.env;
const header = { Authorization: process.env.API_KEY };

function App() {
  const [allProducts, setAllProducts] = useState({});
  const [product, setProduct] = useState(null);
  const [allStyles, setAllStyles] = useState([]);
  const [photos, setPhotos] = useState({});
  const [related, setRelated] = useState([]);

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
    }
  }, [product]);

  // trigger for product change in other components
  const handleProductChange = (productId) => {
    axios.get(`${API_URL}/products/${productId}`, { headers: header })
      .then((response) => {
        setProduct(response.data);
      });
  };

  return (
    <div>
      <ProductDetailPage
        related={related}
        product={product}
        allStyles={allStyles}
        allPhotos={photos}
      />
      <ProductContext.Provider value={{ handleProductChange }}>
        <RelatedList
          related={related}
        />
        <OutfitList />
      </ProductContext.Provider>
    </div>

  );
}

export default App;
