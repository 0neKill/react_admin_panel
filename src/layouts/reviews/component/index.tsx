import React from 'react';
import {Card, Container, Modal} from "../../../components";

export const Reviews: React.FunctionComponent = () => (
    <div className='review'>
        <Container size='small'>
            <Modal
                type='add_record'
                title='Добавить отзыв'
                layout='review'
                handlerClickRequest={() => console.log(1)}/>
            <Card
                review={{
                    id: '1',
                    url: 'https://i.ucrazy.ru/files/i/2011.4.25/1303679259_21.jpg',
                    text: 'asdfa',
                }}
                handlerClickRequest={() => console.log(1)}
            />
        </Container>
    </div>
)