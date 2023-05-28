import * as classNames from "classnames";
import * as React from "react";
import "./message.css";
import { BiInfoCircle, BiErrorCircle, BiMessageAlt } from "react-icons/bi";
import { BsExclamationDiamond } from "react-icons/bs";

export type messageType = "default" | "important" | "info" | "error";
export type messageSize =  "small" | "medium" | "big";

type Props = {
  type?: messageType;
  size?: messageSize;
  wrapped?: boolean;
  children?: React.ReactNode;
  className?: string;
};

const Message = ({
  type = "default",
  size,
  wrapped = false,
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
      className={classNames("message", type, size, className, {
        wrapped: wrapped,
      })}
    >
      {icons[type]}
      <p className="message_text">{children}</p>
    </div>
  );
};

export default Message;
