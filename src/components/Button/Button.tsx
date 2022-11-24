import { ButtonStyled, LinkStyled } from "./ButtonStyled";

interface ButtonProps {
  styletype: "dark" | "light" | "darkSmall" | "lightSmall";
  type: "submit" | "button" | "link";
  text: string;
  className?: string;
  action?: () => void;
  to?: string;
}

const Button = ({
  className,
  styletype,
  type,
  text,
  action,
  to = "",
}: ButtonProps): JSX.Element => {
  return (
    <>
      {type !== "link" ? (
        <ButtonStyled
          styletype={styletype}
          className={className}
          onClick={action}
        >
          {text}
        </ButtonStyled>
      ) : (
        <LinkStyled styletype={styletype} className={className} to={to}>
          {text}
        </LinkStyled>
      )}
    </>
  );
};

export default Button;
