import useApi from "../../hooks/useApi/useApi";
import { PostStructure } from "../../types/postsTypes";
import Button from "../Button/Button";
import PostCardStyled from "./PostCardStyled";

interface PostCardProps {
  post: PostStructure;
}

const PostCard = ({
  post: { day, title, answer1, answer2, answer3, answer4, image, id },
}: PostCardProps): JSX.Element => {
  const { deletePost } = useApi();

  return (
    <PostCardStyled>
      <div className="post">
        <div className="post-title">
          <span className="post-title__day">{day}</span>
          <h2 className="post-title__text">{title}</h2>
        </div>
        <div className="post-answer">
          <h3 className="post-answer__title">Extra ingredients</h3>
          <p className="post-answer__text">{answer1}</p>
        </div>
        <div className="post-answer">
          <h3 className="post-answer__title">What to listen?</h3>
          <p className="post-answer__text">{answer2}</p>
        </div>
        <div className="post-answer">
          <h3 className="post-answer__title">What to read?</h3>
          <p className="post-answer__text">{answer3}</p>
        </div>
        <div className="post-answer">
          <h3 className="post-answer__title">Tea moment</h3>
          <p className="post-answer__text">{answer4}</p>
        </div>
      </div>
      <div className="complements">
        <img className="post__image" src={image} alt="i" />
        <div className="buttons">
          <Button
            type="button"
            className="buttons__button"
            text="Delete"
            name="delete"
            action={() => deletePost(id)}
            styletype="darkSmall"
          />
          <Button
            type="button"
            className="buttons__button"
            text="Modify"
            name="modify"
            styletype="lightSmall"
          />
        </div>
      </div>
    </PostCardStyled>
  );
};

export default PostCard;
