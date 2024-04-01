import { NavigationScrollContainer, NavigationList } from "./styles";

export interface NavigationScrollProps {
  "data-menu-is-open": boolean
}

export function NavigationScroll({
  "data-menu-is-open": dataMenuIsOpen,
}: NavigationScrollProps ) {
  return (
    <NavigationScrollContainer
      data-menu-is-open={dataMenuIsOpen}
    >
      <NavigationList>
        <li>
          <a>SERVIÇOS</a>
        </li>
        <li>
          <a>PROJETOS</a>
        </li>
        <li>
          <a>SOBRE</a>
        </li>
        <li>
          <a>SKILLS</a>
        </li>
        <li>
          <a>CONTATO</a>
        </li>
      </NavigationList>

    </NavigationScrollContainer>
  )
};