import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import PostCard from "../../components/PostCard/PostCard";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../redux/hooks";
import PostDetailPageStyled from "./PostDetailPageStyled";

const PostDetailPage = (): JSX.Element => {
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
      {!currentPost ? <h2>HOLI</h2> : <PostCard post={currentPost} />}
    </PostDetailPageStyled>
  );
};

export default PostDetailPage;
