import React from "react";
import { ScrollView } from "native-base";

export const ScrollBackground = ({ children }: { children: JSX.Element }) => {
  return <ScrollView backgroundColor={"amber.50"}>{children}</ScrollView>;
};
