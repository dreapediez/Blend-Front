import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";

const daysStyle: FlattenSimpleInterpolation[] = [];
const nameBackgrounds: string[] = ["snow", "star", "clor", "bol", "car", "zeb"];

const randomBackground = () => {
  const randomIndex = Math.floor(Math.random() * nameBackgrounds.length);
  return nameBackgrounds[randomIndex];
};

for (let i = 2; i < 26; i++) {
  const DayStyle = css`
    .day:nth-child(${i}) {
      background-image: url("/assets/${randomBackground()}.png");
    }
  `;
  daysStyle.push(DayStyle);
}

const CalendarPageStyled = styled.div`
  margin-bottom: 50px;
  flex-wrap: wrap;
  .days {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 320px);
    justify-content: space-around;
    gap: 25px;

    @media only screen and (min-width: 950px) {
      grid-template-columns: repeat(4, 430px);
    }
  }

  .title {
    margin-bottom: 25px;
  }

  .day:nth-child(1) {
    background-color: ${mainStyleColors.neutralColor};
    border: none;
  }

  ${daysStyle.join("\n").replaceAll(",", "")}
`;

export default CalendarPageStyled;
