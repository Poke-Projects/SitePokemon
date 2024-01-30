"use client";

import { GlobalStyle } from "@/style/global";
import { StyledDiv } from "./style";
import { NavBar } from "@/components/navBar/navBar";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>
        <NavBar />
      </StyledDiv>
    </>
  );
}
