import {InterfaceInitialState} from "../../types/store/price/price";
import {TypeActionPrice} from "../../types/store/price/price_actions";
import {PRICE} from "../keys/price";
import {TypePriceField, TypePriceTitle} from "../../types/general/Statistics";
import {InterfacePrice} from "../../types/response/Price";

const initialState: InterfaceInitialState = {
    main_price: [],
    general_price: []
}

export default function reducerPrice(state: InterfaceInitialState = initialState, action: TypeActionPrice): InterfaceInitialState {
    console.log(123)
    switch (action.type) {

        case PRICE.GET_PRICES_ALL: {
            return {
                ...state,
                [action.payload.array]: action.payload.value
            }
        }
        case PRICE.ADD_FIELD_PRICE: {
            return {
                ...state,
                [action.payload.array]: [
                    ...state[action.payload.array],
                    action.payload.value
                ]
            }
        }
        case PRICE.SET_VALUE_PRICE: {
            return {
                ...state,
                [action.payload.array]: set_array(action.payload, state[action.payload.array])
            }
        }
        default:
            return state;
    }
}
const set_array = (object: { id: number, array: TypePriceField, title: TypePriceTitle, value: string, }, array: Array<InterfacePrice>) => {
    const array_new = [...array];
    const idx = array_new.findIndex(item => item.id === object.id);
    array_new[idx] = {...array_new[idx], [object.title]: object.value};
    return array_new
}