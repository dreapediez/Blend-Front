import { ButtonStyled, LinkStyled } from "./ButtonStyled";
import { BsPlusCircle } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
interface ButtonProps {
  styletype: "dark" | "light" | "darkSmall" | "lightSmall";
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
            {name === "post" && <BsPlusCircle className="icon" width="100" />}
            {name === "delete" && <FaRegTrashAlt className="icon" />}
            {name === "modify" && <HiOutlinePencilAlt className="icon" />}
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
