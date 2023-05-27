/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { IoSettings } from "react-icons/io5";
import MenuItem from './menuItem';
import "./extra.css"
import { useValue } from 'react-cosmos/fixture';


export default () => {
    const [isActive] = useValue<boolean>("isActive", {defaultValue: false})
    const [withIcon] = useValue<boolean>("withIcon", {defaultValue: true})

	return (
    <MenuItem
        role="popup"
        to="/"
        className={"extra-style"}
        header="ustawienia"
        icon={withIcon && <IoSettings className="header_bar__icon" />}
        isActive={isActive}
    />
    )
};