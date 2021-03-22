import {InterfaceInitialState} from "../../types/store/attachments/attachments";
import {TypeAttachmentsActions} from "../../types/store/attachments/attachments_actions";
import {ATTACHMENTS} from "../keys/attachments";
import {InterfaceAttachment, TypeGeneralAttachments} from "../../types/response/Attachment";


const initialState: InterfaceInitialState = {
    filter: "all",
    attachments: [
        {
            id: '1',
            name: 'Александр',
            telephone: '+9999999999',
            master: 'Петя',
            done: false,
            email: '12341232341',
        },
    ]
}

export default function reducerAttachments(state: InterfaceInitialState = initialState, action: TypeAttachmentsActions): InterfaceInitialState {
    switch (action.type) {
        case ATTACHMENTS.SET_FILTER: {
            return {
                ...state,
                filter: action.payload,
            }
        }
        case ATTACHMENTS.SET_ATTACHMENTS: {
            return {
                ...state,
                attachments: action.payload,
            }
        }
        case ATTACHMENTS.ADD_ATTACHMENT: {
            const {text, ...data}: TypeGeneralAttachments = action.payload;
            return {
                ...state,
                attachments: [...state.attachments, data as InterfaceAttachment],
            }
        }
        case ATTACHMENTS.REMOVE_ATTACHMENT: {
            const new_array = state.attachments.filter(item => item.id !== action.payload);
            console.log(new_array)
            return {
                ...state,
                attachments: new_array,
            }
        }
        case ATTACHMENTS.RECORD_ATTACHMENT: {
            const array: Array<InterfaceAttachment> = [...state.attachments];
            const index = array.findIndex(item => item.id === action.payload.id);
            console.log(action.payload.master)
            array[index] = {
                ...array[index],
                master: action.payload.master,
                time: action.payload.time,
                date: action.payload.date,
                done: true
            }
            return {
                ...state,
                attachments: array,
            }
        }
        default:
            return state
    }
}
