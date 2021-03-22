import {InterfaceInitialState} from "../../types/store/auth/auth";
import {TypeAuthActions} from "../../types/store/auth/auth_action";
import {AUTH} from "../keys/auth";

const initialState: InterfaceInitialState = {
    auth: true,
    // auth: !!localStorage.getItem('Authorization'),
}

export default function reducerAuth(state: InterfaceInitialState = initialState, action: TypeAuthActions): InterfaceInitialState {
    switch (action.type) {
        case AUTH.SET_AUTHORIZATION: {
            return {
                ...state
            }
        }
        default:
            return state
    }
}