/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import AccordionMenu from "./accordionMenu";

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


	return (
        <AccordionMenu
            options={categories}
        />
    
    )
};