import React from 'react';
import TextArea from "antd/es/input/TextArea";
import {Image, Input, Select, Tag, Upload} from "antd";

import {Button} from "../../components";

import {InterfaceMaster} from "../../types/response/Master";
import {TypeModal} from "../../types/general/Statistics";
import {InterfaceGalleryObject} from "../../types/response/Gallery";

type MasterModalProps = {
    type: TypeModal,
    master?: InterfaceMaster,
    gallery_work?: Array<InterfaceGalleryObject>
}

export const MasterModal: React.FunctionComponent<MasterModalProps> = ({
                                                                           type,
                                                                           master,
                                                                           gallery_work
                                                                       }) => {
    const tagRender = (props: any) => {
        const {label, closable, onClose} = props;
        return (
            <Tag className='card-master--modal__teg' color='green' closable={closable} onClose={onClose}
                 style={{marginRight: 3}}>
                <div className='card-master--modal__text'>{label}</div>
            </Tag>
        );
    }

    return (
        <div className='card-master--modal__profile'>
            {
                master && type === 'add' ? (
                    <>
                        <img className='card-master--modal__img' src={master.url} alt={master.name}/>
                        <h3 className='card-master--modal__name'>{master.name}</h3>
                        <h3 className='card-master--modal__title'>Добавить работы мастера:</h3>
                        <Select
                            mode='tags'
                            tagRender={tagRender}
                            onDeselect={(value) => console.log(value)}
                            style={{width: '100%'}}
                            onSelect={(value) => console.log(value)}
                        >
                            {gallery_work && gallery_work.map(item => (
                                <Select.Option key={item.uid} value={item.uid}>
                                    <div className={'card-master--modal__select'}>
                                        <Image className='card-master--modal__icon' height='auto' width={70}
                                               src={item?.url} alt=""/>
                                        <p className='card-master--modal__text'>{item.name}</p>
                                    </div>
                                </Select.Option>
                            ))}
                        </Select>
                    </>
                ) : type === 'add_record' && (
                    <>
                        <h3 className='card-master--create__name'>Введите имя: </h3>
                        <Input className='card-master--create__input'/>
                        <h3 className='card-master--create__about'>Введите краткую информацию: </h3>
                        <TextArea
                            className='card-master--create__text'
                            maxLength={20}
                            showCount={true}
                        />
                        <Upload
                            className='card-master--create__upload'
                            beforeUpload={(file) => {
                                console.log(file, 12)
                                return false;
                            }}
                            listType="picture"
                            multiple={false}
                            maxCount={1}
                            // fileList={fileList}
                            // onChange={handleChangeImage}
                        >
                            <Button className='card-master--create__btn'
                                    type='primary'>Загрузить фото мастера</Button>
                        </Upload>
                        <h3 className='card-master--create__title'>Добавить работы мастера:</h3>
                        <Select
                            mode='tags'
                            tagRender={tagRender}
                            onDeselect={(value) => console.log(value)}
                            style={{width: '100%'}}
                            onSelect={(value) => console.log(value)}
                        >
                            {gallery_work && gallery_work.map(item => (
                                <Select.Option key={item.uid} value={item.uid}>
                                    <div className={'card-master--modal__select'}>
                                        <Image className='card-master--modal__icon' height='auto' width={70}
                                               src={item?.url} alt=""/>
                                        <p className='card-master--modal__text'>{item.name}</p>
                                    </div>
                                </Select.Option>
                            ))}
                        </Select>
                    </>

                )
            }
        </div>
    );
};
