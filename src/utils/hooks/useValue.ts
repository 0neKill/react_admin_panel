import React from "react";
import {InterfaceAttachment, InterfaceAttachmentRequest} from "../../types/response/Attachment";
import {TypeDataField} from "../../types/general/Statistics";

export const useValueForModal = (attachment?: InterfaceAttachment) => {
    const [AttachmentRequest, setValue] = React.useState<InterfaceAttachmentRequest>({
        date: attachment?.date ? attachment.date : '',
        email: attachment?.email ? attachment.email : '',
        master: attachment?.master ? attachment.master : '',
        name: attachment?.name ? attachment.name : '',
        telephone: attachment?.telephone ? attachment.telephone : '',
        time: attachment?.time ? attachment.time : '',
        text: attachment?.text ? attachment.text : '',
    });
    const [empty, setEmpty] = React.useState<boolean>(true);
    const handlerClearAll = () => setValue({
        date: '',
        email: '',
        master: '',
        name: '',
        telephone: '',
        time: '',
        text: '',
    });
    React.useEffect(() => {
        setEmpty(Object.values(AttachmentRequest).includes(''));
    }, [AttachmentRequest]);
    const handlerSetAttachmentRequest = (field: TypeDataField, val: string) => {
        setValue(state => {
            return {
                ...state,
                [field]: val,
            }
        })
    };
    return {
        AttachmentRequest,
        empty,
        handlerSetAttachmentRequest,
        handlerClearAll
    }
}
type TypeUseSetValueInput = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
export const useSetValueInput = (): TypeUseSetValueInput => {
    const [value, setValue] = React.useState<string>('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value)
    };
    return {
        value, onChange
    }
}