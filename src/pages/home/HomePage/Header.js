import React from "react";
import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";
import headerImage from "../../../Assets/Img/header.svg"; // Adjust the path as needed
const HeaderWrapper = styled.header`
  background-color: #0a0b1c;
  min-height: 100vh;
  width: 100%;
  position: relative;
  padding-top: 24px;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding-top: 16px;
    min-height: auto;
  }
`;

const HeaderContent = styled.div`
  padding: clamp(20px, 5vw, 80px);
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(24px, 4vw, 40px);
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    gap: 16px;
  }
`;

const LeftSection = styled.div`
  color: white;
  max-width: 600px;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;

const MainHeading = styled.h1`
  font-size: clamp(32px, 5vw, 64px);
  font-weight: 700;
  margin-bottom: clamp(16px, 2vw, 24px);
  color: white;
  line-height: 1.1;

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 12px;
  }
`;

const SubHeading = styled.p`
  font-size: clamp(14px, 2vw, 20px);
  line-height: 1.5;
  margin-bottom: clamp(24px, 4vw, 40px);
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: clamp(12px, 2vw, 20px);
  align-items: center;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }
`;

const PrimaryButton = styled.button`
  background: #7b3fe4;
  color: white;
  padding: clamp(12px, 2vw, 16px) clamp(24px, 3vw, 32px);
  border: none;
  border-radius: 30px;
  font-size: clamp(14px, 1.5vw, 16px);
  cursor: pointer;
  transition: background 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #6532c0;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px 24px;
    font-size: 14px;
  }
`;

const SecondaryButton = styled.a`
  color: white;
  text-decoration: underline;
  padding: clamp(12px, 2vw, 16px) 0;
  font-size: clamp(14px, 1.5vw, 16px);
  cursor: pointer;
  white-space: nowrap;

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    padding: 12px 0;
    font-size: 14px;
  }
`;

const RightSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 1024px) {
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 529px;
  aspect-ratio: 529/417;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
    aspect-ratio: 1/1;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar />
      <HeaderContent>
        <LeftSection>
          <MainHeading>Elite, Vetted Developers on Demand</MainHeading>
          <SubHeading>
            Connect with top software developers from around the globe,
            meticulously vetted by industry experts for the skills, reliability
            and innovation your projects need.
          </SubHeading>
          <ButtonGroup>
            <PrimaryButton>Request Candidates</PrimaryButton>
            <SecondaryButton href="#">Book a Quick Call</SecondaryButton>
          </ButtonGroup>
        </LeftSection>
        <RightSection>
          <ImageContainer>
            <img
              src={headerImage}
              alt="hero image"
              loading="eager"
              width="529"
              height="417"
              decoding="async"
            />
          </ImageContainer>
        </RightSection>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
