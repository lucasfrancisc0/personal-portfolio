import { IconType } from 'react-icons';
import { ButtonNetworkContainer, Ripple } from './styles';

interface ButtonNetwork {
  icon: IconType;
}

export function ButtonNetwork({ icon: Icon }: ButtonNetwork){


  return(
    <ButtonNetworkContainer>
      <Icon/>
      <Ripple/>
    </ButtonNetworkContainer>
  )
};