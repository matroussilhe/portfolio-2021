import React, { FunctionComponent, useMemo } from "react";

import {
  Flex,
  SectionContentCenterParagraph,
  SectionContentLeftImageRightParagraph,
  SectionContentLeftQuoteRightParagraph,
  SectionContentSectionTitle,
  SectionContentSubsectionTitle,
  SectionContentTopImageBottomParagraph,
  TableOfContents,
} from "@components";
import {
  Content,
  ContentSliceType,
} from "@services";

export type SectionContentProps = {
  contents: Content[];
};

export type ContentComponents = {
  [key in ContentSliceType]: FunctionComponent<any> | (() => null);
};

export type ContentIndexes = {
  [key in ContentSliceType]: number;
};

export const SectionContent: FunctionComponent<SectionContentProps> = ({
  contents,
}) => {
  const contentIndexes: ContentIndexes = {
    "section_title": 0,
    "subsection_title": 0,
    "center_paragraph": 0,
    "left_image_right_paragraph": 0,
    "top_image_bottom_paragraph": 0,
    "left_quote_right_paragraph": 0,
  };

  const contentComponents: ContentComponents = useMemo(() => {
    return {
      "section_title": SectionContentSectionTitle,
      "subsection_title": SectionContentSubsectionTitle,
      "center_paragraph": SectionContentCenterParagraph,
      "left_image_right_paragraph": SectionContentLeftImageRightParagraph,
      "top_image_bottom_paragraph": SectionContentTopImageBottomParagraph,
      "left_quote_right_paragraph": SectionContentLeftQuoteRightParagraph,
    };
  }, []);

  return (
    <Flex
      sx={{
        px: 5,
        flexDirection: "column",
        backgroundColor: "background",
      }}>
      <TableOfContents
        contents={contents}
      />
      {contents.map((content, index) => {
        // get current index by type
        const contentIndex = contentIndexes[content.type];

        // increment index by type
        contentIndexes[content.type] = ++contentIndexes[content.type];

        // get component by type
        const ContentComponent = contentComponents[content.type];

        return (
          <ContentComponent
            key={`section-content-${index}`}
            index={contentIndex}
            content={content}
          />
        );
      })}
    </Flex>
  );
};
