import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import { PostStructure } from "../../types/postsTypes";
import Button from "../Button/Button";
import PostPreviewStyled from "./PostPreviewStyled";

interface PostPreviewProps {
  post: PostStructure;
}

const PostPreview = ({
  post: { day, title, answer4, image, id },
}: PostPreviewProps): JSX.Element => {
  const { deletePost } = useApi();

  return (
    <PostPreviewStyled>
      <div className="post">
        <div className="post-title">
          <span className="post-title__day">{day}</span>
          <h2 className="post-title__text">{title}</h2>
        </div>
        <div className="post-answer">
          <h3 className="post-answer__title">Tea moment</h3>
          <p className="post-answer__text">{answer4}</p>
          <Link to="/posts" className="post-detail">
            View more about this post
          </Link>
        </div>
      </div>
      <div className="complements">
        <img className="complements__image" src={image} alt="i" />
        <div className="complements__buttons">
          <Button
            type="button"
            className="buttons__button"
            text="Delete"
            name="delete"
            action={() => deletePost(id)}
            styletype="darkSuperSmall"
          />
          <Button
            type="button"
            className="buttons__button"
            text="Modify"
            name="modify"
            styletype="lightSuperSmall"
          />
        </div>
      </div>
    </PostPreviewStyled>
  );
};

export default PostPreview;
