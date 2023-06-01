/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderResult, { MenuOption } from "./header";
import { IoSettings } from "react-icons/io5";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const categories = [
    {
      "name": "Komputery i tablety",
      "icon": "fas fa-computer",
      "subcategories": [
        {
          "name": "Komputery stacjonarne"
        },
        {
          "name": "Laptopy"
        },
        {
          "name": "Tablety"
        }
      ]
    },
    {
      "name": "Telefony",
      "icon": "fas fa-mobile",
      "subcategories": [
        {
          "name": "Smartfony"
        }
      ]
    },
    {
      "name": "Akcesoria",
      "icon": "fas fa-keyboard",
      "subcategories": [
        {
          "name": "Smartwatche"
        },
        {
          "name": "Klawiatury"
        },
        {
          "name": "Słuchawki"
        },
        {
          "name": "Głośniki"
        }
      ]
    },
    {
      "name": "Telewizory i monitory",
      "icon": "fas fa-tv",
      "subcategories": [
        {
          "name": "Telewizory",
          "subsubcategories": [
            {
              "name": "Telewizory OLED"
            },
            {
              "name": "Telewizory LED"
            }
          ]
        },
        {
          "name": "Monitory"
        }
      ]
    },
    {
      "name": "Kamery i foto",
      "icon": "fas fa-camera",
      "subcategories": [
        {
          "name": "Kamery"
        },
        {
          "name": "Aparaty"
        },
        {
          "name": "Drony"
        }
      ]
    },
    {
      "name": "Gry i konsole",
      "icon": "fas fa-gamepad",
      "subcategories": [
        {
          "name": "Konsole"
        },
        {
          "name": "Gry"
        }
      ]
    }
]

const productOptions = [
    {
        category: "Telefony",
        label: "Smartfon Samsung Galaxy S21",
        subcategory: "Smartfony",
        value: "001"
    },
    {
        category: "Telewizory i monitory",
        label: "Telewizor LG OLED65C1",
        subcategory: "Telewizory",
        value: "002"
    }, 
    {
        category: "Akcesoria",
        label: "Smartwatch Samsung Galaxy Watch 4",
        subcategory: "Smartwatch",
        value: "003"
    }
]
  

export default () => {
    let sum = 0;

    const toggleLogged = () => {
        sessionStorage.removeItem("account");
        sessionStorage.setItem("logged", JSON.stringify(false));
        window.location.reload();
    };

        
    const headerItems: MenuOption[] = [
        {
        name: "ustawienia",
        icon: <IoSettings className="header_bar__icon" />,
        link: "/ustawienia"
        },
        {
        name: "polubione",
        icon: <FaHeart className="header_bar__icon" />,
        link: "/ulubione"
        },
        {
        name: "polubione",
        icon: <FaShoppingCart className="header_bar__icon" />,
        link: `koszyk (${sum})`
        },
        {
        name: "konto",
        icon: <FaUser className="header_bar__icon" />,
        link: "/konto"
        },
    ];

    const importantMenuList = [
        { 
        name: "Strona główna",
        link: "/"
        },
        { 
        name: "Produkty",
        link: "/produkty"
        },{ 
        name: "Promocje",
        link: "/promocje"
        }
    ]

    const translateCategory = (category: Category) => {
        return {
        name: category.name,
        link:`/produkty/${category.name}`,
        icon: <FaHeart className={category.icon} />,
        options: category.subcategories.map(({ name }: Subcategory) => name),
        onOptionSelect: (name: string) => window.location.href=`/produkty/${category.name}/${name}`
        };
    };

    const menuList = categories.map((item: Category) =>  translateCategory(item) )

    return (
        <>
        <HeaderResult
            mainNavigation={headerItems}
            importantMenuList={importantMenuList} 
            menuList={menuList}      
            searchOptions={productOptions}
            logo={"https://img.freepik.com/darmowe-wektory/ptak-kolorowe-logo-wektor-gradientu_343694-1365.jpg"}   
        />
        
        </>
    );
};
