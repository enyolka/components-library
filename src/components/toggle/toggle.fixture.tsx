/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
import { useState } from "react";
import Toggle from "./toggle";
import { useValue } from "react-cosmos/fixture";


export default () => {
    const [value, setValue] = useState<string>("login")
    const [disabled] = useValue<boolean>("disabled", {defaultValue: false})

    const options = [
        {
          value: "login",
          label: "Zaloguj się",
        },
        {
          value: "register",
          label: "Zarejestruj się",
        },
      ];

    return ( 
        <Toggle 
            options={options} 
            value={value} 
            onChange={setValue}
            disabled={disabled}
        />
    )
}