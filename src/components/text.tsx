import React, { FunctionComponent, useMemo } from "react";

import { ResponsiveStyleValue, Text as ThemeUIText, TextProps as ThemeUITextProps } from "theme-ui";

import { useResponsiveProp } from "@hooks/responsive";

export type TextProps = ThemeUITextProps & {
  variant?: ResponsiveStyleValue<string>;
};

export const Text: FunctionComponent<TextProps> = ({
  variant = "body1",
  ...rest
}) => {
  const responsiveProp = useResponsiveProp();

  const responsiveVariant = useMemo(() => responsiveProp(variant), [variant, responsiveProp]);

  return (
    <ThemeUIText
      variant={responsiveVariant}
      {...rest}/>
  );
};
