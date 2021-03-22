import React from 'react';
import {NavLink} from "react-router-dom";

type TypeArrayItems = {
    id: number,
    url: '/attachments' | '/gallery' | '/masters' | '/contact' | '/reviews' | '/services';
    name: 'Заявки' | 'Галерея' | 'Мастерская' | 'Услуги и цены' | 'Отзывы' | 'Контакты';
}
const array_items: Array<TypeArrayItems> = [
    {
        id: 1,
        name: "Заявки",
        url: '/attachments',
    },
    {
        id: 2,
        name: "Галерея",
        url: '/gallery',
    },
    {
        id: 3,
        name: "Мастерская",
        url: '/masters',
    },
    {
        id: 4,
        name: "Услуги и цены",
        url: '/services',
    },
    {
        id: 5,
        name: "Отзывы",
        url: '/reviews',
    },
    {
        id: 6,
        name: "Контакты",
        url: '/contact',
    },
]

export const CreateSidebarItem: React.FunctionComponent = () => {
    return <>
        {
            array_items.map(item => (
                <NavLink key={item.id} to={item.url} className="sidebar__item" activeClassName='is-active'>
                    <span className='sidebar__item--name'>{item.name}</span>
                </NavLink>
            ))
        }
    </>
};

