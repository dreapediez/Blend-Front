import SelectFormInputStyled from "./SelectFormInputStyled";
import { BsCalendarWeek } from "react-icons/bs";
import { WindowStructure } from "../../types/calendarTypes";

interface SelectFormInputProps {
  action?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  windows: WindowStructure[];
  name?: string;
}

const SelectFormInput = ({
  action,
  windows,
  name,
}: SelectFormInputProps): JSX.Element => {
  return (
    <SelectFormInputStyled>
      <select
        className="form__select"
        onChange={action}
        defaultValue={0}
        name="days"
      >
        <option value={0}>Select a calendar day</option>
        {windows.map((window) => (
          <option value={window.day} key={window.day}>
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
