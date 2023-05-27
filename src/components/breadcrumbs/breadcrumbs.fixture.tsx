/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
import Breadcrumbs from "./breadcrumbs";

export default () => {
    const navs = [
        {
            name: "Kobiety",
            link: "/"
        },
        {
            name: "Akcesoria",
            link: "/"
        },
        {
            name: "Biżuteria",
            link: "/"
        },
        {
            name: "Bransoletki",
            link: "/"
        },
    ]

    return ( 
        <Breadcrumbs navs={navs}/>
    )
}