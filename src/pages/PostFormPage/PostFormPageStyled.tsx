import styled from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";
import mainStyleFonts from "../../styles/mainStyleFonts";

const PostFormPageStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (min-width: 650px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 80px;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon {
    margin: 10px 0 25px 0;
  }
  .input {
    &__text {
      margin: 10px;
    }
  }
  .new-post {
    margin: 0 auto 30px;
  }
  .conditions {
    width: 320px;
    font-size: 13px;
    color: ${mainStyleColors.secondaryColor};
    text-align: left;
  }

  .form-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 20px 0;
    gap: 15px;

    .form-footer__link-anchor {
      text-decoration: none;
      font-weight: ${mainStyleFonts.mainFontBold};
      color: ${mainStyleColors.secondaryColor};
      margin-left: 5px;
    }
  }
`;

export default PostFormPageStyled;
