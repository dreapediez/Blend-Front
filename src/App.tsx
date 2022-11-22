import AppStyled from "./AppStyled";
import Button from "./components/Button/Button";

const App = () => {
  return (
    <AppStyled>
      <Button
        text="Login"
        buttonType="dark"
        ariaLabel="next page"
        action={() => {}}
      />
      <Button
        text="Sign Up"
        buttonType="light"
        ariaLabel="next page"
        action={() => {}}
      />
    </AppStyled>
  );
};

export default App;
