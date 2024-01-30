import { styled } from "styled-components";
import bg from "../../public/bg.svg";

export const StyledDiv = styled.main`
  color: red;
  font-size: 18px;
  // background-image: url(/_next/static/media/bg.9ff8cd10.svg);
  background-image: url(${bg.src});
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-around;

  .buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 85%;

    gap: 200px;

    a {
      width: 400px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      img {
        width: 250px;
        height: auto;
        // transition: box-shadow 0.3s ease-in-out;
        transition: transform 0.5s ease-in-out;
        border-radius: 100%;

        &:hover {
          transform: scale(1.6);
          gap: 50px;
          box-shadow: 0 16px 24px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
`;
