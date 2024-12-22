import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import DarkModeButton from "./DarkModeButton";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="25px">
      <Link to="/">
        <Image src={logo} boxSize="40px" />
      </Link>
      <SearchInput />
      <DarkModeButton />
    </HStack>
  );
};

export default NavBar;
