import Image from "next/image";
import Ned from "../public/needle.svg";
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Resizable } from "re-resizable";
import { Gauge } from "./gauge";
/** @jsxImportSource @emotion/react */
const GlobalStyle = css(`
overflow:hidden;

box {
  position:relative;
  display: flex;
  justify-content: space-between;
  width: 99%;
  height: 80px;
  background: red;
}

box1 {
  min-width: 100px;
  background: rgb(41, 143, 148);
}
box2 {
  position: relative;
  width: 40%;
  min-width: 0px;
  background: rgb(58, 176, 21);
}
box3 {
  min-width: 100px;
  background: rgb(135, 18, 150);
}
.container {
  background-color: grey;
  position: relative;
  bottom:0;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
}
`);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const LeftDiv = styled.div`
  flex: 1;
  background-color: #2980b9;
`;

const RightDiv = styled.div`
  overflow: hidden;
  margin-left: 20px;
  background-color: skyblue;
  height: 100%;
  ~ div .handle:hover {
    background: yellow !important;
  }
`;
const RightDiv2 = styled.div`
  width: calc(100% - 20px);
  height: 100%;
  margin-left: 20px;
  position: absolute;
  top: 50px;
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 100%;
`;
const Needle = styled.embed`
  height: 50%;
`;

export const TestUI = () => {
  return (
    <Container css={GlobalStyle}>
      <LeftDiv />
      <Resizable
        defaultSize={{ width: "50%", height: "100%" }}
        minWidth={"20px"}
        maxWidth={"100%"}
        enable={{
          top: false,
          right: false,
          bottom: false,
          left: true,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
        handleStyles={{
          left: {
            width: "20px",
            height: "100%",
            left: "0px",
            backgroundColor: "#d1d5db",
          },
        }}
        handleClasses={{
          left: "handle",
        }}
      >
        <RightDiv2>
          <div className="container">
            <Gauge />
          </div>
        </RightDiv2>
        <RightDiv
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <box>
            <box1></box1>
            <box2></box2>
            <box3></box3>
          </box>
          <box>
            <box1></box1>
            <box2></box2>
            <box3></box3>
          </box>
        </RightDiv>
      </Resizable>
    </Container>
  );
};
