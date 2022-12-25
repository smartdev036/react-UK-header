import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <Logo>
        <a href="/">
          <img src="/images/Tree.png" alt="" />
        </a>
      </Logo>
      <NavMenu>
        <a href="/">
          <span>Home</span>
        </a>
        <a href="/vip" class="prism-member-show"> <span> Vip</span></a>
        <a href="#prism-ajax-register" class="prism-member-hide"> <span> register</span></a>
        <a href="#prism-ajax-login" class="prism-member-hide"> <span> login</span></a>
        <a href="#prism-ajax-member-profile" class="prism-member-show"> <span> Profile</span></a>
        <a href="javascript:prism_kit.user_logout();void(0)" class="prism-member-show"> <span> logout</span></a>
      </NavMenu>
      <Wrap>Hi</Wrap>
    </Container>
  );
};

//Styled-Components

const Container = styled.div`
  position: fixed;
  background-color: #000;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  z-index: 1000;
`;

const Logo = styled.a`
  /* padding: 0; */
  width: 80px;
  /* font-size: 0; */
  /* display: inline-block; */
  align-items: center;

  a {
    cursor: auto;
    img {
      /* display: flex; */
      width: 90%;
      border-radius: 50px;
      /* align-items: center; */
    }
  }
`;

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  margin-right: auto;
  margin-left: auto;
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 30px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 12px;

    span {
      color: rgb(249, 249, 249);
      font-size: 18px;
      letter-spacing: 1px;
      line-height: 1.08;
      padding: 1px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 548px) {
    display: none;
  }
`;

const Login = styled.a`
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 16px;
  margin-right: 45px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export default Header;
