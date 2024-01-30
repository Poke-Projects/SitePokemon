import styled from "styled-components";

export const StyledNavBar = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 50px;
  background-color: #232949;
  border-radius: 0px 0px 128.44px 128.44px;
  height: 122px;
  border: solid 2px #dbff00;
  border-top: none;

  .image-logo {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    .image-login {
      width: 26px;
    }
    button {
      background-color: none;
      border: none;
      font-size: 26px;
      background-color: #232949;
    }
  }
`;
