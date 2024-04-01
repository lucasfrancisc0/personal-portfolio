import styled from "styled-components";

export const ButtonReceiveContainer = styled.button`
  width: max-content;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .4rem;

  padding: 1.7rem 3.5rem;

  border-radius: 10rem;
  border: none;

  background: transparent;

  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.colors["purple-100"]};

  transition: .3s;
  
  font-size: ${props => props.theme["font-size"].xs};
  font-weight: ${props => props.theme["font-weight"].medium};
  
  letter-spacing: 1px;
  line-height: 1px;
  
  color: ${props => props.theme.colors["purple-100"]};
  
  &:hover{
    transition: .3s;
    background: ${props => props.theme.colors["purple-100"]};

    color: ${props => props.theme.colors["white-100"]};
  }

  > svg {
    width: 1.8rem;
    height: 1.8rem;
  }     

`;