import React from 'react';

import {Card, Container, Modal, Statistics} from "../../../components";

import {InterfaceAttachment, TypeGeneralAttachments} from "../../../types/response/Attachment";
import {TypeActiveItem} from "../../../types/general/Statistics";
import {Empty, Pagination} from "antd";
import {InterfaceMaster} from "../../../types/response/Master";

type TypeAppointment = {
    attachments: Array<InterfaceAttachment>
    active_item: TypeActiveItem,
    handlerActiveStatistics: (active_item: TypeActiveItem) => void,
    handlerPagination: (value: number) => void,
    pagination: { minValue: number, maxValue: number },
    countOnPage: number,
    handlerClickRequest: (object: TypeGeneralAttachments) => void,
    handlerClickRecordRequest: (object: TypeGeneralAttachments) => void,
    handlerClickRemoveRequest: (id: string) => void,
    masters: Array<InterfaceMaster>
}

export const Appointment: React.FunctionComponent<TypeAppointment> = React.memo(({
                                                                                     attachments,
                                                                                     active_item,
                                                                                     handlerActiveStatistics,
                                                                                     handlerPagination,
                                                                                     pagination,
                                                                                     countOnPage,
                                                                                     handlerClickRequest,
                                                                                     handlerClickRecordRequest,
                                                                                     handlerClickRemoveRequest,
                                                                                     masters
                                                                                 }) => {
        return (
            <div className='appointment'>
                <Container size='normal'>
                    <Statistics
                        attachment={attachments}
                        active_item={active_item}
                        handlerActiveStatistics={handlerActiveStatistics}
                    />
                    <h2 className='appointment__title'>Всего: {attachments.length}</h2>
                    <Modal handlerClickRequest={handlerClickRequest}
                           layout='attachment'
                           type='add_record'
                           masters={masters}
                           title='Записать на запись'>Записать на запись</Modal>
                    {
                        attachments.length > 0 ?
                            attachments.slice(pagination.minValue, pagination.maxValue).map(item => (
                                <Card
                                    masters={masters}
                                    handlerClickRequest={handlerClickRecordRequest}
                                    handlerClickRemoveRequest={() => handlerClickRemoveRequest(item.id)}
                                    key={`${item.id}_${item.name}`}
                                    attachment={item}/>
                            )) : <Empty description={'Нет новый записей'}/>
                    }
                    <Pagination
                        total={attachments.length}
                        defaultCurrent={1}
                        defaultPageSize={countOnPage}
                        onChange={handlerPagination}/>
                </Container>
            </div>
        );
    }
)
