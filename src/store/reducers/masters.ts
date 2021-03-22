import {InterfaceInitialState} from "../../types/store/masters/masters";
import {TypeActionMasters} from "../../types/store/masters/masters_actions";
import {MASTERS} from "../keys/masters";

const initialState: InterfaceInitialState = {
    masters: [

        {
            about: 'hello',
            id: '14fg23',
            name: '2134sda',
            url: 'https://get.wallhere.com/photo/face-black-model-portrait-photography-actor-hair-nose-Person-skin-head-Tobey-Maguire-beauty-smile-eye-man-guy-male-hairstyle-portrait-photography-photo-shoot-brown-hair-facial-expression-close-up-717923.jpg',
        },
        {
            about: 'hello',
            id: '123',
            name: '324d',
            url: 'https://get.wallhere.com/photo/face-black-model-portrait-photography-actor-hair-nose-Person-skin-head-Tobey-Maguire-beauty-smile-eye-man-guy-male-hairstyle-portrait-photography-photo-shoot-brown-hair-facial-expression-close-up-717923.jpg',
        },
    ],
}
export default function reducerMasters(state: InterfaceInitialState = initialState, action: TypeActionMasters): InterfaceInitialState {
    switch (action.type) {
        case MASTERS.SET_MASTERS: {
            return {
                ...state,
                masters: action.payload,
            }
        }
        default:
            return state;
    }
}