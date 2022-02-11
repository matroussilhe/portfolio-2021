import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  FlexColumnSpacer,
  Image,
  Text,
  TextLegend,
} from "@components";
import {
  TopImageBottomParagraph,
} from "@services";

export type SectionContentTopImageBottomParagraphProps = {
  index: number;
  content: TopImageBottomParagraph;
};

export const SectionContentTopImageBottomParagraph: FunctionComponent<SectionContentTopImageBottomParagraphProps> = ({
  index,
  content,
}) => {
  return (
    <FlexColumnSpacer
      leftColumnWidth={"col12.3"}
      centerColumnWidth={"col12.9"}>
      <Flex
        sx={{
          mb: 8,
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
        <Box
          sx={{
            width: "col12.12",
            mb: 8,
          }}>
          <Flex
            sx={{
              flexDirection: "column",
            }}>
            <Image
              src={content.image}
              sx={{
                mb: 1,
              }}
            />
            <TextLegend>
              {content.legend}
            </TextLegend>
          </Flex>
        </Box>
        <Box
          sx={{
            width: "col12.8",
          }}>
          <Text
            variant={"body1"}
            sx={{
              whiteSpace: "pre-wrap",
            }}>
            {content.paragraph}
          </Text>
        </Box>
        <Box sx={{
          width: "col12.4",
        }}
        />
      </Flex>
    </FlexColumnSpacer>
  );
};
