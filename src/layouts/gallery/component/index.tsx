import React from 'react';
import {Upload, Modal} from 'antd';
import ImgCrop from 'antd-img-crop';
import {UploadChangeParam} from "antd/es/upload";
import {UploadFile} from "antd/es/upload/interface";

import {Container} from "../../../components";

import {InterfaceModalGallery} from "../../../types/store/gallery/gallery";
import {InterfaceGalleryObject} from "../../../types/response/Gallery";


type TypeGalleryProps = {
    fileList: Array<InterfaceGalleryObject>,
    value: InterfaceModalGallery,
    handleChangeImage: ({fileList}: UploadChangeParam<UploadFile<InterfaceGalleryObject>>) => void,
    handlePreview: (file: any) => void,
    handleCancel: () => void,
}


export const Gallery: React.FunctionComponent<TypeGalleryProps> = ({
                                                                       fileList,
                                                                       handleChangeImage,
                                                                       value,
                                                                       handleCancel,
                                                                       handlePreview
                                                                   }) => {


    return (
        <div className='gallery'>
            <Container size='normal'>
                <ImgCrop rotate>
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChangeImage}
                    >
                        {fileList.length >= 8 ? null : '+Загрузить'}
                    </Upload>
                </ImgCrop>
                <Modal
                    visible={value.previewVisible}
                    title={value.previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                >
                    <img alt="example" style={{width: '100%'}} src={value.previewImage}/>
                </Modal>
            </Container>
        </div>
    )
}

