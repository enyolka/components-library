/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useSelect  } from 'react-cosmos/fixture';
import Spinner, { SpinnerSize } from './spinner';


export default () => {
    const [spinnerSize] = useSelect<SpinnerSize>("spinnerSize", {options: ["small", "medium", "big"]})

    return <Spinner size={spinnerSize} />
};