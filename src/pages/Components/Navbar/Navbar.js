import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Img/logo.webp";

const NavWrapper = styled.nav`
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 20px 40px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Logo = styled(Link)`
  img {
    height: 32px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    background: #0a0b1c;
    padding: 80px 20px;
    transition: right 0.3s ease;
    z-index: 998;
  }
`;

const MobileNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 999;
    padding: 10px;
  }
`;

const HamburgerIcon = styled.div`
  width: 24px;
  height: 2px;
  background: ${({ isOpen }) => (isOpen ? "transparent" : "white")};
  position: relative;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 2px;
    background: white;
    transition: all 0.3s ease;
  }

  &::before {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg)" : "translateY(-8px)"};
  }

  &::after {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg)" : "translateY(8px)"};
  }
`;

const MobileButtonGroup = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const ApplyButton = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 24px;
  background: #0a0b1c;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: #7b3fe4;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const HireButton = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 8px 24px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: #0a0b1c;
    border-color: white;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavWrapper>
      <Logo to="/">
        <img src={logo} alt="remoteBase" />
      </Logo>

      <NavLinks>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/guides">Guides</NavLink>
        <NavLink to="/podcasts">Podcasts</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/perks">Perks</NavLink>
      </NavLinks>

      <ButtonGroup>
        <ApplyButton to="/apply">Apply as a Developer</ApplyButton>
        <HireButton to="/hire">
          Hire Developers
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </HireButton>
      </ButtonGroup>

      <HamburgerButton onClick={toggleMenu}>
        <HamburgerIcon isOpen={isOpen} />
      </HamburgerButton>

      <MobileMenu isOpen={isOpen}>
        <MobileNavLink to="/blog" onClick={toggleMenu}>
          Blog
        </MobileNavLink>
        <MobileNavLink to="/guides" onClick={toggleMenu}>
          Guides
        </MobileNavLink>
        <MobileNavLink to="/podcasts" onClick={toggleMenu}>
          Podcasts
        </MobileNavLink>
        <MobileNavLink to="/jobs" onClick={toggleMenu}>
          Jobs
        </MobileNavLink>
        <MobileNavLink to="/perks" onClick={toggleMenu}>
          Perks
        </MobileNavLink>

        <MobileButtonGroup>
          <ApplyButton to="/apply" onClick={toggleMenu}>
            Apply as a Developer
          </ApplyButton>
          <HireButton to="/hire" onClick={toggleMenu}>
            Hire Developers
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </HireButton>
        </MobileButtonGroup>
      </MobileMenu>
    </NavWrapper>
  );
};

export default Navbar;
