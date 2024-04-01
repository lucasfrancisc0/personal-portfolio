import styled from "styled-components";

export const NavigationBarContainer = styled.nav`
  display: none;

  > ul {
    display: flex;
    gap: 2rem;
    list-style: none;

    padding-top: 3px;

     li button {
      cursor: pointer;
      background: none;
      border: none;

      display: flex;
      flex-direction: column-reverse;

      gap: .2rem;

      position: relative;

      font-size: ${props => props.theme["font-size"].xs};
      font-weight: ${props => props.theme["font-weight"].medium};

      color: ${props => props.theme.colors["white-200"]};

      &::before {
        content: "";
        width: 100%;
        height: 2px;
        border-radius: 4px;

        background: linear-gradient(260deg, #2a1454 0%, #8750f7 100%);

        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
      }

      &:hover {
        transition: .3s ease-in-out;
        color: ${props => props.theme.colors["white-100"]};
      }

      &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
      }
    }


  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    display: block;
  }
`;