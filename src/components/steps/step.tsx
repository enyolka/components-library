/* eslint-disable jsx-a11y/anchor-is-valid */
import * as classNames from "classnames";
import * as React from "react";
import "./steps.css";

type Props = {
  idx: number;
  label: string;
  ariaLabelCompleted: string;
  ariaLabelCurrent: string;
  subLabel?: string;
  link?: string;
  completed?: boolean;
  current?: boolean;
  disabled?: boolean;
  className?: string;
};

export const Step = ({
  idx,
  label,
  ariaLabelCompleted,
  ariaLabelCurrent,
  subLabel,
  link,
  completed,
  current,
  disabled,
  className,
}: Props) => {
  return (
    <a
      href={link ?? "#"}
      onClick={(e) => e.preventDefault()}
      className={classNames("step", { completed, current, disabled }, className)}
      tabIndex={disabled ? -1 : undefined}
    >
      <span
        className="step__icon"
        aria-label={completed ? ariaLabelCompleted : ariaLabelCurrent}
      >
        {idx + 1}
      </span>
      <span className="step__text">
        {label}
        {subLabel && <small className="steps__subtext">{subLabel}</small>}
      </span>
    </a>
  );
};

export default Step ;
