import { useEffect, useMemo, useState } from "react";
import * as React from "react";
import * as classNames from "classnames";
import "./accordion.css";

export type Props = {
  isMultiExpandable?: boolean;
  className?: string;
  children: Array<React.ReactElement<ChildrenProps>>;
};

type ChildrenProps = {
  expanded?: boolean;
  onClick?: () => void;
};


const AccordionWrapper: React.ReactElement = ({
  isMultiExpandable = true,
  className,
  children,
}: Props) => {
  const [expandableChildren, setExpandableChildren] = useState(children.map((it) => it.props.expanded ?? false));

  useEffect(() => {
    setExpandableChildren((prev) => normalize(prev, isMultiExpandable));
  }, [isMultiExpandable]);

  useEffect(() => {
    setExpandableChildren((prev) => {
      if (children.length <= prev.length) {
        return normalize(prev.slice(0, children.length), isMultiExpandable);
      } else {
        return normalize(
          [...prev, ...new Array(children.length - prev.length).map(() => false)],
          isMultiExpandable
        );
      }
    });
  }, [children.length, isMultiExpandable]);

  const onToggle = (idx: number) =>
    setExpandableChildren((prev) => toggle(prev, idx, isMultiExpandable));

  const clonedChildren = useMemo(() => {
    return children.map((element, idx) =>
      React.cloneElement(element, {
        key: idx,
        expanded: expandableChildren[idx],
        onClick: () => onToggle(idx),
      })
    );
  }, [children, expandableChildren]);

  return (
    <div className={classNames("accordion__wrapper", className)}>{clonedChildren}</div>
  );
  }

const toggle = (
  expanded: boolean[],
  idx: number,
  isMultiExpandable: boolean
): boolean[] => {
  if (!isMultiExpandable) {
    const newExpanded = new Array(expanded.length).map(() => false);
    newExpanded[idx] = !expanded[idx];
    return newExpanded;
  } else {
    const newArray = [...expanded];
    newArray[idx] = !newArray[idx];
    return newArray;
  }
};


const normalize = (expanded: boolean[], isMultiExpandable: boolean): boolean[] => {
  if (!isMultiExpandable) {
    const firstExpandedIdx = expanded.indexOf(true);
    const newExpanded = new Array(expanded.length).map(() => false)
    if (firstExpandedIdx !== -1) {
      newExpanded[firstExpandedIdx] = true;
    }
    return newExpanded;
  }
  return expanded;
};

const getBooleanArray = (size: number, init = false): boolean[] =>
  new Array(size).map(() => init);

export default AccordionWrapper;
