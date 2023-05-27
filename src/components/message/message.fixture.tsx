/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useSelect, useValue } from 'react-cosmos/fixture';
import Message, { messageSize, messageType } from './message';


export default () => {
    const [wrapped] = useValue<boolean>("wrapped", {defaultValue: true})
    const [messageType] = useSelect<messageType>("messageType", {options: ["default", "important", "info", "error"]})
    const [messageSize] = useSelect<messageSize>("messageSize", {options: ["small", "medium", "big"]})

	return (
    <Message
        type={messageType}
        size={messageSize}
        wrapped={wrapped}
    >
        Here is some example message.
    </Message>
    )
};