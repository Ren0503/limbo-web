import { FC, FormEvent } from "react";
import { SelectElement } from "./Select.styled";

interface SelectProps {
  children: React.ReactNode;
  onChange: (e: FormEvent) => void;
  defaultValue: string;
  name: string;
}

export const Select: FC<SelectProps> = ({ children, onChange, name, defaultValue }) => {
  return (
    <SelectElement name={name} onChange={onChange} defaultValue={defaultValue}>
      {children}
    </SelectElement>
  );
};