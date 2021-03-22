import React from 'react';
import {Button as BaseButton, ButtonProps,} from 'antd';
import classNames from "classnames";

interface TypeButtonProps extends ButtonProps {
    large?: string,
    className?: string
}

export const Button: React.FunctionComponent<TypeButtonProps> = React.memo((props) => (
        <BaseButton className={classNames('button', props.className, {'button-main': props.large === 'main'})} {...props}/>
    )
)

