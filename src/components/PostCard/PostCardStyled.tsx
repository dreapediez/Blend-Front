import styled from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";
import mainStyleFonts from "../../styles/mainStyleFonts";

const PostCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 100%;
  border: none;
  border-radius: 4px;
  padding: 25px;
  margin: 0 auto;
  background-color: ${mainStyleColors.mainColor};
  background-image: url("/assets/snow.png");
  @media only screen and (min-width: 950px) {
    flex-direction: row;
    gap: 100px;
    width: 800px;
  }

  .post-title {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 55px;
    margin-bottom: 20px;

    &__day {
      font-family: ${mainStyleFonts.mainFont};
      font-weight: ${mainStyleFonts.mainFontBold};
      color: ${mainStyleColors.secondaryColor};
      font-size: 4rem;
      margin: 10px;
    }
    &__text {
      font-weight: ${mainStyleFonts.mainFontBold};
      color: ${mainStyleColors.secondaryColor};
      font-size: 2rem;
    }
  }

  .post-answer {
    display: flex;
    flex-direction: column;
    text-align: left;
    &__text {
      margin: 10px 0;
    }
  }

  h3 {
    font-family: ${mainStyleFonts.secondaryFont};
    font-weight: ${mainStyleFonts.secondaryFontBold};
    color: ${mainStyleColors.accentLightColor};
    text-align: left;
    margin: 10px 0 0 0;
  }

  .complements {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .post__image {
    width: 280px;
    height: 300px;
    object-fit: cover;
    margin-top: 10px;
  }

  .buttons {
    margin-top: 25px;
    display: flex;
    width: 300px;
    justify-content: space-evenly;
  }
`;

export default PostCardStyled;
