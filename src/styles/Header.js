import styled from "styled-components";

const StyledNavBar = styled.div`
  background-color: #9ecdd6;
  .nav-Bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navBar-link {
      align-items: center !important;
      display: flex;
      justify-content: space-between;
      width: 700px;
      align-items: center;
    }
  }
  .nav-Link {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledFooter = styled.div`
  .below-logo {
    cursor: pointer;
  }
  .homeFoot {
    font-size: 11px !important;
    justify-content: space-between !important;
    align-items: center !important;
    padding: 25px;
  }
  .info {
    width: 472px;
    text-align: initial;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
  }
  .fab {
    font-size: 32px;
    color: white;
    cursor: pointer;
    margin-left: 15px;
  }
`;

export { StyledNavBar, StyledFooter };
