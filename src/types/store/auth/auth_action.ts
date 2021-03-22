import {AUTH} from "../../../store/keys/auth";

interface interfaceSetAuth {
    type: typeof AUTH.SET_AUTHORIZATION,
    payload: boolean,
}

export type TypeAuthActions = interfaceSetAuth;