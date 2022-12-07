import { ButtonStyled, LinkStyled } from "./ButtonStyled";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
interface ButtonProps {
  styletype:
    | "dark"
    | "light"
    | "darkSmall"
    | "lightSmall"
    | "darkSuperSmall"
    | "lightSuperSmall";
  type: "submit" | "button" | "link";
  text: string;
  className?: string;
  action?: () => void;
  to?: string;
  name?: string;
}

const Button = ({
  className,
  styletype,
  type,
  text,
  name,
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
          <span className="box">
            {name === "delete" && (
              <FaRegTrashAlt className="icon" data-testid="trash" />
            )}
            {name === "modify" && (
              <HiOutlinePencilAlt className="icon" data-testid="modify" />
            )}
            {text}
          </span>
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
