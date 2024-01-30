"use client";

import { GlobalStyle } from "@/style/global";
import { StyledDiv } from "./style";
import Image from "next/image";
import map from "../../public/map.svg";
import teambuilder from "../../public/teambuilder.svg";
import battlesimulator from "../../public/battlesimulator.svg";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>
        <div className="buttons">
          <a href="">
            <Image src={teambuilder} alt="" />
          </a>
          <a href="">
            <Image src={map} alt="" />
          </a>
          <a href="">
            <Image src={battlesimulator} alt="" />
          </a>
        </div>
      </StyledDiv>
    </>
  );
}
