import { useEffect } from "react";
import CalendarDay from "../../components/CalendarDays/CalendarDay";
import PostCard from "../../components/PostCard/PostCard";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../redux/hooks";
import CalendarPageStyled from "./CalendarPageStyled";

const CalendarPage = (): JSX.Element => {
  const { loadAllPosts } = useApi();
  const postsList = useAppSelector(({ post }) => post.list);
  const calendarDays: number[] = [];

  for (let i = 0; i < 25; i++) {
    calendarDays.push(i);
  }

  useEffect(() => {
    loadAllPosts();
  }, [loadAllPosts]);

  return (
    <CalendarPageStyled>
      <h2 className="title">Let’s open today’s window!</h2>

      <div className="days">
        {calendarDays.map((day) => {
          const post = postsList.find((postDay) => postDay.day === day);

          return post ? (
            <PostCard post={post} key={post.day} />
          ) : (
            <CalendarDay key={day} calendarDay={day} />
          );
        })}
      </div>
    </CalendarPageStyled>
  );
};

export default CalendarPage;
