import {InterfaceInitialState} from "../../types/store/gallery/gallery";
import {TypeGalleryAction} from "../../types/store/gallery/gallery_actions";
import {GALLERY} from "../keys/gallery";

const initialState: InterfaceInitialState = {
    gallery_work: [
        {
            url:'https://im0-tub-ru.yandex.net/i?id=137d1928598537d9050a2ae2b45fd43a-l&ref=rim&n=13&w=1080&h=1350',
            lastModified:321123,
            name:'123123',
            size:213123,
            type:"image/jpeg",
            uid:"42342342"
        },
    ]
}

export default function reducerGallery(state: InterfaceInitialState = initialState, action: TypeGalleryAction) {
    switch (action.type) {
        case GALLERY.ADD_GALLERY : {
            return {
                ...state,
                gallery_work: action.payload
            }
        }
        default:
            return state
    }
}