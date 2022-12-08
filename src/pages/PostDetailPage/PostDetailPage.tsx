import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as NotPost } from "../../assets/post.svg";
import Header from "../../components/Header/Header";
import PostCard from "../../components/PostCard/PostCard";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../redux/hooks";
import PostDetailPageStyled from "./PostDetailPageStyled";

const PostDetailPage = (): JSX.Element => {
  const snowFlakes: string[] = [];

  for (let i = 0; i < 50; i++) {
    snowFlakes.push("snowflake");
  }

  const postsList = useAppSelector(({ post }) => post.list);
  const { loadOnePost } = useApi();
  const { idPost } = useParams();

  useEffect(() => {
    loadOnePost(idPost!);
  }, [loadOnePost, idPost]);

  const currentPost = postsList.find((post) => post.id === idPost);

  return (
    <PostDetailPageStyled>
      <Header />
      <h2 className="title">Today's post is amazing... Congratulations!</h2>
      {!currentPost ? (
        <div className="not-found">
          <NotPost className="not-found__icon" data-testid="logo-icon" />
          <span className="not-found__link">
            Do you want some tea?
            <Link to="/calendar" className="not-found__link-anchor">
              Back to Calendar
            </Link>
          </span>
        </div>
      ) : (
        <PostCard post={currentPost} />
      )}
      <div className="form-footer">
        <span className="form-footer__link">
          Do you want another tea?
          <Link to="/calendar" className="form-footer__link-anchor">
            Back Calendar
          </Link>
        </span>
      </div>
    </PostDetailPageStyled>
  );
};

export default PostDetailPage;
