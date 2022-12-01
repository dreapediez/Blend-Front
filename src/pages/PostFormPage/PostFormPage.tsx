import FormInput from "../../components/FormInput/FormInput";
import FormStyled from "../../styles/FormStyled";

const PostFormPage = (): JSX.Element => {
  return (
    <FormStyled>
      <form onSubmit={() => {}}>
        Have you added any ingredient?
        <FormInput
          placeholder=""
          type="text"
          name="answer1"
          required={true}
          action={() => {}}
        />
        Recommend a song for today’s tea:
        <FormInput
          placeholder=""
          type="text"
          name="answer2"
          required={true}
          action={() => {}}
        />
        Recommend a book for today’s tea:
        <FormInput
          placeholder=""
          type="text"
          name="answer3"
          required={true}
          action={() => {}}
        />
        How about your tea moment?
        <FormInput
          placeholder=""
          type="textarea"
          name="answer4"
          required={true}
          action={() => {}}
        />
        <FormInput
          placeholder="Add a picture"
          type="text"
          name="image"
          required={true}
          action={() => {}}
        />
      </form>
    </FormStyled>
  );
};

export default PostFormPage;
