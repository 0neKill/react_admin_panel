import React from 'react';

import {Gallery as BaseGallery} from '../component';
import {useReducerGallery} from "../../../utils/hooks/useSelector";


import useAction from "../../../utils/hooks/useDispatch";
import {getBase64} from "../../../utils/general";
import {InterfaceModalGallery} from "../../../types/store/gallery/gallery";


export const Gallery: React.FunctionComponent = () => {
    const {gallery_work} = useReducerGallery();

    const {actionAddGallery} = useAction();

    const [value, setState] = React.useState<InterfaceModalGallery>({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
    });

    const handleChangeImage = React.useCallback(({fileList}: any) => {
        actionAddGallery(fileList);
    }, [gallery_work]);


    const handleCancel = () => {
        setState(state => ({
            ...state,
            previewVisible: false,
        }))
    };

    const handlePreview = async (file: any) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setState(state => ({
            ...state,
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        }));
    };

    return <BaseGallery
        handlePreview={handlePreview}
        handleCancel={handleCancel}
        fileList={gallery_work}
        handleChangeImage={handleChangeImage}
        value={value}
    />
}
