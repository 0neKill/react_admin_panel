import {InterfaceInitialState as InterfaceInitialStateAuth} from "./auth/auth";
import {InterfaceInitialState as InterfaceInitialStateAttachments} from "./attachments/attachments";
import {InterfaceInitialState as InterfaceInitialStateGallery} from "./gallery/gallery";
import {InterfaceInitialState as InterfaceInitialStateMasters} from "./masters/masters";
import {InterfaceInitialState as InterfaceInitialStatePrice} from "./price/price";

export interface InterfaceRootReducer {
    auth: InterfaceInitialStateAuth,
    attachments: InterfaceInitialStateAttachments,
    gallery: InterfaceInitialStateGallery
    masters: InterfaceInitialStateMasters,
    price: InterfaceInitialStatePrice,
}