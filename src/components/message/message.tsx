import * as classNames from "classnames";
import * as React from "react";
import "./message.css";
import { BiInfoCircle, BiErrorCircle, BiMessageAlt } from "react-icons/bi";
import { BsExclamationDiamond } from "react-icons/bs";

export type MessageType = "default" | "important" | "info" | "error";
export type MessageSize =  "small" | "medium" | "big";
export type MessageFloat = "above" | "bottom" | "right" | "left" | "none";

type Props = {
  type?: MessageType;
  size?: MessageSize;
  wrapped?: boolean;
  float?: MessageFloat;
  children?: React.ReactNode;
  className?: string;
};

const Message = ({
  type = "default",
  size,
  wrapped = false,
  float = "none",
  children,
  className,
}: Props) => {
  const icons = {
    default: <BiMessageAlt className="message_icon" />,
    important: <BsExclamationDiamond className="message_icon" />,
    info: <BiInfoCircle className="message_icon" />,
    error: <BiErrorCircle className="message_icon" />,
  };

  return (
    <div
      className={classNames("message", type, size, float, {
        wrapped: wrapped
      }, 
      className)}
    >
      {icons[type]}
      <p className="message_text">{children}</p>
    </div>
  );
};

export default Message;
