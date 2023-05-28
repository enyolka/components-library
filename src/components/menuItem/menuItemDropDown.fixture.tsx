/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useSelect, useValue } from 'react-cosmos/fixture';
import { IoSettings } from "react-icons/io5";
import MenuItem from './menuItem';
import "./extra.css"


export default () => {
    const settingOptions = ["podstawowe", "ustawienia konta", "dodatkowe"];
    const [settingOption, setSettingOption] = React.useState<string>()

    const [isActive] = useValue<boolean>("isActive", {defaultValue: false})
    const [withIcon] = useValue<boolean>("withIcon", {defaultValue: true})

	return (
        <MenuItem
            role="popup"
            to="/ustawienia"
            options={settingOptions}
            onOptionSelect={setSettingOption}
            className={"extra-style"}
            header="ustawienia"
            icon={withIcon && <IoSettings className="header_bar__icon" />}
            isActive={isActive}
        />       
    )
};