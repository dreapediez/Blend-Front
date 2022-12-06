import styled from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";
import mainStyleFonts from "../../styles/mainStyleFonts";

const PostPreviewStyled = styled.div`
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
    height: 350px;
    width: 430px;
    flex-direction: row;
    justify-content: space-around;
  }

  .post {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 950px) {
      height: 320px;
      width: 200px;
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
      @media only screen and (min-width: 950px) {
        margin-top: 20px;
      }

      &__day {
        font-family: ${mainStyleFonts.mainFont};
        font-weight: ${mainStyleFonts.mainFontBold};
        color: ${mainStyleColors.secondaryColor};
        font-size: 4rem;
        margin: 10px;
        @media only screen and (min-width: 950px) {
          margin: 0;
        }
      }
      &__text {
        font-weight: ${mainStyleFonts.mainFontBold};
        color: ${mainStyleColors.secondaryColor};
        font-size: 2rem;

        @media only screen and (min-width: 950px) {
          font-size: 1.5rem;
          width: 80px;
        }
      }
    }
    &-answer {
      display: flex;
      flex-direction: column;
      text-align: left;
      @media only screen and (min-width: 950px) {
        margin-top: 15px;
        height: 250px;
      }

      &__text {
        margin: 10px 0;
        @media only screen and (min-width: 950px) {
          width: 150px;
        }
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

  .post-detail {
    margin-right: 78px;
    color: ${mainStyleColors.secondaryColor};
    font-weight: ${mainStyleFonts.secondaryFontBold};
    @media only screen and (min-width: 950px) {
      width: 200px;
      font-size: 0.9rem;
      margin-top: 20px;
    }
  }

  .complements {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 950px) {
      height: 320px;
    }

    &__image {
      width: 280px;
      height: 300px;
      object-fit: cover;
      margin-top: 10px;

      @media only screen and (min-width: 950px) {
        width: 180px;
        height: 320px;
        justify-content: space-between;
        margin: 0;
      }
    }

    &__buttons {
      margin-top: 20px;
      display: flex;
      width: 300px;
      justify-content: space-evenly;

      @media only screen and (min-width: 950px) {
        width: 180px;
        justify-content: space-between;
      }
    }
  }
`;

export default PostPreviewStyled;
