/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import {  useValue } from 'react-cosmos/fixture';
import { Step } from './step';

export default () => {
    const [completed] = useValue<boolean>("completed", {defaultValue: false})
    const [current] = useValue<boolean>("current", {defaultValue: false})
    const [ disabled ] = useValue<boolean>("disabled", {defaultValue: false})

	return (
        <Step
            idx={0}
            label={"One"}
            subLabel={"Sublabel for first"}
            completed={completed}
            current={current}
            ariaLabelCompleted={"ariaLabelCompleted"}
            ariaLabelCurrent={"ariaLabelCurrent"}
            disabled={disabled}
        />
    )
};