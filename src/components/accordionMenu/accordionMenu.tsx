import * as React from "react";
import Accordion from "./accordion";
import AccordionWrapper from "./AccordionWrapper";
import "./headerRightside.css"
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

type AccordionMenuSubOption = {
    name: string;
    onClick?: () => void;
    icon?: string;
}

type AccordionMenuOption = {
    name: string;
    onClick?: () => void;
    icon?: string;
    suboptions?: AccordionMenuSubOption[]
}

type Props = {
    options: AccordionMenuOption[];
}

const AccordionMenu = ({options}: Props) => {
    const [active, setActive] = useState(false);
    const menuRef = useRef(null);
    const togglerRef = useRef(null);

    const handleClickOutside = (event: any) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          !togglerRef.current.contains(event.target)
        ) {
          setActive(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
          document.removeEventListener("click", handleClickOutside, true);
        };
      }, []);

    return (
        <>
            <div
                className={classNames("menu__toggler--right", active ? "active" : null)}
                onClick={() => setActive(!active)}
                ref={togglerRef}
            >
                <span></span>
            </div>
            <div
                className={classNames("menu--right", active ? "active" : null)}
                ref={menuRef}
            >
                <AccordionWrapper>
                    {options.map((option: AccordionMenuOption) => (
                        <Accordion
                            className="item_name"
                            header={option.name}
                            icon={option.icon}
                            onAdditionalClick={() => option.onClick?.()}
                            color="main"
                            headerColor="main"
                            key={option.name}
                            >
                            {option.suboptions && option.suboptions.map((suboption: AccordionMenuSubOption) => (
                                <div
                                onClick={() => suboption.onClick?.()}
                                className={"item_link"}
                                >
                                {suboption.icon}
                                {suboption.name}
                                </div>
                            ))}
                        </Accordion>
                    ))
                }
                </AccordionWrapper>  
            </div>
        </>
    )
}

export default AccordionMenu;