/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import Footer from "./footer"

const links = [
    {
        name: "Simple link 1",
        link: "/"
    },
    {
        name: "Simple link 2",
        link: "/"
    },
    {
        name: "Simple link 3",
        link: "/"
    },
    {
        name: "Simple link 4",
        link: "/"
    }
]

const contactInfo = {
    phone: "+48 000 000 000",
    mail: "simple-mail@testing.com",
    city: "80210 New York",
    street: "New Avenue 56D/11"
}

export default () => {


	return (
        <Footer 
            links={links}
            contactInfo={contactInfo}
        />   
    )
};