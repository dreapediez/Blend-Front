// import Window from "../../components/Window/Window";
// import { useAppSelector } from "../../redux/hooks";

import Window from "../../components/Window/Window";

const CalendarPage = (): JSX.Element => {
  // const windows = useAppSelector(({ windows }) => window.list);

  return (
    <>
      <h2>Let’s open today’s window!</h2>
      <Window />
      {/* 
      {windows.map((window) => (
        <Window post={post} key={post.answer1} />
      ))} */}
    </>
  );
};

export default CalendarPage;
