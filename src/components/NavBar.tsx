import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import DarkModeButton from "./DarkModeButton";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="25px">
      <Image src={logo} boxSize="40px" />
      <SearchInput />
      <DarkModeButton />
    </HStack>
  );
};

export default NavBar;
