import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import flag from "../assets/flag.png";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
// import { links } from "../data";
const Navbar = () => {
  const [navState, setNavState] = useState(false);
  return (
    <Wrapper>
      <div>guy</div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  /* height: var(--nav-height); */
  margin: 3rem 6rem;
  .nav-header {
    display: flex;
    align-items: center;
    .logo {
      height: 5vh;
    }
    .nav-toggle {
      display: none;
    }
  }

  .links-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    gap: 2rem;
    .links {
      display: flex;
      li {
        padding: 0rem 1rem;
        /* margin-right:1rem */
        transition: var(--transition);
        &:first-of-type {
          background-color: var(--primary-color);
          border-radius: 0.3rem;
          a {
            color: var(--black);
          }
        }
        &:hover {
          background-color: var(--primary-color);
          border-radius: 0.3rem;
          a {
            color: var(--black);
          }
        }
      }
      a {
        color: var(--white);
        font-weight: bold;

        &:hover {
          padding: 0;
        }
      }
    }
  }
`;
export default Navbar;
