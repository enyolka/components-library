/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useSelect, useValue } from 'react-cosmos/fixture';
import Button from "../button/button"
import Modal from './modal';


export default () => {
    const [isOpen, setIsOpen] = useValue<boolean>("isOpen", {defaultValue: false})
    const [closeOutsie] = useValue<boolean>("closeOutside", {defaultValue: false})
    const [isCloseMarkVisible] = useValue<boolean>("isCloseMarkVisible", {defaultValue: true})

	return (
        <>
            <Button onClick={() => setIsOpen(true)}>Otwórz</Button>
            <Modal 
                isOpen={isOpen} 
                setIsOpen={setIsOpen}
                isOutsideClosable={closeOutsie}
                isCloseMarkVisible={isCloseMarkVisible}
                label="simpleLabel"
            >
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, corporis!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique consequuntur necessitatibus velit, dolor quas dicta perferendis veniam sint dolorum ducimus?</p>
                </div>
            </Modal>
        </>
    )
};