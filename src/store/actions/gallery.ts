import {GALLERY} from "../keys/gallery";
import {TypeGalleryAction} from "../../types/store/gallery/gallery_actions";
import {InterfaceGalleryObject} from "../../types/response/Gallery";




export const actionAddGallery = (array: Array<InterfaceGalleryObject>): TypeGalleryAction => ({
    type: GALLERY.ADD_GALLERY,
    payload: array,
})