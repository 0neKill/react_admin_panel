import React from 'react';
import classNames from "classnames";

type TypeContainer = {
    className?: string,
    size: 'normal' | 'small',
}

export const Container: React.FunctionComponent<TypeContainer> = React.memo(({
                                                                                 children,
                                                                                 className,
                                                                                 size
                                                                             }) => {
    return (
        <div className={classNames("container", className, {'small': size === 'small'})}>
            {children}
        </div>
    )
})
