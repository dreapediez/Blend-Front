import styled from "styled-components";

const PostFormPageStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  .input {
    &__text {
      margin: 10px;
    }
  }

  .new-post {
    margin: 0 auto 30px;
  }
`;

export default PostFormPageStyled;
