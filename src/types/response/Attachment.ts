export interface InterfaceAttachmentRequest {
    name: string,
    telephone: string,
    master?: string,
    date?: string,
    time?: string,
    email?: string,
    text?: string,
}

export interface InterfaceAttachment extends InterfaceAttachmentRequest {
    id: string,
    done: boolean,
}

export type TypeGeneralAttachments = InterfaceAttachment | InterfaceAttachmentRequest;