import * as React from "react";
import * as classNames from "classnames";
import "./button.css";

export type ButtonRole = "default" | "secondary" | "important" | "error";

type PropsButton = {
  className?: string;
  role?: ButtonRole;
  children?: React.ReactNode;
};

type Props = PropsButton & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  role = "default",
  className,
  children,
  ...props
}: Props) => {



  return (
    <button
      className={classNames("button", role, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
