import styled from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";

const CalendarPageStyled = styled.div`
  .days {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
  }

  .day:nth-child(1) {
    background-color: ${mainStyleColors.neutralColor};
    border: none;
  }
`;

export default CalendarPageStyled;
