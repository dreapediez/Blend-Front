import styled from "styled-components";

const LoadingStyled = styled.div`
  background-color: rgb(199, 215, 237, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .loading {
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    position: absolute;
    flex-direction: column;
    transform: translate(-50%, -50%);
    &__lines {
      opacity: 100%;
      animation: dash 2s ease infinite;
    }
    @keyframes dash {
      0% {
        opacity: 0%;
      }
      20% {
        opacity: 80%;
      }
      50% {
        opacity: 65%;
      }
      65% {
        opacity: 50%;
      }
      80% {
        opacity: 20%;
      }
      100% {
        opacity: 0%;
      }
    }
  }
`;

export default LoadingStyled;
