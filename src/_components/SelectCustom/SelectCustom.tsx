import Select, { SingleValue, StylesConfig } from "react-select";

// Define the option type
export type OptionType = {
  value: number;
  label: string;
};

export type SelectCustomProps = {
  options: OptionType[];
  setSelectedOption: (option: SingleValue<OptionType>) => void;
  placeholder?: string;
  className?: string;
  value?: OptionType | null;
};

export const SelectCustom = ({
  options,
  setSelectedOption,
  placeholder = "Select an option",
  className,
  value,
}: SelectCustomProps) => {
  const handleChange = (option: SingleValue<OptionType>) => {
    setSelectedOption(option);
  };

  return (
    <div className={className}>
      <Select
        options={options}
        onChange={handleChange}
        styles={darkThemeStyles}
        placeholder={placeholder}
        isClearable
        classNamePrefix="custom-select"
        value={value}
      />
    </div>
  );
};

// Dark theme styles configuration
const darkThemeStyles: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#333",
    borderColor: "#555",
    color: "#fff",
    // width を削除し、親の className に従うようにする
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#444",
    color: "#fff",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#aaa",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#555" : "#444",
    color: "#fff",
    ":active": {
      backgroundColor: "#666",
    },
  }),
};

export default SelectCustom;
