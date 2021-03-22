import React from 'react';
import {Popconfirm} from "antd";
import {Button} from "../button";

interface ButtonDeleteProps {
    handlerClickRemoveRequest?: () => void,
}

export const ButtonDelete: React.FunctionComponent<ButtonDeleteProps> = ({
                                                                             handlerClickRemoveRequest,
                                                                         }) => {
    return (
        <Popconfirm
            className='card__confirm'
            title="Удалить?"
            okText="Да"
            onConfirm={() => handlerClickRemoveRequest!()}
            cancelText="Нет"
        >
            <Button type='primary'>Удалить</Button>
        </Popconfirm>
    );
};

