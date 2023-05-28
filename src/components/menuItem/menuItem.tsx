import * as classnames from "classnames";
import * as React from "react";
import {  useRef, useState } from "react";
import "./menuItem.css";

type MenuItemRole = "redirect" | "popup";

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
  const ref = useRef<HTMLUListElement>(null);

  return (
    <>
      {options && options.length > 0 ? (
        <div
          className={classnames(
            "menuLink",
            isActive && "active",
            className
          )}
          onMouseOver={() => setOpen(true)}
          onMouseLeave={() => {
            setOpen(false);
          }}
        >
          <a
            href={to}
            className="menuLink_header"
            onClick={() => {
              onClick?.();
            }}
          >
            {icon}
            <span>{header}</span>
          </a>

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
          <a
            href={to}
            className="menuLink_header"
            onClick={() => {
              onClick?.();
            }}
          >
            {icon}
            <span>{header}</span>
          </a>
        </div>
      )}
    </>
  );
};

export default MenuItem;
