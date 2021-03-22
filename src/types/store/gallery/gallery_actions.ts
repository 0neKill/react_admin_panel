import {GALLERY} from "../../../store/keys/gallery";
import {InterfaceGalleryObject} from "../../response/Gallery";

interface InterfaceAddGallery {
    type: typeof GALLERY.ADD_GALLERY,
    payload: Array<InterfaceGalleryObject>,
}
export type TypeGalleryAction = InterfaceAddGallery;