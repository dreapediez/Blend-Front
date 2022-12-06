import SelectFormInputStyled from "./SelectFormInputStyled";
import { BsCalendarWeek } from "react-icons/bs";

const SelectFormInput = (): JSX.Element => {
  return (
    <SelectFormInputStyled>
      <select className="form__select">
        <option value="0">Select a calendar day</option>
        <option value="1">Calendar Day 1</option>
        <option value="2">Calendar Day 2</option>
        <option value="3">Calendar Day 3</option>
        <option value="4">Calendar Day 4</option>
        <option value="5">Calendar Day 5</option>
        <option value="6">Calendar Day 6</option>
        <option value="7">Calendar Day 7</option>
        <option value="8">Calendar Day 8</option>
        <option value="9">Calendar Day 9</option>
        <option value="10">Calendar Day 10</option>
        <option value="11">Calendar Day 11</option>
        <option value="12">Calendar Day 12</option>
        <option value="13">Calendar Day 13</option>
        <option value="14">Calendar Day 14</option>
        <option value="15">Calendar Day 15</option>
        <option value="16">Calendar Day 16</option>
        <option value="17">Calendar Day 17</option>
        <option value="18">Calendar Day 18</option>
        <option value="19">Calendar Day 19</option>
        <option value="20">Calendar Day 20</option>
        <option value="21">Calendar Day 21</option>
        <option value="22">Calendar Day 22</option>
        <option value="23">Calendar Day 23</option>
        <option value="24">Calendar Day 24</option>
      </select>
      <span className="form__box">
        <BsCalendarWeek className="form__icon" />
      </span>
    </SelectFormInputStyled>
  );
};

export default SelectFormInput;
