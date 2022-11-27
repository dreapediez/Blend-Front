import ModalStyled from "./ModalStyled";
import { ReactComponent as Success } from "../../assets/success.svg";
import { ReactComponent as Error } from "../../assets/error.svg";
import { useAppDispatch } from "../../redux/hooks";
import { hideModalActionCreator } from "../../redux/features/uiSlice/uiSlice";

interface ModalProps {
  type: "error" | "success";
  text: string;
}

const Modal = ({ type, text }: ModalProps) => {
  const dispatch = useAppDispatch();

  const hideModal = () => {
    dispatch(hideModalActionCreator());
  };
  return (
    <ModalStyled type={type}>
      <div className="modal">
        <h2 className="modal__title">
          {type === "success" ? "Well done!" : "Oops!"}
        </h2>
        <span className="modal__text">{text}</span>
        <i
          className="modal__close"
          onClick={hideModal}
          aria-label="Close modal info"
        >
          {type === "success" ? (
            <Success className="form__icon" data-testid="icon" />
          ) : (
            <Error className="form__icon" data-testid="icon" />
          )}
        </i>
      </div>
    </ModalStyled>
  );
};

export default Modal;
