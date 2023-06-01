/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState } from "react";
import { useValue, useSelect } from 'react-cosmos/fixture';
import Accordion from "./accordion";
import { FaHeart } from "react-icons/fa";

export default () => {
    const [expanded, setExpanded] = useState(false)
    const [isExpandable] = useValue<boolean>("isExpandable", {defaultValue: true})
    const [icon] = useValue<boolean>("icon", {defaultValue: false})
    const [headerColor] = useSelect("headerColor", {options: ["default", "main", "rgb(255, 205, 110)"]})
    const [color] = useSelect("color", {options: ["default", "main", "rgba(255, 205, 110, 0.5)"]})

	return (
        <Accordion 
            header={"Header 1"} 
            subHeader={"Subheader 1"}
            expanded={expanded}
            onClick={setExpanded}
            isExpandable={isExpandable}
            icon={icon && <FaHeart/>}
            headerColor={headerColor}
            color={color}
        >
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas suscipit voluptate dolores optio dolorum soluta explicabo, fugit pariatur ad consequuntur sit facere? Id illo maxime, perferendis quae possimus corrupti quidem asperiores ab magni provident officia itaque ex aut quibusdam eos, impedit quia repellat molestiae incidunt doloribus quaerat. Doloribus, ipsa nihil.
            </p>
        </Accordion>
    )
};
