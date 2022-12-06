import { useState } from "react";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import SelectFormInput from "../../components/SelectFormInput/SelectFormInput";
import SimpleFormInput from "../../components/SimpleFormInput/SimpleFormInput";
import useApi from "../../hooks/useApi/useApi";
import { PostStructure } from "../../types/postsTypes";
import PostFormPageStyled from "./PostFormPageStyled";
import Window from "../../components/Window/Window";

const PostFormPage = (): JSX.Element => {
  // const params = useParams();
  const { createPost } = useApi();

  const initialPostState = {
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    image: "",
  };

  const [createPostData, setCreatePostData] = useState(initialPostState);

  const handleFormValues = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCreatePostData({
      ...createPostData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const postSubmit: Partial<PostStructure> = {
      answer1: createPostData.answer1,
      answer2: createPostData.answer2,
      answer3: createPostData.answer3,
      answer4: createPostData.answer4,
      image: createPostData.image,
      day: 0,
      title: "",
    };

    await createPost(postSubmit);
  };
  return (
    <>
      <Window calendarDay={1} />

      <PostFormPageStyled onSubmit={handleSubmit}>
        <SelectFormInput />
        <div className="input">
          <span className="input__text">Have you added any ingredient?</span>
          <SimpleFormInput
            className="input__box"
            name="answer1"
            action={handleFormValues}
          />
        </div>
        <div className="input">
          <span className="input__text">Recommend a song for today’s tea:</span>
          <SimpleFormInput
            className="input__box"
            name="answer2"
            action={handleFormValues}
          />
        </div>
        <div className="input">
          <span className="input__text">Recommend a book for today’s tea:</span>
          <SimpleFormInput
            className="input__box"
            name="answer3"
            action={handleFormValues}
          />
        </div>
        <div className="input">
          <span className="input__text">How about your tea moment?</span>
          <SimpleFormInput
            className="input__box"
            name="answer4"
            action={handleFormValues}
          />
        </div>
        <FormInput
          placeholder="Add a picture"
          type="text"
          name="image"
          required={true}
          action={handleFormValues}
        />
        <Button
          type="button"
          className="form__button"
          text="Send"
          styletype="light"
        />
      </PostFormPageStyled>
    </>
  );
};

export default PostFormPage;
