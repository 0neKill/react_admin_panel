import {InterfaceAttachment} from "../../types/response/Attachment";

type TypeReturnUseGetResultAttachment = {
    all: number,
    new_item: number,
    success: number
}
export default function useGetResultAttachment(attachment: Array<InterfaceAttachment>): TypeReturnUseGetResultAttachment {

    const all: number = attachment.length;
    const new_item: number = attachment.filter(item => !item.done).length;
    const success: number = attachment.filter(item => item.done).length;

    return {
        all,
        new_item,
        success
    }
}