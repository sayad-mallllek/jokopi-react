import React, {
  Component,
  useContext,
} from 'react';

import {
  Link,
  NavLink,
} from 'react-router-dom';

import burgerIcon from '../assets/icons/burger-menu-left.svg';
import placeholderProfile from '../assets/images/placeholder-profile.jpg';
import logo from '../assets/jokopi.svg';
import { isAuthenticated } from '../utils/authUtils';
import Sidebar from './Sidebar';

// create a navigation component that wraps the burger menu
const Navigation = () => {
  const ctx = useContext(MyContext);

  return (
    <Sidebar
      customBurgerIcon={false}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
    />
  );
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }
  render() {
    return (
      <>
        {/* <Sidebar
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        /> */}
        <header className=" px-10 lg:px-22 flex justify-between bg-white border-b-2 border-gray-100">
          <div className="py-8 font-extrabold">
            <Link to="/" className=" flex flex-row justify-center gap-4">
              <img src={logo} alt="logo" width="30px" />
              <h1 className="text-xl">jokopi.</h1>
            </Link>
          </div>
          <div className="navbar-burger select-none cursor-pointer lg:hidden py-8">
            <button onClick={() => this.toggleMenu()}>
              <img
                src={burgerIcon}
                width="30px"
                className="aspect-square"
                alt=""
              />
            </button>
          </div>
          <nav className="py-8 hidden lg:flex flex-row gap-8 justify-center">
            <li className="list-none" key="Home Page">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#6A4029]" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="list-none" key="Product">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#6A4029]" : ""
                }
              >
                Products
              </NavLink>
            </li>
            <li className="list-none" key="Cart">
              <a href="#">Your Cart</a>
            </li>
            <li className="list-none" key="History">
              <a href="#">History</a>
            </li>
          </nav>
          {isAuthenticated() ? (
            <div className="flex-row gap-10 hidden lg:flex select-none py-8">
              <div className="search-section cursor-pointer">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 16L12.375 12.375M14.3333 7.66667C14.3333 11.3486 11.3486 14.3333 7.66667 14.3333C3.98477 14.3333 1 11.3486 1 7.66667C1 3.98477 3.98477 1 7.66667 1C11.3486 1 14.3333 3.98477 14.3333 7.66667Z"
                    stroke="#4F5665"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <a href="" className="chat-link">
                <img src="./img/chat.webp" alt="" width="30px" />
              </a>
              <a href="./profile.html">
                <img
                  src={placeholderProfile}
                  alt=""
                  width="30px"
                  className="rounded-full"
                />
              </a>
            </div>
          ) : (
            <div className="hidden lg:flex flex-row gap-3 items-center select-none py-6">
              <Link to="/auth/login" className="pr-9 font-semibold">
                Login
              </Link>
              <Link to="/auth/register">
                <button className="rounded-[25px] bg-secondary px-10 text-tertiary font-semibold py-2 hover:bg-secondary-200 duration-300">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </header>
      </>
    );
  }
}

export default Header;
