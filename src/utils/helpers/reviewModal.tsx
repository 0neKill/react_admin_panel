import React from "react";
import {TypeModal} from "../../types/general/Statistics";
import {InterfaceReview} from "../../types/response/Review";
import {Input, Upload} from "antd";
import TextArea from "antd/es/input/TextArea";
import {Button} from "../../components";

type TypeValue = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
export type ReviewModalProps = {
    type: TypeModal,
    textValue: TypeValue,
}
export const ReviewModal: React.FunctionComponent<ReviewModalProps> = ({
                                                                           type,
                                                                           textValue
                                                                       }) => {
    return (
        <>
            {
                type === 'add_record' && (
                    <>
                        <h3 className='card-master--create__about'>Введите отзыв</h3>
                        <TextArea
                            className='card-master--create__text'
                            maxLength={50}
                            showCount={true}
                            {...textValue}
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
                    </>
                )
            }
        </>
    )
}