import {TypeActiveItem} from "../../general/Statistics";
import {InterfaceAttachment} from "../../response/Attachment";

export interface InterfaceInitialState {
    filter: TypeActiveItem,
    attachments: Array<InterfaceAttachment>
}