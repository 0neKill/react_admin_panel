import React from 'react';
import classNames from "classnames";

import useGetResultAttachment from "../../utils/helpers/useGetResultAttachment";

import {InterfaceAttachment} from "../../types/response/Attachment";
import {TypeActiveItem} from "../../types/general/Statistics";

type TypeStatistics = {
    attachment: Array<InterfaceAttachment>,
    active_item: TypeActiveItem,
    handlerActiveStatistics: (active_item: TypeActiveItem) => void,
}
const statistics_item: Array<{ id: number, name: 'Всего' | 'Новые' | 'Записаны', className: TypeActiveItem }> = [
    {
        id: 1,
        name: 'Всего',
        className: 'all',

    },
    {
        id: 2,
        name: 'Новые',
        className: 'new',

    },
    {
        id: 3,
        name: 'Записаны',
        className: 'success',
    },
]
export const Statistics: React.FunctionComponent<TypeStatistics> = React.memo(({
                                                                                   attachment,
                                                                                   handlerActiveStatistics,
                                                                                   active_item
                                                                               }) => {
    const {all, new_item, success} = useGetResultAttachment(attachment);
    return (
        <div className='statistics'>
            {
                statistics_item.map(item => (
                    <div
                        key={`${item.id}_${item.name}`}
                        className={classNames('statistics__item', item.className, {'is-active': active_item === item.className})}
                        onClick={() => handlerActiveStatistics(item.className)}>
                        <h3 className='statistics__item--title'>{item.name}: {item.name === 'Всего' ?
                            all : item.name === 'Новые' ?
                                new_item : success}</h3>
                    </div>
                ))
            }
        </div>
    );
});

