import { Box, Spinner } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};
