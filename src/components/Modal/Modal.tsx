import ModalStyled from "./ModalStyled";
// import { FiXOctagon } from "react-icons/fi";
// import { BsPatchCheckFill } from "react-icons/bs";
import { ReactComponent as Success } from "../../assets/success.svg";
import { ReactComponent as Error } from "../../assets/error.svg";

interface ModalProps {
  type: "error" | "success";
  text: string;
}

const Modal = ({ type, text }: ModalProps) => {
  return (
    <ModalStyled type={type}>
      <div className="modal">
        {type === "success" ? (
          <h2 className="modal__title">Well done!</h2>
        ) : (
          <h2 className="modal__title">Oops!</h2>
        )}
        <span className="modal__text">{text}</span>
        <i
          className="modal__close"
          onClick={() => {}}
          aria-label="Close modal info"
        >
          {type === "success" ? (
            <Success className="form__icon" />
          ) : (
            <Error className="form__icon" />
          )}
        </i>
      </div>
    </ModalStyled>
  );
};

export default Modal;
