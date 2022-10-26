import React, { useState } from "react";
import Logo from "../assets/kosekii.png";
import styled from "styled-components";
import BurgerBtn from "../utils/burgerBtn";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    return setClicked(!clicked);
  };
  return (
    <NavContainer>
      <div class="bg-gray-100 font-sans w-full m-0">
        <div class="bg-white  shadow">
          <div class="container mx-auto px-4">
            <div class="flex items-center justify-between py-4">
              <div>
                <a href="/">
                  <img src={Logo} className="w-24 " alt="s" />
                </a>
              </div>

              <div class="hidden sm:flex sm:items-center">
                <a
                  href="/"
                  class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
                >
                  Products
                </a>
                <a
                  href="/"
                  class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
                >
                  Marketplace
                </a>
                <a
                  href="/"
                  class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
                >
                  Partners
                </a>
                <a
                  href="/"
                  class="text-gray-800 text-sm font-semibold hover:text-purple-600"
                >
                  Pricing
                </a>
              </div>

              <div class="hidden sm:flex sm:items-center">
                <a
                  href="/"
                  class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
                >
                  Sign in
                </a>
                <a
                  href="/"
                  class="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
                >
                  Sign up
                </a>
              </div>

              <div class="sm:hidden cursor-pointer"></div>
            </div>
            <BurgerContainer className={`${clicked ? "efx" : ""}`}>
              <div>
                <div
                  class={`${
                    clicked ? "block" : "hidden"
                  } sm:hidden  bg-white border-t-2 py-2`}
                >
                  <div class="flex flex-col">
                    <a
                      href="/"
                      class="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
                    >
                      Products
                    </a>
                    <a
                      href="/"
                      class="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
                    >
                      Marketplace
                    </a>
                    <a
                      href="/"
                      class="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
                    >
                      Partners
                    </a>
                    <a
                      href="/"
                      class="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
                    >
                      Pricing
                    </a>
                    <div class=" top flex justify-between items-center border-t-2 pt-2">
                      <a
                        href="/"
                        class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
                      >
                        Sign in
                      </a>
                      <a
                        href="/"
                        class="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600"
                      >
                        Sign up
                      </a>
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
