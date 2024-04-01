import { HTMLAttributes } from "react";
import { ButtonReceiveContainer } from "./styles";
import { IconType } from "react-icons";

interface ButtonReceiveProps extends HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  icon?: IconType;
}

export function ButtonReceive({ 
  title,
  icon: Icon, 
  onClick,

 }: ButtonReceiveProps) {

  function handleClick(){

    onClick && onClick()

    return;
  };


  return(
    <ButtonReceiveContainer
      onClick={() => handleClick()}
    >
      {title}

      { Icon && <Icon/> }

    </ButtonReceiveContainer>
  )
};