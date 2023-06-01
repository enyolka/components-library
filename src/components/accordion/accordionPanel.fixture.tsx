/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';
import Accordion from "./accordion";
import AccordionWrapper from "./AccordionWrapper"

export default () => {
    const [isMultiExpandable] = useValue<boolean>("isMultiExpandable", {defaultValue: true})

	return (

    <AccordionWrapper isMultiExpandable={isMultiExpandable}>
          <Accordion header={"Header 1"}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas suscipit voluptate dolores optio dolorum soluta explicabo, fugit pariatur ad consequuntur sit facere? Id illo maxime, perferendis quae possimus corrupti quidem asperiores ab magni provident officia itaque ex aut quibusdam eos, impedit quia repellat molestiae incidunt doloribus quaerat. Doloribus, ipsa nihil.
            </p>
          </Accordion>
          <Accordion header="Header 2">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis hic doloribus aperiam pariatur excepturi. Voluptatibus, ex quos quia, ipsa doloremque molestias dolorem eveniet reiciendis sit saepe aperiam sint et animi!
            </p>
          </Accordion>
          <Accordion header="Header 3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consequatur soluta, earum molestiae a consectetur inventore iure rem alias sint dicta adipisci porro incidunt voluptatem dolores saepe laudantium mollitia atque!
            </p>
          </Accordion>
        </AccordionWrapper> 
    )
};
