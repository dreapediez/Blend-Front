import styled from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";

const PostDetailPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 50px;

  .day:nth-child(1) {
    background-color: ${mainStyleColors.neutralColor};
    border: none;
  }
`;

export default PostDetailPageStyled;
