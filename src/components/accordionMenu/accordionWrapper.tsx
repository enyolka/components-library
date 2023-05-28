import { useEffect, useMemo, useState } from "react";
import * as React from "react";
import * as classNames from "classnames";
import "./accordion.css";

export type Props = {
  className?: string;
  isMultiExpandable?: boolean;
  isCollapsible?: boolean;
  children: Array<React.ReactElement<ChildrenProps>>;
};

type ChildrenProps = {
  expanded?: boolean;
  onClick?: () => void;
};


const AccordionWrapper: React.ReactElement = ({
  className,
  isCollapsible = true,
  isMultiExpandable = true,
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
          [...prev, ...getBooleanArray(children.length - prev.length)],
          isMultiExpandable
        );
      }
    });
  }, [children.length, isMultiExpandable]);

  const onToggle = (idx: number) =>
    setExpandableChildren((prev) => toggle(prev, idx, isCollapsible, isMultiExpandable));

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
  isCollapsible: boolean,
  isMultiExpandable: boolean
): boolean[] => {
  if (!isCollapsible && !isMultiExpandable) {
    const newExpanded = getBooleanArray(expanded.length);
    newExpanded[idx] = !expanded[idx];

    if (newExpanded.every((isExpanded) => !isExpanded)) {
      return expanded;
    }
    return newExpanded;
  } else if (!isCollapsible) {
    const newExpanded = [...expanded];
    newExpanded[idx] = !expanded[idx];

    if (newExpanded.every((isExpanded) => !isExpanded)) {
      return expanded;
    }
    return newExpanded;
  } else if (!isMultiExpandable) {
    const newExpanded = getBooleanArray(expanded.length);
    newExpanded[idx] = !expanded[idx];
    return newExpanded;
  } else {
    return toggleArray(expanded, idx);
  }
};

const toggleArray = (array: boolean[], idx: number) => {
  const newArray = [...array];
  newArray[idx] = !newArray[idx];
  return newArray;
};

const normalize = (expanded: boolean[], isMultiExpandable: boolean): boolean[] => {
  if (!isMultiExpandable) {
    const firstExpandedIdx = expanded.indexOf(true);
    const newExpanded = getBooleanArray(expanded.length);
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
