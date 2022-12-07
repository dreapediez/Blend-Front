import { useEffect, useMemo, useState } from "react";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import SelectFormInput from "../../components/SelectFormInput/SelectFormInput";
import SimpleFormInput from "../../components/SimpleFormInput/SimpleFormInput";
import useApi from "../../hooks/useApi/useApi";
import { PostStructure } from "../../types/postsTypes";
import PostFormPageStyled from "./PostFormPageStyled";
import Window from "../../components/Window/Window";
import windows from "../../components/Window/windows";
import { WindowStructure } from "../../types/calendarTypes";
import { useAppSelector } from "../../redux/hooks";
import { ReactComponent as NewPost } from "../../assets/new-post.svg";

const PostFormPage = (): JSX.Element => {
  const { createPost, loadAllPosts } = useApi();
  const posts = useAppSelector((action) => action.post.list);

  const initialPostState = {
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    image: "",
    day: 0,
  };

  const [createPostData, setCreatePostData] = useState(initialPostState);
  const [windowData, setWindowData] = useState<WindowStructure>(
    {} as WindowStructure
  );
  const [windowsData, setWindowsData] = useState<WindowStructure[]>([]);

  const handleFormValues = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.name === "days") {
      const day = +event.target.value;
      const window = windows.find((window) => window.day === day);

      setWindowData(window!);

      if (day === 0) return;

      setCreatePostData({
        ...createPostData,
        day,
      });
      return;
    }

    setCreatePostData({
      ...createPostData,
      [event.target.name]: event.target.value,
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
      day: createPostData.day,
      title: windowData.title,
    };

    await createPost(postSubmit);
  };

  useMemo(() => {
    const newWindows = windows.filter(
      (window) => !posts.find((post) => post.day === window.day)
    );
    setWindowsData(newWindows);
  }, [posts]);

  useEffect(() => {
    loadAllPosts();
  }, [loadAllPosts]);

  return (
    <PostFormPageStyled onSubmit={handleSubmit}>
      {!windowData?.title ? <NewPost /> : <Window {...windowData} />}
      <SelectFormInput action={handleFormValues} windows={windowsData} />
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
        action={handleFormValues}
      />
      <Button
        type="button"
        className="form__button"
        text="Send"
        styletype="light"
      />
    </PostFormPageStyled>
  );
};

export default PostFormPage;
