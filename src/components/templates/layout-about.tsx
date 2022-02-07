import React, { Fragment, FunctionComponent } from "react";

import {
  Box,
  Flex,
  Navbar,
  SectionInformation,
  SectionPhoto,
} from "@components";
import {
  Bio,
  Expertise,
  Interest,
  Skill,
  Social,
} from "@services";

export type LayoutAboutProps = {
  bio: Bio;
  expertise: Expertise;
  skills: Skill[];
  interests: Interest[];
  socials: Social[];
};

export const LayoutAbout: FunctionComponent<LayoutAboutProps> = ({
  bio,
  expertise,
  skills,
  interests,
  socials,
}) => {
  return (
    <Fragment>
      <Navbar
        iconColor={"surface"}
        workCount={4}
      />
      <Flex
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
        <Box
          sx={{
            width: ["col12.6"],
          }}>
          <SectionPhoto/>
        </Box>
        <Box
          sx={{
            width: ["col12.6"],
          }}>
          <SectionInformation
            bio={bio}
            expertise={expertise}
            skills={skills}
            interests={interests}
            socials={socials}
          />
        </Box>
      </Flex>
    </Fragment>
  );
};
