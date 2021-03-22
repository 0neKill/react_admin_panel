import React from 'react';
import {Result} from "antd";
import {useHistory} from 'react-router-dom';

import {Button} from "../../components";

export const PageNotFound = () => {
    const history = useHistory();
    return (
        <Result
            status="404"
            title="404"
            subTitle="Страница не существует"
            extra={<Button type="primary" onClick={() => history.push('/')}>Back Home</Button>}
        />
    )
};

