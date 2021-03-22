import {PRICE} from "../../../store/keys/price";
import {InterfacePrice} from "../../response/Price";
import {TypePriceField, TypePriceTitle} from "../../general/Statistics";

interface InterfaceGetPricesAll {
    type: typeof PRICE.GET_PRICES_ALL,
    payload: {
        array: TypePriceField
        value: Array<InterfacePrice>
    }
}

interface InterfaceAddFieldPrice {
    type: typeof PRICE.ADD_FIELD_PRICE,
    payload: {
        array: TypePriceField
        value: InterfacePrice
    }
}

interface InterfaceSetValueMainPrice {
    type: typeof PRICE.SET_VALUE_PRICE,
    payload: {
        id: number,
        array: TypePriceField,
        title: TypePriceTitle,
        value: string,
    }
}


export  type TypeActionPrice = InterfaceGetPricesAll |
    InterfaceAddFieldPrice |
    InterfaceSetValueMainPrice
