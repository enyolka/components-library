import * as React from "react";
import * as classNames from "classnames";
import Step from "./step"
import "./steps.css";

export type StepType = {
  label: string;
  subLabel?: string;
  link?: string;
  disabled?: boolean;
};

export type Props = {
  steps: StepType[];
  activeStepIdx: number;
  ariaLabelCompleted: string;
  ariaLabelCurrent: string;
};

const Steps = ({
  activeStepIdx,
  steps,
  ariaLabelCompleted,
  ariaLabelCurrent,
}: Props) => {
  return (
    <div className="steps__list">
      {steps.map(({ label, subLabel, disabled }, idx) => (
        <Step
          key={idx}
          idx={idx}
          label={label}
          subLabel={subLabel}
          completed={idx < activeStepIdx}
          current={idx === activeStepIdx}
          ariaLabelCompleted={ariaLabelCompleted}
          ariaLabelCurrent={ariaLabelCurrent}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export { Steps };
