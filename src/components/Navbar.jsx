import React, { useState } from "react";
import Logo from "../assets/kosekii.png";
import styled from "styled-components";
import BurgerBtn from "../utils/burgerBtn";

const Navbar = ({ isAuth, signUserOut }) => {
  const [clicked, setClicked] = useState(false);
  const authBoolean = isAuth;
  const handleClick = () => {
    return setClicked(!clicked);
  };
  return (
    <NavContainer>
      <div
        className="
             inset-x-0 
             top-0 bg-gray-100 font-sans w-full m-0"
      >
        <div className="bg-white  shadow">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div>
                <a href="/">
                  <img src={Logo} className="w-24 " alt="s" />
                </a>
              </div>

              <div class="hidden sm:flex sm:items-center">
                <a
                  href="/"
                  class=" text-gray-800 text-sm font-semibold hover:underline mr-4"
                >
                  Home
                </a>
                <a
                  href="/beats"
                  class="text-gray-800 text-sm font-semibold hover:underline hover:text-purple-600 mr-4"
                >
                  Find yout beat
                </a>

                <a
                  href="/"
                  class="text-gray-800 text-sm font-semibold hover:underline hover:text-purple-600"
                >
                  Contact
                </a>
              </div>

              <div class="hidden sm:flex sm:items-center">
                {!authBoolean ? (
                  <a
                    to="/login"
                    href="/login"
                    class="text-black text-sm font-semibold hover:underline hover:text-white hover:rounded-sm px-1 hover:bg-black mr-4"
                  >
                    Login
                  </a>
                ) : (
                  <a
                    to="/login"
                    href="/login"
                    onClick={signUserOut}
                    class="text-black text-sm font-semibold hover:underline hover:text-white hover:rounded-sm px-1 hover:bg-black mr-4"
                  >
                    Log out
                  </a>
                )}
              </div>

              <div class="sm:hidden cursor-pointer"></div>
            </div>
            <BurgerContainer className={`${clicked ? "efx" : ""}`}>
              <div>
                <div
                  className={`${
                    clicked ? "block" : "hidden"
                  } sm:hidden  bg-white border-t-2 py-2`}
                >
                  <div className="flex flex-col">
                    <a
                      href="/"
                      className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
                    >
                      Home
                    </a>
                    <a
                      href="/beats"
                      className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
                    >
                      Find your beat
                    </a>
                    <a
                      href="/"
                      className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
                    >
                      Licenses
                    </a>
                    <a
                      href="/"
                      className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
                    >
                      Contact
                    </a>
                    <div className="  top flex justify-between items-center border-t-2 pt-2">
                      {!authBoolean ? (
                        <a
                          to="/login"
                          href="/login"
                          class="text-black text-sm font-semibold hover:underline hover:text-white hover:rounded-sm px-1 hover:bg-black mr-4"
                        >
                          Login
                        </a>
                      ) : (
                        <a
                          to="/login"
                          href="/login"
                          onClick={signUserOut}
                          class="text-black text-sm font-semibold hover:underline hover:text-white hover:rounded-sm px-1 hover:bg-black mr-4"
                        >
                          Log out
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </BurgerContainer>

            <div className="sm:hidden absolute top-0 right-1">
              <BurgerBtn clicked={clicked} handleClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .active {
    top: 0;
    display: block;
  }
`;

const BurgerContainer = styled.div`
  position: absolute;
  top: -700px;
  right: -1000;
  transition: all 0.2s ease;
  &.efx {
    top: 0;
    position: relative;
  }
`;
