import { useState } from "react";
import "./toggle-custom.css";

export type ToggleCustomProps = {
  checked?: boolean;
  onChange: (checked: boolean) => void;
};

export const ToggleCustom: React.FC<ToggleCustomProps> = ({
  checked: initialChecked = false,
  onChange,
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <>
      <input
        id="switch"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor="switch"></label>
    </>
  );
};

export default ToggleCustom;
