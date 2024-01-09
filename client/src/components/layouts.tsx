import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <Flex
      className="dark bg-navy-900 text-white"
      minHeight="100vh"
      width="100%"
      alignItems="center"
      justifyContent="top"
      flexDirection="column"
    >
      {children}
    </Flex>
  );
}
