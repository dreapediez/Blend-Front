import styled from "styled-components";

const PostFormPageStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (min-width: 650px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 80px;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon {
    margin: 10px 0 25px 0;
  }
  .input {
    &__text {
      margin: 10px;
    }
  }

  .new-post {
    margin: 0 auto 30px;
  }
  .form__button {
    margin-top: 20px;
  }
`;

export default PostFormPageStyled;
