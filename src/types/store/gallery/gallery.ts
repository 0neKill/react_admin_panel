import {InterfaceGalleryObject} from "../../response/Gallery";

export interface InterfaceModalGallery {
    previewVisible: boolean,
    previewImage: string,
    previewTitle: string
}


export interface InterfaceInitialState {
    gallery_work: Array<InterfaceGalleryObject>
}