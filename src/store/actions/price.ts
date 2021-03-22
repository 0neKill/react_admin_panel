import {TypePriceField, TypePriceTitle} from "../../types/general/Statistics";
import {InterfacePrice} from "../../types/response/Price";
import {TypeActionPrice} from "../../types/store/price/price_actions";
import {PRICE} from "../keys/price";

export const actionAddFieldPrice = (object: { array: TypePriceField, value: InterfacePrice }): TypeActionPrice => ({
    type: PRICE.ADD_FIELD_PRICE,
    payload: object,
})
export const actionGetPricesAll = (object: { array: TypePriceField, value: Array<InterfacePrice> }): TypeActionPrice => ({
    type: PRICE.GET_PRICES_ALL,
    payload: object,
})

export const actionSetValuePrice = (object: { id: number, array: TypePriceField, title: TypePriceTitle, value: string, }): TypeActionPrice => {
    return ({
        type: PRICE.SET_VALUE_PRICE,
        payload: object,
    })
}

