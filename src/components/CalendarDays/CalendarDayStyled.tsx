import styled from "styled-components";
import mainStyleFonts from "../../styles/mainStyleFonts";
import mainStyleColors from "../../styles/mainStyleColors";

const CalendarDayStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${mainStyleColors.mainColor};
  min-width: 300px;
  min-height: 300px;
  border-radius: 4px;
  padding: 25px;

  .day__title {
    display: flex;
    font-family: ${mainStyleFonts.mainFont};
    font-weight: ${mainStyleFonts.mainFontBold};
    color: ${mainStyleColors.secondaryColor};
    font-size: 8.5rem;
  }

  .day__link {
    color: ${mainStyleColors.secondaryColor};
    font-size: 6.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-icon {
      font-size: 5rem;
      margin: 15px 0;
    }
    &-text {
      font-size: 2.5rem;
      font-weight: ${mainStyleFonts.mainFontBold};
    }
  }
`;

export default CalendarDayStyled;
