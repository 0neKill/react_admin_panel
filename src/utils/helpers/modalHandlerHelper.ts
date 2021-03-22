import {InterfaceAttachment, TypeGeneralAttachments} from "../../types/response/Attachment";
import {TypeModal} from "../../types/general/Statistics";

export const handlerAttachmentOk = (attachment: InterfaceAttachment | undefined,
                                    attachment_request: TypeGeneralAttachments,
                                    type: TypeModal,
                                    handlerClickRequest: (object: TypeGeneralAttachments) => void
) => {
    if (attachment && type === 'add') {
        handlerClickRequest(
            {
                id: attachment.id,
                done: attachment.done,
                name: attachment.name,
                email: attachment.email,
                telephone: attachment.telephone,
                text: attachment_request.text,
                time: attachment_request.time,
                date: attachment_request.date,
                master: attachment_request.master,
            }
        );
    } else if (attachment && type === 'edit') {
        handlerClickRequest(
            {
                id: attachment.id,
                done: attachment.done,
                name: attachment.name,
                email: attachment.email,
                telephone: attachment.telephone,
                text: attachment_request.text,
                time: attachment_request.time || attachment.time,
                date: attachment_request.date || attachment.date,
                master: attachment_request.master || attachment.master,
            }
        );
    }
    if (type === 'add_record') {
        handlerClickRequest(
            {
                name: attachment_request.name,
                email: attachment_request.email,
                telephone: attachment_request.telephone,
                text: attachment_request.text,
                time: attachment_request.time,
                date: attachment_request.date,
                master: attachment_request.master,
            }
        );
    }
}