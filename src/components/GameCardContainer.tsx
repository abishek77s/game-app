import { Box } from "@chakra-ui/react";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.04)",
        transition: "transform .2.5 ease-in",
      }}
      borderRadius={4}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
