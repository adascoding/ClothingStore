import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SpecialSale from '../components/SpecialSale'

const CategoryContainer = styled.div`
  max-width: 1024px;
  margin: auto;
  margin-bottom: 16px;
  background-color: #e9c46a;
  color: white;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 40px;
  font-weight: bold;
`
const Container = styled.div`
  max-width: 1024px;
  margin: auto;
  display: flex;
`
const Left = styled.div`
  border: 1px solid black;
  flex: 0 0 33%;
`
const ShopBy = styled.div``
const CategorySelection = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
`;

const CategoryLabel = styled.label`
  margin-right: 8px;
`;
const Right = styled.div`
  border: 1px solid blue;
  flex: 1;
  display: flex;
  flex-direction: column;
`
const SortBy = styled.div`
  align-self: flex-end;
`
const SortByTitle = styled.span`
  margin-right: 10px;
`;
const ProductsContainer = styled.div``
const StyledSelect = styled.select`
  padding: 4px;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  outline: none;
`;


export default function ProductList() {
  const { category: urlCategory } = useParams();
  const [filters, setFilters] = useState({
    category: urlCategory || '',
    maxPrice: 50,
    sortBy: '',
    sortOrder: 'asc'
  });
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  }

  const endpoint = filters.category ? `products?[filters][category][$eq]=${filters.category}` : 'products?';
  const fullEndpoint = constructEndpoint(endpoint, filters);

  const { data, loading, error } = useFetch(fullEndpoint);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fullEndpoint = constructEndpoint(endpoint, filters);
  }, [filters]);

  const handleCategoryChange = (selectedCategory) => {
    if (selectedCategory !== '') {
      window.history.pushState(null, '', `/shop/${selectedCategory}`);
    }
    if (selectedCategory == '') {
      window.history.pushState(null, '', `/shop`);
    }
    setFilters({ ...filters, category: selectedCategory });
  };

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleSortChange = (value) => {
    let sortBy, sortOrder;
    switch (value) {
      case 'title-asc':
        sortBy = 'title';
        sortOrder = 'asc';
        break;
      case 'title-desc':
        sortBy = 'title';
        sortOrder = 'desc';
        break;
      case 'price-asc':
        sortBy = 'price';
        sortOrder = 'asc';
        break;
      case 'price-desc':
        sortBy = 'price';
        sortOrder = 'desc';
        break;
      default:
        sortBy = 'title';
        sortOrder = 'asc';
    }
    setFilters({ ...filters, sortBy, sortOrder });
  };

  return (
    <>
      <SpecialSale />
      <Navbar />
      <CategoryContainer>
        {filters.category ? filters.category : 'All products'}
      </CategoryContainer>
      <Container>
        <Left>
          <ShopBy>SHOP BY</ShopBy>

          <CategorySelection>
            CATEGORY
            <CategoryLabel>
              <input type="radio" name="category" value="" checked={filters.category === ''} onChange={() => handleCategoryChange('')} />
              All products
            </CategoryLabel>
            <CategoryLabel>
              <input type="radio" name="category" value="mens" checked={filters.category === 'mens'} onChange={() => handleCategoryChange('mens')} />
              Mens
            </CategoryLabel>
            <CategoryLabel>
              <input type="radio" name="category" value="womens" checked={filters.category === 'womens'} onChange={() => handleCategoryChange('womens')} />
              Womens
            </CategoryLabel>
            <CategoryLabel>
              <input type="radio" name="category" value="kids" checked={filters.category === 'kids'} onChange={() => handleCategoryChange('kids')} />
              Kids
            </CategoryLabel>
            <CategoryLabel>
              <input type="radio" name="category" value="accessories" checked={filters.category === 'accessories'} onChange={() => handleCategoryChange('accessories')} />
              Accessories
            </CategoryLabel>
          </CategorySelection>


          <p>PRICE</p>
          <p><input type="range" min="0" max="50" value={filters.maxPrice} onChange={(e) => handleFilterChange('maxPrice', e.target.value)} />
            <span>$0 - ${filters.maxPrice}</span>
          </p>
        </Left>
        <Right>
          <SortBy>
            <SortByTitle>Sort by</SortByTitle>

            <StyledSelect value={`${filters.sortBy}-${filters.sortOrder}`} onChange={(e) => handleSortChange(e.target.value)}>
              <option value="title-asc">Title (A to Z)</option>
              <option value="title-desc">Title (Z to A)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </StyledSelect>

          </SortBy>

          <ProductsContainer>
            {loading && <li>Loading...</li>}
            {error && <li>Error: {error.message}</li>}
            {data && data.length > 0 ? (
              data.map(product => (
                <div key={product.id}>
                  <p>Title: {product.attributes.title}</p>
                  <p>Description: {product.attributes.description || 'No description'}</p>
                  <p>Price: {product.attributes.price}</p>
                  <button onClick={() => handleAddToCart({
                    id: product.id,
                    tite: product.attributes.title,
                    description: product.attributes.description,
                    price: product.attributes.price,
                    img: product.attributes.img,
                    quantity
                  }
                  )}>Add to cart</button>
                </div>
              ))
            ) : (
              <div>No products</div>
            )}
          </ProductsContainer>
        </Right>


      </Container>










      <Footer />
    </>
  );
}

function constructEndpoint(endpoint, filters) {
  const queryParams = [];
  if (filters.maxPrice) {
    queryParams.push(`[filters][price][$lt]=${filters.maxPrice}`);
  }
  if (filters.sortBy && filters.sortOrder) {
    queryParams.push(`sort=${filters.sortBy}:${filters.sortOrder}`);
  }
  return queryParams.length > 0 ? `${endpoint}&${queryParams.join('&')}` : endpoint;
}
