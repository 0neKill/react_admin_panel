import React from 'react';
import moment from 'moment';
import {Image, Input, Select} from "antd";

import locale from 'antd/es/date-picker/locale/ru_RU';
import {DatePicker, TimePicker} from "antd/es";
import TextArea from "antd/es/input/TextArea";

import {InterfaceAttachment, InterfaceAttachmentRequest} from "../../types/response/Attachment";
import {TypeDataField, TypeModal} from "../../types/general/Statistics";
import {InterfaceMaster} from "../../types/response/Master";


type TypeAttachmentModal = {
    type: TypeModal,
    attachment?: InterfaceAttachment,
    handlerSetAttachmentRequest: (field: TypeDataField, val: string) => void,
    AttachmentRequest: InterfaceAttachmentRequest,
    masters?: Array<InterfaceMaster>
}

export const AttachmentModal: React.FunctionComponent<TypeAttachmentModal> = React.memo(({
                                                                                             attachment,
                                                                                             type,
                                                                                             AttachmentRequest,
                                                                                             handlerSetAttachmentRequest,
                                                                                             masters,
                                                                                         }) => (
    <>
        {
            attachment && <>
                {
                    type === 'profile' ?
                        <>
                            <p className='attachment--profile'>Имя: <span>{attachment.name}</span></p>
                            <p className='attachment--profile'>Email: <span>{attachment.email}</span></p>
                            <p className='attachment--profile'>Телефон: <span>{attachment.telephone}</span></p>
                            {attachment.master &&
                            <p className='attachment--profile'>{attachment.done ? 'Мастер: ' : 'Запись для мастера: '}
                                <span>{attachment.master}</span></p>}
                            <p className='attachment--profile'>Записан: <span>{attachment.done ? 'Да' : 'Нет'}</span>
                            </p>
                            {attachment.done && attachment.date &&
                            <p className='attachment--profile'>Дата: <span>{moment(attachment.date, 'DD.MM.yyy').format('LL')}</span>
                            </p>}
                            {attachment.done && attachment.time &&
                            <p className='attachment--profile'>Время: <span>{attachment.time}</span></p>}
                        </> :
                        type === 'add' ? <>
                                <div className="modal__info">
                                    <h2>Телефон клиента: <span>{attachment.telephone}</span></h2>
                                    <p>позвоните,чтобы уточнить дату.</p>
                                </div>
                                <div className="modal__record">
                                    <p className='modal__record--title'>Выберите мастера</p>
                                    <Select
                                        onSearch={(value) => console.log(value)}
                                        style={{width: '100%'}}
                                        onSelect={(value) => handlerSetAttachmentRequest('master', value as string)}
                                        defaultActiveFirstOption={false}
                                        showArrow={false}
                                        filterOption={false}
                                        showSearch={true}
                                        notFoundContent={null}
                                    >
                                        {masters && masters.map(item => (
                                            <Select.Option key={item.id} value={item.name}>{item.name}</Select.Option>
                                        ))}
                                    </Select>
                                    {/*<Input*/}
                                    {/*    value={AttachmentRequest.master}*/}
                                    {/*    onChange={(e) => handlerSetAttachmentRequest('master', e.target.value)}*/}
                                    {/*/>*/}
                                    <p className='modal__record--title'>Выберите день приема</p>
                                    <DatePicker
                                        onChange={(val: any, value: string) => handlerSetAttachmentRequest('date', value)}
                                        locale={locale}
                                        format='DD.MM.yyy'/>
                                    <p className='modal__record--title'>Выберите время</p>
                                    <TimePicker
                                        onChange={(val: any, value: string) => handlerSetAttachmentRequest('time', value)}
                                        locale={locale}
                                    />
                                    <p className='modal__record--title'>Введите письмо, которое хотите отправить</p>
                                    <TextArea
                                        rows={4}
                                        value={AttachmentRequest.text}
                                        onChange={(e) => handlerSetAttachmentRequest('text', e.target.value)}
                                        showCount
                                        maxLength={100}
                                    />
                                </div>
                            </> :
                            type === 'edit' && <>
                                <div className="modal__info">
                                    <h2>Телефон клиента: <span>{attachment.telephone}</span></h2>
                                </div>
                                <div className="modal__record">
                                    <p className='modal__record--title'>Выберите мастера</p>
                                    <Input
                                        value={AttachmentRequest.master}
                                        onChange={(e) => handlerSetAttachmentRequest('master', e.target.value)}
                                    />
                                    <p className='modal__record--title'>Выберите день приема</p>
                                    <DatePicker defaultValue={moment(attachment.date, 'L')}
                                                onChange={(val: any, value: string) => handlerSetAttachmentRequest('date', value)}
                                                locale={locale}
                                                format='DD.MM.yyy'
                                    />
                                    <p className='modal__record--title'>Выберите время</p>
                                    <TimePicker defaultValue={moment(attachment.time, 'LTS')}
                                                onChange={(val: any, value: string) => handlerSetAttachmentRequest('time', value)}
                                                locale={locale}
                                    />
                                    <p className='modal__record--title'>Введите письмо, которое хотите отправить</p>
                                    <TextArea
                                        rows={4}
                                        value={AttachmentRequest.text}
                                        onChange={(e) => handlerSetAttachmentRequest('text', `${!AttachmentRequest.text ? 'Мы вас перезаписали ' + e.target.value : e.target.value}`)}
                                        showCount
                                        maxLength={100}
                                    />
                                </div>
                            </>
                }
            </>
        }
        {
            type === 'add_record' && <>
                <div className="modal__record">
                    <p className='modal__record--title'>Введите номер</p>
                    <Input
                        name='telephone'
                        value={AttachmentRequest.telephone}
                        onChange={(e) => handlerSetAttachmentRequest('telephone', e.target.value)}
                    />
                    <p className='modal__record--title'>Введите E-mail</p>
                    <Input
                        value={AttachmentRequest.email}
                        onChange={(e) => handlerSetAttachmentRequest('email', e.target.value)}
                    />
                    <p className='modal__record--title'>Введите имя</p>
                    <Input
                        value={AttachmentRequest.name}
                        onChange={(e) => handlerSetAttachmentRequest('name', e.target.value)}
                    />
                    <p className='modal__record--title'>Выберите мастера</p>
                    <Input
                        value={AttachmentRequest.master}
                        onChange={(e) => handlerSetAttachmentRequest('master', e.target.value)}
                    />
                    <p className='modal__record--title'>Выберите день приема</p>
                    <DatePicker onChange={(val: any, value: string) => handlerSetAttachmentRequest('date', value)}
                                locale={locale}
                                format='DD.MM.yyy'/>
                    <p className='modal__record--title'>Выберите время</p>
                    <TimePicker onChange={(val: any, value: string) => handlerSetAttachmentRequest('time', value)}
                                locale={locale}
                    />
                    <p className='modal__record--title'>Введите письмо, которое хотите отправить</p>
                    <TextArea
                        rows={4}
                        value={AttachmentRequest.text}
                        onChange={(e) => handlerSetAttachmentRequest('text', e.target.value)}
                        showCount
                        maxLength={100}
                    />
                </div>
            </>
        }
    </>
));

