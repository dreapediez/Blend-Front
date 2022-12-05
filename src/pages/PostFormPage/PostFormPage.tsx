import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import SimpleFormInput from "../../components/SimpleFormInput/SimpleFormInput";
import PostFormPageStyled from "./PostFormPageStyled";

const PostFormPage = (): JSX.Element => {
  return (
    <PostFormPageStyled>
      <div className="input">
        <span className="input__text">Have you added any ingredient?</span>
        <SimpleFormInput
          className="input__box"
          name="answer1"
          action={() => {}}
        />
      </div>
      <div className="input">
        <span className="input__text">Recommend a song for today’s tea:</span>
        <SimpleFormInput
          className="input__box"
          name="answer2"
          action={() => {}}
        />
      </div>
      <div className="input">
        <span className="input__text">Recommend a book for today’s tea:</span>
        <SimpleFormInput
          className="input__box"
          name="answer3"
          action={() => {}}
        />
      </div>
      <div className="input">
        <span className="input__text">How about your tea moment?</span>
        <SimpleFormInput
          className="input__box"
          name="answer4"
          action={() => {}}
        />
      </div>
      <FormInput
        placeholder="Add a picture"
        type="text"
        name="image"
        required={true}
        action={() => {}}
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
