/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useSelect, useValue } from 'react-cosmos/fixture';
import { StepType, Steps } from './steps';

const preparedSteps: StepType[] = [
    {
        label: "One",
        subLabel: "Sublabel for first",
        disabled: false
    },
    {
        label: "Two",
        subLabel: "Sublabel for second",
        disabled: false
    },
    {
        label: "Three",
        subLabel: "Sublabel for third",
        disabled: true
    }
]


export default () => {
    const [wrapped] = useValue<boolean>("wrapped", {defaultValue: true})
    const [activeStepIdx] = useSelect("activeStepIdx", {options: ["1", "2"]})

	return (
        <Steps steps={preparedSteps} activeStepIdx={parseInt(activeStepIdx) - 1} ariaLabelCompleted={''} ariaLabelCurrent={''}/>
    )
};