import {ATTACHMENTS} from "../keys/attachments";
import {TypeAttachmentsActions} from "../../types/store/attachments/attachments_actions";
import {TypeActiveItem} from "../../types/general/Statistics";
import {InterfaceAttachment, TypeGeneralAttachments} from "../../types/response/Attachment";

export const actionSetFilterAction = (filter: TypeActiveItem): TypeAttachmentsActions => ({
    type: ATTACHMENTS.SET_FILTER,
    payload: filter,
});

export const actionSetAttachmentAction = (attachments: Array<InterfaceAttachment>): TypeAttachmentsActions => ({
    type: ATTACHMENTS.SET_ATTACHMENTS,
    payload: attachments,
});
export const actionAddAttachmentAction = (attachment: TypeGeneralAttachments): TypeAttachmentsActions => ({
    type: ATTACHMENTS.ADD_ATTACHMENT,
    payload: attachment,
});
export const actionRecordAttachmentAction = (attachment: InterfaceAttachment): TypeAttachmentsActions => ({
    type: ATTACHMENTS.RECORD_ATTACHMENT,
    payload: attachment,
});
export const actionRemoveAttachmentAction = (id: string): TypeAttachmentsActions => ({
    type: ATTACHMENTS.REMOVE_ATTACHMENT,
    payload: id,
});

export const actionFetchRequestAttachmentsAction = (): TypeAttachmentsActions => ({
    type: ATTACHMENTS.FETCH_REQUEST_ATTACHMENTS,
});
