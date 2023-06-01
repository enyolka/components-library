/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';
import Search, { Option } from './search';
import { IoSettings } from "react-icons/io5";


const options: Option = [
  {  
    value: "one",
    label: "One",
    description: "Simple description",
    category: "cat1",
    subcategory: "subcat1",
    icon: <IoSettings/>,
    disabled: false,
  },
  {  
    value: "two",
    label: "Two",
    description: "Simple description",
    category: "cat1",
    subcategory: "subcat1",
    icon: <IoSettings/>,
    disabled: false,
  },
  {  
    value: "three",
    label: "Three",
    description: "Simple description",
    category: "cat1",
    subcategory: "subcat1",
    icon: <IoSettings/>,
    disabled: false,
  }
]

export default () => {
    const [value, setValue] = useValue<string>("value", {defaultValue: options[0].value})
    // const [messageType] = useSelect<messageType>("messageType", {options: ["default", "important", "info", "error"]})

	return (
    <Search
        className="search--right"
        searchTerms={options}
        value={value}
        onChange={setValue}
        onSelection={(newValue: Option) => {
          setValue(newValue);
        }}
        label=""
        placeholder="Szukaj..."
      />
    )
};