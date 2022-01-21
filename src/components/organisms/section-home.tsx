import React, { FunctionComponent } from "react";

import {
  Flex,
  SectionFooterHome,
  SectionIntroductionHome,
} from "@components";

export type SectionHomeProps = {};

export const SectionHome: FunctionComponent<SectionHomeProps> = () => {
  return (
    <Flex
      sx={{
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#F2F2F2", // TODO: add color to theme (color/on-color pair)
      }}>
      <Flex
        sx={{
          height: "100px",
        }}
      />
      <Flex
        sx={{
          flex: "1 0 auto",
        }}>
        <SectionIntroductionHome/>
      </Flex>
      <Flex
        sx={{
          height: "100px",
        }}>
        <SectionFooterHome/>
      </Flex>
    </Flex>
  );
};
