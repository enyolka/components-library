/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useSelect, useValue } from 'react-cosmos/fixture';
import Button from "./Button";

export default () => {
    const [role] = useSelect('role', {
        options: ["default", "secondary", "important", "error"]
    })

	return (
        <>
            <Button
                role={role}
            >
                Button
            </Button>
        </> 
    )
};