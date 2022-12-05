import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";

const daysStyle: FlattenSimpleInterpolation[] = [];
const nameBackgrounds: string[] = ["snow", "pic", "star"];

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
  .days {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;

    @media only screen and (min-width: 950px) {
      flex-direction: row;
      gap: 50px;
      width: 700px;
      margin: 0 auto;
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
