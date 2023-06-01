import * as React from "react";
import { useEffect, useRef, useState } from "react";
import * as classNames from "classnames";
import MenuItem from "../menuItem/menuItem";
import Search from "../search/search";
import  Accordion  from "../accordion/accordion";
import AccordionWrapper from "../accordion/accordionWrapper";
import "./header.css";


export type SearchOption = {
  value: string;
  label: string;
  description?: string;
  category: string;
  subcategory?: string;
  icon?: React.ReactElement;
  disabled?: boolean;
};

export type MenuOption = {
  name: string;
  link: string;
  icon?: React.ReactElement;
  options?: string[];
  onOptionSelect?: (value: string) => void;
  onAdditionalClick?: () => void;
}

type Props = {
  mainNavigation: MenuOption[];
  importantMenuList: MenuOption[];
  menuList: MenuOption[];
  searchOptions: SearchOption[];
  logo?: string;
  className?: string;
  menuItems?: React.ReactElement[];
  children?: React.ReactNode;
};

const Header = ({
  mainNavigation,
  importantMenuList,
  menuList,
  searchOptions,
  logo,
  children,
}: Props) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState<string | any>("");
  const menuRef = useRef(null);
  const togglerRef = useRef(null);

  const handleClickOutside = (event: any) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !togglerRef.current.contains(event.target)
    ) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);



  return (
    <header className={classNames("header--extensive")}>
      <div
        className={classNames(
          "menu__toggler--extensive",
          active ? "active" : null
        )}
        onClick={() => setActive(!active)}
        ref={togglerRef}
      >
        <span></span>
      </div>
      <div
        className={classNames("menu--extensive", active ? "active" : null)}
        ref={menuRef}
      >
        <AccordionWrapper>
        {importantMenuList.map((item: MenuOption) =>(
                <Accordion
                  className="item_name"
                  header={item.name}
                  onAdditionalClick={item.onAdditionalClick}
                  color="main"
                  headerColor="main"
                  expandable={false}
                />
              )).concat(
          menuList.map((item: MenuOption) =>(
                <Accordion
                  className="item_name"
                  header={item.name}
                  onAdditionalClick={item.onAdditionalClick}
                  color="main"
                  headerColor="main"
                >
                  {item.options && item.options?.map((option: string) => (
                    <div
                      onClick={() => item.onOptionSelect(option)}
                      className={"item_link"}
                    >
                      {option}
                    </div>
                  ))}
                </Accordion>
              )))
          }
        </AccordionWrapper>
      </div>

      <span
        className={classNames("logo--extensive")}
        onClick={() => window.location.href="/"}
      >
        <img alt="logo" src={logo} className={classNames("logo_item")} />
      </span>

      <Search
        className="search--extensive"
        autoSuggestTerms={searchOptions}
        value={value}
        onChange={setValue}
        onSelection={(newValue) => {
          setValue(newValue);
          window.location.href=`/${newValue.value}`;
        }}
        label=""
        placeholder="Szukaj..."
      />
      <nav
        className={classNames(
          "header_horizontalMenu--extensive",
          "header_important--extensive"
        )}
      >
        {importantMenuList.map((item => (
          <MenuItem
            to={item.link}
            header={item.name}
            className="header_bar__item"
        />
        )))}
        
      </nav>

      <nav className={classNames("header_bar--text")} role="navigation">
        {/* <div className={classNames("bar_menu")}> */}
        {mainNavigation.map((item: MenuOption) =>
          <MenuItem
            to={item.link}
            options={item.options}
            onOptionSelect={item.onOptionSelect}
            className="header_bar__item"
            header={item.name}
            icon={item.icon}
        />
      )}
      
      </nav>

      <hr className="header__hr" />

      <nav
        className={classNames("header_horizontalMenu--extensive")}
        role="navigation"
      >
        {menuList.map(item =>
            <MenuItem
              className="header_bar__item"
              onClick={item.onAdditionalClick}
              header={item.name}
              icon={item.icon}
              to={item.link}
              options={item.options}
              onOptionSelect={item.onOptionSelect}
            >
            </MenuItem>
          )}
      </nav>
      {children}
    </header>
  );
};

export default Header;
