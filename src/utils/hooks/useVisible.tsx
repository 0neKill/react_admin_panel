import React from 'react';

export default function useVisible() {
    const [visible, setVisible] = React.useState<boolean>(false);

    const handlerShow = () => setVisible(true);
    const handlerCancel = () => setVisible(false);
    const handlerGeneral = React.useCallback(() => setVisible(state => !state),[]);

    return {
        visible,
        handlerShow,
        handlerCancel,
        handlerGeneral
    }
};

