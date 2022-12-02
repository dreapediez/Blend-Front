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
          placeholder=""
          type="text"
          name="answer1"
          required={true}
          action={() => {}}
        />
      </div>
      <div className="input">
        <span className="input__text">Recommend a song for today’s tea:</span>
        <SimpleFormInput
          className="input__box"
          placeholder=""
          type="text"
          name="answer2"
          required={true}
          action={() => {}}
        />
      </div>
      <div className="input">
        <span className="input__text">Recommend a book for today’s tea:</span>
        <SimpleFormInput
          className="input__box"
          placeholder=""
          type="text"
          name="answer3"
          required={true}
          action={() => {}}
        />
      </div>
      <div className="input">
        <span className="input__text">How about your tea moment?</span>
        <SimpleFormInput
          className="input__box"
          placeholder=""
          type="textarea"
          name="answer4"
          required={true}
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
    </PostFormPageStyled>
  );
};

export default PostFormPage;
