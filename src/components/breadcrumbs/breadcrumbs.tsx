import * as React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./breadcrumbs.css";

type BreadCrumb = {
  name: string;
  link: string;
};

type Props = {
  navs: BreadCrumb[];
  className?: string;
};

const Breadcrumbs = ({ navs, className }: Props) => {
  return (
    <div className={className}>
      {navs.map((item, id) => (
        <a href={item.link} className="breadcrumb">
          {item.name}
          {id != navs.length - 1 ? (
            <IoIosArrowForward className="breadcrumb__icon" />
          ) : null}
        </a>
      ))}
    </div>
  );
};

export default Breadcrumbs;
