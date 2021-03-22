import {ATTACHMENTS} from "../../../store/keys/attachments";
import {InterfaceAttachment, TypeGeneralAttachments} from "../../response/Attachment";
import {TypeActiveItem} from "../../general/Statistics";

interface InterfaceSetFilterAction {
    type: typeof ATTACHMENTS.SET_FILTER,
    payload: TypeActiveItem
}

interface InterfaceSetAttachmentAction {
    type: typeof ATTACHMENTS.SET_ATTACHMENTS,
    payload: Array<InterfaceAttachment>
}

interface InterfaceFetchRequestAttachmentsAction {
    type: typeof ATTACHMENTS.FETCH_REQUEST_ATTACHMENTS,
}

interface InterfaceAddAttachmentAction {
    type: typeof ATTACHMENTS.ADD_ATTACHMENT,
    payload: TypeGeneralAttachments
}

interface InterfaceRecordAttachmentAction {
    type: typeof ATTACHMENTS.RECORD_ATTACHMENT,
    payload: InterfaceAttachment
}

interface InterfaceRemoveAttachmentAction {
    type: typeof ATTACHMENTS.REMOVE_ATTACHMENT,
    payload: string
}

export type TypeAttachmentsActions =
    InterfaceSetFilterAction
    | InterfaceSetAttachmentAction
    | InterfaceFetchRequestAttachmentsAction
    | InterfaceAddAttachmentAction
    | InterfaceRecordAttachmentAction
    | InterfaceRemoveAttachmentAction;