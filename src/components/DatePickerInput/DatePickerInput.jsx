import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SvgIcon from "../SvgIcon/SvgIcon";
import './DatePickerInput.css';

const DatePickerInput = ({
  name,
  placeholder,
}) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      {...field}
      placeholderText={placeholder}
      renderCustomHeader={({
        monthDate,
        decreaseMonth,
        increaseMonth,
      }) => (
        <div>
          <button
            aria-label="Previous Month"
            className="react-datepicker__navigation react-datepicker__navigation--previous"
            onClick={decreaseMonth}
          >
            <SvgIcon spriteIconId="chevron-left" />
          </button>
          <span className="react-datepicker__current-month">
            {monthDate.toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <button
            aria-label="Next Month"
            className="react-datepicker__navigation react-datepicker__navigation--next"
            onClick={increaseMonth}
          >
            <SvgIcon spriteIconId="chevron-right" />
          </button>
        </div>
      )}
      className="DatePickerInput"
      selected={value}
      onChange={(date) => setValue(date)}
    />
  );
};

export default DatePickerInput;