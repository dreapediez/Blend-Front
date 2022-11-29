import Window from "../../components/Window/Window";
import windows from "../../components/Window/windows";
import CalendarPageStyled from "./CalendarPageStyled";

const CalendarPage = (): JSX.Element => {
  return (
    <CalendarPageStyled>
      <h2>Let’s open today’s window!</h2>
      <div className="windows">
        {windows.map((window) => (
          <Window key={window.day} {...window} />
        ))}
      </div>
    </CalendarPageStyled>
  );
};

export default CalendarPage;
