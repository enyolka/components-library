import * as React from "react";
import * as classNames from "classnames";
import "./accordion.css";

type SectionProps = {
    header: string;
    icon?: React.ReactNode;
    subHeader?: string;
    children?: React.ReactNode;
    expanded?: boolean;
    expandable?: boolean;
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
    expandable = true,
    headerColor = "default",
    color = "default",
    className,
    ...props
  }: SectionProps) => {
    return (
      <section className="accordion">
        <header
          className="accordion__header"
          tabIndex={0}
          aria-expanded={expandable && expanded}
          onClick={onClick}
          style={{
            backgroundColor:
              color && color == "default"
                ? "rgb(250, 250, 250)"
                : color == "main"
                ? "var(--main-light-max)"
                : color,
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
          {expandable && (
            <div
              className={classNames(expanded ? "button-up" : "button-down")}
            ></div>
          )}
        </header>
        {children && expandable ? (
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