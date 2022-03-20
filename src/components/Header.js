import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../store/StateProvider";

function Header() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: "none" }}>
        <div className='header-logo'>
          <StorefrontIcon className='header-logoImage' fontSize='large' />
          <h2 className='header-logoTitle'>eShop</h2>
        </div>
      </Link>

      <div className='header-search'>
        <input type='text' className='header-searchInput' />
        <SearchIcon className='header-searchIcon' />
      </div>
      <div className='header-nav'>
        <Link to='/login' style={{ textDecoration: "none" }}>
          <div className='nav-item'>
            <span className='nav-itemLineOne'>Hello Guest</span>
            <span className='nav-itemLineTwo'>Sign In/Register</span>
          </div>
        </Link>

        <div className='nav-item'>
          <span className='nav-itemLineOne'>Your</span>
          <span className='nav-itemLineTwo'>Shop</span>
        </div>
        <Link to='/checkout' style={{ textDecoration: "none" }}>
          <div className='nav-itemBasket'>
            <ShoppingBasketIcon fontSize='large' />
            <span className='nav-itemLineTwo nav-basketCount'>
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
