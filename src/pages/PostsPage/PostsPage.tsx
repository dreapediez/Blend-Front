import { useEffect } from "react";
import PostCard from "../../components/PostCard/PostCard";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../redux/hooks";
import PostsPageStyled from "./PostsPageStyled";

const PostsPage = (): JSX.Element => {
  const postsList = useAppSelector(({ post }) => post.list);
  const { loadAllPosts } = useApi();

  useEffect(() => {
    loadAllPosts();
  }, [loadAllPosts]);

  return (
    <PostsPageStyled>
      {postsList.map((post) => (
        <PostCard post={post} key={post.day} />
      ))}
    </PostsPageStyled>
  );
};

export default PostsPage;
