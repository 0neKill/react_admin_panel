import React from 'react';
import {Image} from "antd";
import {Modal} from "../modal";
import {ButtonDelete} from "../button-delete";
import {InterfaceMaster} from "../../types/response/Master";
import {InterfaceGalleryObject} from "../../types/response/Gallery";

type CardMasterProps = {
    master: InterfaceMaster,
    gallery_work: Array<InterfaceGalleryObject>
}
export const CardMaster: React.FunctionComponent<CardMasterProps> = (
    {
        master,
        gallery_work
    }
) => {
    return (
        <div className="card-master">
            <Image src={master.url} alt={master.name}/>
            <h4 className="card-master--title">{master.name}</h4>
            <div className="card-master__btn-list">
                <Modal type='add' title='Профиль' layout='master' master={master}
                       handlerClickRequest={() => console.log(1)} gallery_work={gallery_work}/>
                <ButtonDelete/>
            </div>
        </div>
    );
};
