import * as React from "react";
import * as classNames from "classnames";
import "./toggle.css";

export type Props = {
  className?: string;
  options: Array<Option>;
  disabled?: boolean;
  value: string;
  onChange?: (value: string) => void;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
};

export type Option = {
  value: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
};

const Toggle = ({
  onChange,
  options,
  value,
  className,
  disabled,
  onBlur,
  onFocus,
}: Props): React.ReactElement => {
  return (
    <div className={classNames(className, "toggle-group")}>
      {options.map((option) => (
        <label
          key={option.value}
          className={classNames("toggle", option.className)}
        >
          <input
            className="toggle__input"
            type="radio"
            checked={value === option.value}
            aria-label={option.label}
            onChange={() => onChange?.(option.value)}
            disabled={disabled}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <span className="label">{option.icon}{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Toggle;
