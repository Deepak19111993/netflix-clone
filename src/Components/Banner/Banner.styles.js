import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  object-fit: contain;
  height: 450px;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }
  .banner-contents {
    position: relative;
    z-index: 1;
    padding: 50px 20px 30px 20px;
    height: 190px;
    .banner-title {
      font-size: 2rem;
      font-weight: 800;
      padding-bottom: 0.3rem;
    }
    .banner-description {
      line-height: 1.3;
      font-size: 0.8rem;
      padding-top: 1rem;
      width: 45rem;
      max-width: 360px;
      height: 80px;
    }
    .banner-button {
      cursor: pointer !important;
      color: #fff;
      outline: none;
      border: none;
      font-weight: 700;
      border-radius: 0.2vw;
      padding: 1rem 2rem;
      background: rgba(51, 51, 51, 0.5);
      margin-right: 10px;
      text-transform: uppercase;
      &:hover {
        color: #000;
        background: #e6e6e6;
        transition: all 0.2s;
      }
    }
  }

  .banner-fadeBottom {
    position: absolute;
    height: 7.5rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      #111
    );
    width: 100%;
    bottom: 0;
  }
`;
