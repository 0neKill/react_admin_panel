import React from 'react';

import {CreateSidebarItem} from "../../utils/helpers/createSidebarItem";


export const Sidebar: React.FunctionComponent = () => (
    <div className='sidebar'>
        <h2 className='sidebar__title'>Меню инструментов</h2>
        <CreateSidebarItem/>
    </div>
);

