import React from 'react';

import {Masters as BaseMasters} from '../component';

import {useReducerGallery, useReducerMasters} from "../../../utils/hooks/useSelector";

export const Masters: React.FunctionComponent = () => {
    const countOnPage = React.useRef<number>(2);
    const {masters} = useReducerMasters();
    const {gallery_work} = useReducerGallery();

    const [pagination, setPagination] = React.useState<{ minValue: number, maxValue: number }>({
        minValue: 0,
        maxValue: countOnPage.current
    });

    const handlerPagination = (value: number) => {
        setPagination({
            minValue: (value - 1) * countOnPage.current,
            maxValue: value * countOnPage.current
        });
    }

    return <BaseMasters
        countOnPage={countOnPage.current}
        pagination={pagination}
        handlerPagination={handlerPagination}
        masters_list={masters}
        gallery_work={gallery_work}
    />
}