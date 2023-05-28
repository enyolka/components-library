import * as React from "react";
import * as classNames from "classnames";
import "./spinner.css";

export type SpinnerSize = "small" | "medium" | "big";

type Props = {
  size: SpinnerSize;
};

const Spinner = ({ size }: Props): React.ReactElement => {
  return <span className={classNames("loader", size)}></span>;
};

export default Spinner;
