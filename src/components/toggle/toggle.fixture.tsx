/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
import Toggle from "./toggle";
import { useSelect, useValue } from "react-cosmos/fixture";


export default () => {
    const [value, setValue] = useValue<string>("value", {defaultValue: "login"})
    // const [value, setValue]  = useSelect<string>("value", { defaultValue: "login", options: ["login", "register"]})
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
        />
    )
}