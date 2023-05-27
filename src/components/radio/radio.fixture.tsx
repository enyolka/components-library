import React from "react";
import { useValue } from "react-cosmos/fixture";
import Radio from "./radio";

// eslint-disable-next-line import/no-anonymous-default-export
export default (): React.ReactElement => {
  const [selected, setSelected] = useValue<boolean>("selected", {
    defaultValue: false,
  });
  const [value] = useValue<string>("value", { defaultValue: "someValue" });
  const [groupName] = useValue<string>("groupName", { defaultValue: "someValue" });
  const [disabled] =  useValue<boolean>("disabled", { defaultValue: false });
  const [label] = useValue<string>("label",  { defaultValue: "someLabel" } );

  return (
    <div>
        <Radio
            value={value} 
            groupName={groupName}
            label={label}
            checked={selected}
            disabled={disabled}
            onChange={() => setSelected(true)}     
        />
    </div>
  );
};
