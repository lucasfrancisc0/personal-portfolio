import { ButtonReceive } from "@/components/ButtonReceive";
import { PresentationContainer, TitleContent, ImageProfileContainerMobile, OverlayImageBackground, ButtonNetworkSet, 
  ImageProfileContainerDesktop } from "./styles";

import PhotoPerfil from "@/assets/photo-example.png";

import { HiOutlineDownload } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { Header } from "@/components/Header";
import { NavigationScroll } from "@/components/NavigationScroll";
import { useState } from "react";
import { ButtonNetwork } from "@/components/ButtonNetwork";

export function Presentation() {
  const [ menuIsOpen, setMenuIsOpen ] = useState<boolean>(false);
  

  function onChangeMenu() {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);
    return;
  };


  return (
    <PresentationContainer>

      
      <Header
        data-menu-is-open={menuIsOpen}
        onChangeMenu={onChangeMenu}
      />

      <NavigationScroll
        data-menu-is-open={menuIsOpen}
      />

      <TitleContent>
        <div id="textDiv">
          <h2>Lucas Francisco</h2>
          <h1>Desenvolvedor Web Full Stack</h1>


          <ImageProfileContainerMobile>
            <img src={PhotoPerfil} alt="Foto do usuário"/>
            <OverlayImageBackground/>
          </ImageProfileContainerMobile>

          <p>
            Minha missão é desvendar complexidades com maestria, 
            criando soluções refinadas e inspiradoras para um mundo interconectado.
          </p>

          <ButtonReceive
            title="Download CV"
            icon={HiOutlineDownload}
          />

          <ButtonNetworkSet>
            <ButtonNetwork
              icon={FaLinkedinIn}
            />

          <ButtonNetwork
              icon={FaGithub}
            />
          </ButtonNetworkSet>
        </div>

        <ImageProfileContainerDesktop>
            <img src={PhotoPerfil} alt="Foto do usuário"/>
            <OverlayImageBackground/>
        </ImageProfileContainerDesktop>

      </TitleContent>

    </PresentationContainer>
  );
};