import React from 'react';
import classNames from 'classnames';

import {Avatar, ButtonDelete, Modal} from '../';

import {InterfaceAttachment, InterfaceAttachmentRequest} from "../../types/response/Attachment";
import {InterfaceReview} from "../../types/response/Review";
import moment from "moment";
import 'moment/locale/ru';
import {InterfaceMaster} from "../../types/response/Master";

type TypePropsCard = {
    attachment?: InterfaceAttachment,
    review?: InterfaceReview,
    handlerClickRequest: (object: InterfaceAttachmentRequest) => void,
    masters?: Array<InterfaceMaster>,
    handlerClickRemoveRequest?: () => void,
}
export const Card: React.FunctionComponent<TypePropsCard> = React.memo((props) => {
    return (
        <div className={classNames('card', {
            'card-review': props.review,
            'card-success': props.attachment && props.attachment.done,
        })}>
            <Avatar url={props.review && props.review.url} name={props.attachment && props.attachment.name}/>
            {
                props.attachment && <div className='card-attachment'>
                    <div className="card-attachment__item card-attachment--name">{props.attachment.name}</div>
                    <div
                        className="card-attachment__item card-attachment--telephone">Телефон: {props.attachment.telephone}</div>
                    {
                        props.attachment.master &&
                        <div className="card-attachment__item card-attachment--master">
                            {
                                !props.attachment.done ?
                                    `Запись для мастера: ${props.attachment.master}` :
                                    `Мастер: ${props.attachment.master}`
                            }
                        </div>
                    }
                    {
                        (props.attachment.done && props.attachment.date && props.attachment.time) &&
                        <div className="card-attachment__item card-attachment--date">
                            <span>Дата: {moment(props.attachment.date, 'DD.MM.yyy').format('LL')}</span>
                            <span>Время: {props.attachment.time}</span>
                        </div>
                    }
                </div>
            }
            <div className="card__button-list">
                {
                    props.attachment &&
                    <Modal layout='attachment' handlerClickRequest={props.handlerClickRequest} title='Профиль'
                           type='profile'
                           className='modal__profile' attachment={props.attachment}/>
                }
                {
                    props.attachment && !props.attachment.done ?
                        <Modal layout='attachment' handlerClickRequest={props.handlerClickRequest}
                               title='Записать клиента'
                               masters={props.masters}
                               type='add'
                               attachment={props.attachment}/>
                        : props.attachment && props.attachment.done &&
                        <Modal layout='attachment'
                               handlerClickRequest={props.handlerClickRequest}
                               title='Перезаписать'
                               masters={props.masters}
                               type='edit'
                               attachment={props.attachment}/>
                }
                <ButtonDelete handlerClickRemoveRequest={props.handlerClickRemoveRequest}/>
            </div>
        </div>
    );
})
