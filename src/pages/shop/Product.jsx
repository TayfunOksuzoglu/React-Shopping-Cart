import PropTypes from 'prop-types';
import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

function Product({ data }) {
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt={`${productName} image`} />
      <div className="description">
        <p>
          <strong>{productName}</strong>
        </p>
        <p>${price}</p>
      </div>
      <div className="buttons">
        <button
          className="addToCartBttn"
          onClick={() => {
            addToCart(id);
          }}
        >
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
        <button className="goToCartBttn" onClick={() => navigate('/cart')}>
          <ShoppingCart size={16} />
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
