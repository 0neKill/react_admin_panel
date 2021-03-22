import React from 'react';

import useVisible from "../../utils/hooks/useVisible";
import {Layout, Sidebar} from "../../components";

export const Dashboard: React.FunctionComponent = ({children}) => {
    const {visible, handlerGeneral} = useVisible();
    return (
        <section className='dashboard'>
            {visible && <Sidebar/>}
            <Layout visible={visible} handlerGeneral={handlerGeneral}>
                {children}
            </Layout>
        </section>
    )
};
