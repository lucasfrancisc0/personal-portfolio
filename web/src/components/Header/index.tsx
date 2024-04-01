import { ButtonSend } from "../ButtonSend";
import { HeaderContainer, ContactMailLink, MenuScroll, NavigationButton } from "./styles";

import ThemeLogo from "@/assets/theme-logo.svg"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { NavigationBar } from "../NavigationBar";


interface HeaderProps {
  "data-menu-is-open": boolean;
  onChangeMenu: () => void;
};


export function Header({ 

  "data-menu-is-open": dataMenuIsOpen,
  onChangeMenu,

}: HeaderProps) {

  function handleOnChangeMenu(): void {
    onChangeMenu();
    return;
  };

  return(
    <HeaderContainer>

      <ContactMailLink>
        <img src={ThemeLogo}/>
        <a>lucas@gmail.com</a>
      </ContactMailLink>

      <NavigationButton>

        <NavigationBar/>

        <ButtonSend
          title="Contate-me"
        />

      </NavigationButton>

      <MenuScroll
        onClick={() => handleOnChangeMenu()}
      >
        {dataMenuIsOpen ? <HiXMark/> : <HiOutlineMenuAlt3/>}
      </MenuScroll>

    </HeaderContainer>
  );
};