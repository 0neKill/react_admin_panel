import React from 'react';

type TypeLayout = {
    visible: boolean,
    handlerGeneral: () => void,
}
export const Layout: React.FunctionComponent<TypeLayout> = ({
                                                                visible,
                                                                handlerGeneral,
                                                                children
                                                            }) => (
    <div className="layouts">
        <header className="layouts-header">
            <h1 className='layouts-header__title'>Админ панель</h1>
            <div className="layouts-header--hamburger" onClick={handlerGeneral}>
                <button className={`hamburger hamburger--emphatic ${visible && 'is-active'}`} type="button"
                        data-popup="popup__menu">
                            <span className="hamburger-box">
                                 <span className="hamburger-inner"/>
                            </span>
                </button>
            </div>
        </header>
        {children}
    </div>
);

