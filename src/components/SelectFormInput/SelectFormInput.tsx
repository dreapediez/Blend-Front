import SelectFormInputStyled from "./SelectFormInputStyled";
import { BsCalendarWeek } from "react-icons/bs";
import { WindowStructure } from "../../types/calendarTypes";

interface SelectFormInputProps {
  action?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  windows: WindowStructure[];
}

const SelectFormInput = ({
  action,
  windows,
}: SelectFormInputProps): JSX.Element => {
  return (
    <SelectFormInputStyled>
      <select className="form__select" onChange={action} defaultValue={0}>
        <option value={0}>Select a calendar day</option>
        {windows.map((window) => (
          <option
            data-testid="select-option"
            value={window.day}
            key={window.day}
          >
            Calendar Day {window.day}
          </option>
        ))}
      </select>
      <span className="form__box">
        <BsCalendarWeek className="form__icon" />
      </span>
    </SelectFormInputStyled>
  );
};

export default SelectFormInput;
