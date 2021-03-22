import {combineReducers} from 'redux';
import reducerAuth from './auth';
import reducerAttachments from './attachments';
import reducerGallery from './gallery';
import reducerMasters from './masters';
import reducerPrice from './price';


import {InterfaceRootReducer} from "../../types/store/general";

export default combineReducers<InterfaceRootReducer>({
    auth: reducerAuth,
    attachments: reducerAttachments,
    gallery: reducerGallery,
    masters: reducerMasters,
    price: reducerPrice
});