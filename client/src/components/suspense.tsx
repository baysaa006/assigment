import { Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";

const RenderRoutes = ({ children }: any) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
};

export default RenderRoutes;
