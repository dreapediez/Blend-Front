import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  buttonType: "dark" | "light" | "darkSmall" | "lightSmall";
  text: string;
  ariaLabel: string;
  action: () => void;
}

const Button = ({
  buttonType,
  text,
  ariaLabel,
  action,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      buttonType={buttonType}
      className="button"
      onClick={action}
      aria-label={ariaLabel}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
