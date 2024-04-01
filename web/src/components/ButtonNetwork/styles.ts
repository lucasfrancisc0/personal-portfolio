import styled from "styled-components";

export const ButtonNetworkContainer = styled.button`
  position: relative;

  cursor: pointer;

  width: 4.4rem;
  height: 4.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: none;

  border-color: ${props => props.theme.colors["purple-100"]};
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;

  > svg {
    width: 2rem;
    height: 2rem;

    color: ${props => props.theme.colors["purple-100"]};
  }

  &:hover {
    transition: .3s;

    svg {
      color: ${props => props.theme.colors["white-100"]};;
    }

    div {
      transform: scale(1);
    }
  }
`;

export const Ripple = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  background: ${props => props.theme.colors["purple-100"]};
  z-index: -1;

  transform: scale(0);

  transition: .3s ease-in-out;
`;