import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="links-container">
        <div className="site-name">
          <Link className="link" to="/">
            Typhoon Shop
          </Link>
        </div>
      </div>
      <div className="navs">
        <Link className="link" to="/">
          Shop
        </Link>
        <Link className="link" to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
