import {useSelector} from 'react-redux';

import {InterfaceInitialState as InterfaceInitialStateAttachments} from "../../types/store/attachments/attachments";
import {InterfaceInitialState as InterfaceInitialStateGallery} from "../../types/store/gallery/gallery";
import {InterfaceInitialState as InterfaceInitialStateMasters} from "../../types/store/masters/masters";
import {InterfaceInitialState as InterfaceInitialStatePrice} from "../../types/store/price/price";
import {InterfaceRootReducer} from "../../types/store/general";

export const useReducerAttachments = (): InterfaceInitialStateAttachments => {
    const {attachments, filter} = useSelector((state: InterfaceRootReducer) => ({
        filter: state.attachments.filter,
        attachments: state.attachments.attachments,
    }))
    return {
        filter, attachments
    }
}

export const useReducerGallery = (): InterfaceInitialStateGallery => {
    const {gallery_work} = useSelector((state: InterfaceRootReducer) => ({
        gallery_work: state.gallery.gallery_work,
    }))
    return {
        gallery_work
    }
}

export const useReducerMasters = (): InterfaceInitialStateMasters => {
    const {masters} = useSelector((state: InterfaceRootReducer) => ({
        masters: state.masters.masters,
    }))
    return {
        masters
    }
}
export const useReducerPrice = (): InterfaceInitialStatePrice => {
    const {main_price, general_price} = useSelector((state: InterfaceRootReducer) => ({
        main_price: state.price.main_price,
        general_price: state.price.general_price,
    }))
    return {
        main_price, general_price
    }
}