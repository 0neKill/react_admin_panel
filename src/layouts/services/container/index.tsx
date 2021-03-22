import React from 'react';

import {Services as BaseServices} from '../component';
import {useReducerPrice} from "../../../utils/hooks/useSelector";
import {TypePriceField, TypePriceTitle} from "../../../types/general/Statistics";
import {InterfacePrice} from "../../../types/response/Price";
import useAction from "../../../utils/hooks/useDispatch";

export const Services: React.FunctionComponent = () => {
    const countOnPage = React.useRef<number>(4);

    const {actionAddFieldPrice,actionSetValuePrice} = useAction();
    const {general_price, main_price} = useReducerPrice();

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

    const handlerAddField = (object: { array: TypePriceField, value: InterfacePrice }) => {
        actionAddFieldPrice(object);
    }
    const handlerChangeValue = (object: { id: number, array: TypePriceField, title: TypePriceTitle, value: string, }) => {
        console.log(object.value)
        actionSetValuePrice(object);
    }
    return <BaseServices
        handlerChangeValue={handlerChangeValue}
        handlerAddField={handlerAddField}
        general_price={general_price}
        main_price={main_price}
        handlerPagination={handlerPagination}
        countOnPage={countOnPage.current}
        pagination={pagination}
    />
}