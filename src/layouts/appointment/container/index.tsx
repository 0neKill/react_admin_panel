import React from 'react';

import {Appointment as BaseAppointment} from '../component';
import {useReducerAttachments, useReducerMasters} from "../../../utils/hooks/useSelector";
import useAction from "../../../utils/hooks/useDispatch";

import {TypeActiveItem} from "../../../types/general/Statistics";
import {InterfaceAttachment, TypeGeneralAttachments} from "../../../types/response/Attachment";

export const Appointment: React.FunctionComponent = React.memo(() => {
    const countOnPage = React.useRef<number>(4);

    const {attachments, filter} = useReducerAttachments();
    const {actionSetFilterAction, actionAddAttachmentAction, actionRecordAttachmentAction,actionRemoveAttachmentAction} = useAction();

    const {masters} = useReducerMasters();
    const [pagination, setPagination] = React.useState<{ minValue: number, maxValue: number }>({
        minValue: 0,
        maxValue: countOnPage.current
    });

    const handlerPagination = (value: number) => {
        setPagination({
            minValue: (value - 1) * countOnPage.current,
            maxValue: value * countOnPage.current
        });
    }

    const handlerFilter = (filter: TypeActiveItem) => {
        actionSetFilterAction(filter);
    };
    const handlerClickRequest = (object: TypeGeneralAttachments) => {
        actionAddAttachmentAction(object)
    };
    const handlerClickRecordRequest = (object: TypeGeneralAttachments) => {
        actionRecordAttachmentAction(object as InterfaceAttachment)
    };

    const handlerClickRemoveRequest = (id: string) => {
        console.log(id)
        actionRemoveAttachmentAction(id);
    };

    return <BaseAppointment
        handlerPagination={handlerPagination}
        pagination={pagination}
        countOnPage={countOnPage.current}
        attachments={attachments}
        handlerActiveStatistics={handlerFilter}
        active_item={filter}
        masters={masters}
        handlerClickRequest={handlerClickRequest}
        handlerClickRecordRequest={handlerClickRecordRequest}
        handlerClickRemoveRequest={handlerClickRemoveRequest}
    />
})