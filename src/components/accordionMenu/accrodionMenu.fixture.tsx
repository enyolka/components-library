/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useSelect, useValue } from 'react-cosmos/fixture';
import { IoSettings } from "react-icons/io5";
import AccordionMenu from "./accordionMenu";
import AccordionWrapper from "./AccordionWrapper"

const categories = [
    {
        name: "one",
        onClick: () =>  window.location.href='/',
        suboptions: [
            {name: "uno"},
            {name: "duo"}
        ]
    },
    {
        name: "two",
        suboptions: [
            {name: "uno 2"},
            {name: "duo 2"}
        ]
    }
]

export default () => {
    const settingOptions = ["podstawowe", "ustawienia konta", "dodatkowe"];
    const [settingOption, setSettingOption] = React.useState<string>()

    const [isActive] = useValue<boolean>("isActive", {defaultValue: false})
    const [withIcon] = useValue<boolean>("withIcon", {defaultValue: true})

	return (
        <AccordionMenu
            options={categories}
        />
        // <AccordionWrapper>
        //     {categories.map((item: any) => (
        //         <Accordion
        //           className="item_name"
        //           header={item.name}
        //           onAdditionalClick={() =>
        //             navigateAndClose(`/produkty/${item.name}`)
        //           }
        //           color="main"
        //           headerColor="main"
        //         >
        //           {item.subcategories.map(({ name }: any) => (
        //             <div
        //               onClick={() =>
        //                 navigateAndClose(`/produkty/${item.name}/${name}`)
        //               }
        //               className={"item_link"}
        //             >
        //               {name}
        //             </div>
        //           ))}
        //         </Accordion>
        //     ))
        //   }
        // </AccordionWrapper>     
    )
};