import { SetStateAction, useRef, useState} from 'react';

function DatePickerDemo() {

    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setDate(e .target.value);
  };

  return (
    <div className="relative w-full">
      <input
        type='date'
        onChange={handleChange}
        ref={dateInputRef}
        value={date}
        datepicker-autohide
        className="put border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-none block w-full p-2.5 outline-none"
        placeholder="Select date"
        id="datepickerId"
      />
      <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default DatePickerDemo;
