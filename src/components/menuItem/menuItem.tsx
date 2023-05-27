import * as classnames from "classnames";
import * as React from "react";
import {  useRef, useState } from "react";
import "./menuItem.css";

type MenuItemRole = "redirect" | "popup";

type MenuItemOption = {
  name: string;
  suboptions?: string[];
};

type Props = {
  header: string | React.ReactNode;
  icon?: React.ReactNode;
  role?: MenuItemRole;
  to?: string;
  isActive?: boolean;
  options?: string[]; //MenuItemOption[];
  onOptionSelect?: (value: string) => void;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};

const MenuItem = ({
  header,
  icon,
  to = "",
  role = "redirect",
  isActive = false,
  options,
  onOptionSelect,
  onClick,
  children,
  className,
  ...props
}: Props) => {
  const [open, setOpen] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const ref = useRef<HTMLUListElement>(null);

  const detectMousePosition = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleMouseMove = React.useCallback((event: any) => {
      if (
        ref?.current?.clientWidth &&
        event.clientX + ref.current.clientWidth > window.screen.width
      )
        setX(event.clientX + ref.current.clientWidth - window.screen.width + 20);
      if (
        ref?.current?.clientHeight &&
        event.clientY + ref.current.clientHeight > window.screen.height
      )
        setY(event.clientY + ref.current.clientHeight - window.screen.height + 20);
      event.stopPropagation();
      event.preventDefault();
    }, []);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  };
  console.log(icon)


  return (
    <>
      {options && options.length > 0 ? (
        <div
          className={classnames(
            "menuLink",
            isActive && "active",
            className
          )}
          onMouseEnter={() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            () => detectMousePosition();
            // setOpen(true)
          }}
          onMouseOver={() => setOpen(true)}
          onMouseLeave={() => {
            setOpen(false);
          }}
        >
          <div
            className="menuLink_header"
            onClick={() => {
              // navigate(to);
              onClick?.();
            }}
          >
            {icon}
            <span>{header}</span>
          </div>

          <ul
            ref={ref}
            className={classnames("menuLink__listbox", { open: open})}
            
          >
            {options.map((option) => (
              <li
                onClick={() => {
                  onOptionSelect?.(option);
                }}
                className={classnames("menuLink__listItem")}
              >
                {option}
                {/* {option.suboptions.length > 0 && (
                            <ul 
                                ref={ref} 
                                className={classnames("menuLink__listbox", {open: open})}
                                style={{top: ref?.current?.clientHeight + ref?.current?.clientX + y, right: ref?.current?.clientWidth + ref?.current?.clientY + x}}
                            >
                                {option.suboptions.map(suboption => 
                                    <li 
                                        onClick={() => {
                                            console.log(suboption)
                                            onOptionSelect(suboption)}}
                                        className={classnames("menuLink__listItem")}
                                    >
                                    {suboption}</li>)}</ul>
                           )} */}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          className={classnames(
            "menuLink",
            isActive && "active",
            className
          )}
          {...props}
        >
          <div
            className="menuLink_header"
            onClick={() => {
              // navigate(to);
              onClick?.();
            }}
          >
            {icon}
            <span>{header}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItem;
