import styled from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";
import mainStyleFonts from "../../styles/mainStyleFonts";

const PostCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 100%;
  border: none;
  border-radius: 4px;
  padding: 25px;
  margin: 0 auto;

  /* background-color: ${mainStyleColors.mainColor};
  background-image: url("/assets/snow.png"); */
  border: 2px solid ${mainStyleColors.accentColor};

  @media only screen and (min-width: 950px) {
    flex-direction: row;
    gap: 100px;
    width: 700px;
  }
  .post {
    @media only screen and (min-width: 950px) {
      width: 350px;
    }
    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      height: 55px;
      margin-bottom: 20px;
      width: 260px;
      gap: 15px;
      justify-content: flex-start;

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
    &-answer {
      display: flex;
      flex-direction: column;
      text-align: left;
      &__text {
        margin: 10px 0;
      }
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
