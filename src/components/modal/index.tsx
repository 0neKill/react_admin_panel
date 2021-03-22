import React from 'react';
import classNames from "classnames";
import {Modal as BaseModal} from 'antd';

import {Button} from "../";
import useVisible from "../../utils/hooks/useVisible";
import {AttachmentModal} from "../../utils/helpers/attachmentModal";
import {useSetValueInput, useValueForModal} from "../../utils/hooks/useValue";
import {handlerAttachmentOk} from "../../utils/helpers/modalHandlerHelper";
import {ReviewModal} from '../../utils/helpers/reviewModal';


import {InterfaceReview} from "../../types/response/Review";
import {InterfaceMaster} from "../../types/response/Master";
import {TypeModal} from "../../types/general/Statistics";
import {InterfaceAttachment, TypeGeneralAttachments} from "../../types/response/Attachment";
import {MasterModal} from "../../utils/helpers/MasterModal";
import {InterfaceGalleryObject} from "../../types/response/Gallery";


type TypeModalProps = {
    className?: string,
    type: TypeModal,
    title: 'Профиль' | 'Записать клиента' | 'Записать на запись' | 'Изменить' | 'Перезаписать' | 'Добавить мастрера' | 'Добавить отзыв',
    layout: 'attachment' | 'review' | 'master',
    attachment?: InterfaceAttachment,
    review?: InterfaceReview,
    master?: InterfaceMaster,
    masters?: Array<InterfaceMaster>
    handlerClickRequest: (object: TypeGeneralAttachments) => void,
    gallery_work?: Array<InterfaceGalleryObject>
}


export const Modal: React.FunctionComponent<TypeModalProps> = React.memo(({
                                                                              title,
                                                                              className,
                                                                              attachment,
                                                                              review,
                                                                              master,
                                                                              masters,
                                                                              handlerClickRequest,
                                                                              type,
                                                                              layout,
                                                                              gallery_work
                                                                          }) => {
    const {visible, handlerShow, handlerCancel} = useVisible();
    const {AttachmentRequest, handlerSetAttachmentRequest, handlerClearAll, empty} = useValueForModal(attachment);
    const text = useSetValueInput();

    const handlerClearAndClose = () => {
        handlerClearAll();
        handlerCancel();
    }

    const handleOk = () => {
        switch (layout) {
            case 'attachment': {
                handlerAttachmentOk(attachment, AttachmentRequest, type, handlerClickRequest);
                break;
            }
        }
        handlerClearAndClose();
    };


    return (
        <>
            <Button type="primary" onClick={handlerShow} large={type === 'add_record' ? 'main' : undefined}>
                {title}
            </Button>
            <BaseModal
                className={classNames('modal', className)}
                title={title}
                visible={visible}
                onOk={handleOk}
                onCancel={handlerClearAndClose}
                footer={[
                    <Button key="back" type="primary" onClick={handlerClearAndClose}>
                        Выйти
                    </Button>,
                    type !== 'profile' && <Button key="submit" type="primary" onClick={handleOk} disabled={empty}>
                        Выполнить
                    </Button>
                ]}
            >
                <div className='modal__content'>
                    {layout === 'attachment' && attachment && <AttachmentModal
                        attachment={attachment}
                        masters={masters}
                        type={type}
                        AttachmentRequest={AttachmentRequest}
                        handlerSetAttachmentRequest={handlerSetAttachmentRequest}
                    />}
                    {layout === 'attachment' &&
                    type === 'add_record' &&
                    <AttachmentModal
                        type={type}
                        masters={masters}
                        AttachmentRequest={AttachmentRequest}
                        handlerSetAttachmentRequest={handlerSetAttachmentRequest}/>}
                    {layout === 'master' &&
                    <MasterModal
                        type={type}
                        master={master}
                        gallery_work={gallery_work}/>
                    }
                    {layout === 'review' &&
                    <ReviewModal
                        textValue={text}
                        type={type}
                    />
                    }
                </div>

            </BaseModal>
        </>
    );
})