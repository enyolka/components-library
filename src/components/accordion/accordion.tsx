import * as React from "react";
import * as classNames from "classnames";
import "./accordion.css";

type SectionProps = {
    header: string;
    subHeader?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    expanded?: boolean;
    isExpandable?: boolean;
    headerColor?: "default" | "main" | string;
    color?: "default" | "main" | string;
    className?: string;
    onClick?: () => void;
    onAdditionalClick?: () => void;
  };

const Accordion: React.ReactElement = ({
    expanded,
    onClick,
    onAdditionalClick,
    header,
    icon,
    children,
    subHeader,
    isExpandable = true,
    headerColor = "default",
    color = "default",
    className,
    ...props
  }: SectionProps) => {
    console.log(isExpandable)
    return (
      <section className="accordion">
        <header
          className="accordion__header"
          tabIndex={0}
          aria-expanded={isExpandable && expanded}
          onClick={() => onClick(!expanded)}
          style={{
            backgroundColor:
              headerColor && headerColor === "default"
                ? "rgb(250, 250, 250)"
                : headerColor === "main"
                ? "var(--main-light-max)"
                : headerColor,
          }}
        >
          {icon}
          <h4
            onClick={(event) => {
              if (event.target === event.currentTarget && onAdditionalClick) {
                event.stopPropagation();
                onAdditionalClick();
              }
            }}
          >
            {header}
          </h4>
          {isExpandable && (
            <div
              className={classNames(expanded ? "button-up" : "button-down")}
            ></div>
          )}
        </header>
        {children && expanded ? (
          <div
            className="accordion__content"
            style={{
              visibility: expanded ? "visible" : "hidden",
              height: expanded ? "auto" : "0px",
              backgroundColor:
                color === "default"
                  ? "rgb(253, 253, 253)"
                  : color == "main"
                  ? "rgba(255,255,255, 0.5)"
                  : color,
            }}
          >
            {subHeader && <h5>{subHeader}</h5>}
            <div>{children}</div>
          </div>
        ) : null}
      </section>
    );
  }

export default Accordion;