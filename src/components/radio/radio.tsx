import * as classNames from "classnames";
import * as React from "react";
import "./radio.css";

type PropsRadio = {
  label: string;
  value: string;
  groupName: string;
  children?: React.ReactNode;
  className?: string;
};

type Props = PropsRadio & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
  label,
  value,
  groupName,
  children,
  className,
  ...props
}: Props) => {
  return (
    <label htmlFor={value} className={classNames("radio__group", props.disabled && "disabled", className)}>
      <input
        type="radio"
        id={value}
        value={value}
        name={groupName}
        className="radio__button"
        {...props}
      />
      <span className="radio__label">{label}</span>
      {children}
    </label>
  );
};

export default Radio;
