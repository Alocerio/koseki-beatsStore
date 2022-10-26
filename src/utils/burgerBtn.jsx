import React from "react";
import styled from "styled-components";

const BurgerBtn = ({ clicked, handleClick }) => {
  return (
    <Burger>
      <div
        onClick={handleClick}
        class={`icon nav-icon-4 ${clicked ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burger>
  );
};

export default BurgerBtn;

const Burger = styled.div`
  .nav-icon-4 {
    width: 32px;
    height: 30px;
    background-color: #fff;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .nav-icon-4 span {
    background-color: #000;
    position: absolute;
    border-radius: 20px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  .nav-icon-4 span:nth-child(1) {
    width: 100%;
    height: 3px;

    display: block;
    top: 0px;
    left: 0px;
  }
  .nav-icon-4 span:nth-child(2) {
    width: 100%;
    height: 3px;
    display: block;
    top: 13px;
    left: 0px;
  }
  .nav-icon-4 span:nth-child(3) {
    width: 100%;
    height: 3px;
    display: block;
    bottom: 0px;
    left: 0px;
  }
  .nav-icon-4:not(.open):hover span:nth-child(1) {
    width: 100%;
    height: 4px;
    display: block;
    top: -2px;
    left: 0px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  .nav-icon-4:not(.open):hover span:nth-child(2) {
    width: 100%;
    height: 4px;
    display: block;
    top: 13px;
    left: 0px;
    transition: 0.4s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  .nav-icon-4:not(.open):hover span:nth-child(3) {
    width: 100%;
    height: 4px;
    display: block;
    bottom: -2px;
    left: 0px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  .nav-icon-4.open {
    transform: rotate(90deg);
  }
  .nav-icon-4.open span:nth-child(1) {
    left: 3px;
    top: 12px;
    width: 30px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: rotate(90deg);
    transition-delay: 150ms;
  }
  .nav-icon-4.open span:nth-child(2) {
    left: 2px;
    top: 20px;
    width: 20px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: rotate(45deg);
    transition-delay: 50ms;
  }
  .nav-icon-4.open span:nth-child(3) {
    left: 14px;
    top: 20px;
    width: 20px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: rotate(-45deg);
    transition-delay: 100ms;
  }
`;
