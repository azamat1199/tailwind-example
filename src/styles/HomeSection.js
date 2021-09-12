import styled from "styled-components";

const StyledBox = styled.div`
  .boxes {
    justify-content: space-evenly;
  }
  .below-carousel {
    background: #ffffff;
    border: 1.5px solid #eeeeee;
    box-sizing: border-box;
    border-radius: 30px;
  }
  .home-img {
    min-width: 1296px;
  }
  .share {
    width: 150px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    color: #878787;
  }
  .box-one {
    &__img {
      position: relative;
      h5 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        position: absolute;
        line-height: 17px;
        color: #ffffff;
        background: #494848;
        right: 760px;
        border-radius: 5px;
        left: 200px;
        top: 12px;
        width: 41px;
      }
    }
  }
  .girl {
    margin-right: 110px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #878787;
  }
  .price {
    .five {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #878787;
      margin-left: 11px;
    }
    .seven {
      margin-left: 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      color: #b7b6b6;
    }
  }
  .watch {
    background: #ffffff;
    border: 1.5px solid #c4c4c4;
    box-sizing: border-box;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: rgba(196, 196, 196, 0.9);
    border-radius: 8px;
    width: 111px;
    height: 40px;
    margin-left: 11px;
  }
  .korzina {
    background: #00a9c8;
    border-radius: 8px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
    width: 110px;
    margin-left: 16px;
    height: 40px;
    border: none;
  }
`;

export { StyledBox };
