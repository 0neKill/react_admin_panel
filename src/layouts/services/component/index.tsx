import React from 'react';
import {Button, ButtonDelete, CardMaster, Container} from "../../../components";
import {InterfacePrice} from "../../../types/response/Price";
import {TypePriceField, TypePriceTitle} from "../../../types/general/Statistics";
import {Empty, Input, Pagination} from "antd";

type ServicesProps = {
    general_price: Array<InterfacePrice>
    main_price: Array<InterfacePrice>
    handlerAddField: (object: { array: TypePriceField, value: InterfacePrice }) => void,
    pagination: { minValue: number, maxValue: number },
    countOnPage: number,
    handlerPagination: (value: number) => void,
    handlerChangeValue: (object: { id: number, array: TypePriceField, title: TypePriceTitle, value: string, }) => void,

}
export const Services: React.FunctionComponent<ServicesProps> = ({
                                                                     general_price,
                                                                     main_price,
                                                                     handlerAddField,
                                                                     pagination,
                                                                     handlerPagination,
                                                                     countOnPage,
                                                                     handlerChangeValue
                                                                 }) => (
    <div className='service'>
        <Container size='normal'>
            <h2 className='service__title'>Надпись на главной странице</h2>
            {
                main_price.length < 2 && <Button large='main' onClick={() => handlerAddField({
                    array: "main_price",
                    value: {id: Date.now(), main: true, name: '', price: 0}
                })} type='primary'>Добавить</Button>
            }
            <div className='service__main-price'>
                {
                    main_price.map(item => (
                        <div className='service__item' key={item.id}>
                            <Input
                                className='service__input service__text'
                                value={item.name}
                                onChange={(e) => handlerChangeValue({
                                id: item.id,
                                array: "main_price",
                                title: 'name',
                                value: e.target.value,
                            })}/>
                            <Input
                                className='service__input service__price'
                                value={item.price}
                                onChange={(e) => handlerChangeValue({
                                id: item.id,
                                array: "main_price",
                                title: 'price',
                                value: e.target.value,
                            })}/>
                        </div>
                    ))
                }
            </div>
            <h2 className='service__title'>Все цены и услуги</h2>
            <Button
                large='main'
                onClick={() => handlerAddField({
                array: "general_price",
                value: {id: Date.now(), main: true, name: '', price: 0}
            })} type='primary'>Добавить</Button>
            {
                general_price.length > 0 ?
                    general_price.slice(pagination.minValue, pagination.maxValue).map(item => (
                        <div className='service__item' key={item.id}>
                            <Input
                                className='service__input service__text'
                                value={item.name}
                                onChange={(e) => handlerChangeValue({
                                id: item.id,
                                array: "general_price",
                                title: 'name',
                                value: e.target.value,
                            })}/>
                            <Input
                                className='service__input service__price'
                                value={item.price}
                                onChange={(e) => handlerChangeValue({
                                id: item.id,
                                array: "general_price",
                                title: 'price',
                                value: e.target.value,
                            })}/>
                            <ButtonDelete/>
                        </div>
                    )) : <Empty description='Добавьте услуги'/>
            }
            <Button
                style={{backgroundColor:'green'}}
                large='main'
                onClick={()=>console.log(1)} type='primary'>Сохранить</Button>

            <Pagination
                className='service__pagination'
                total={general_price.length}
                defaultCurrent={1}
                defaultPageSize={countOnPage}
                onChange={handlerPagination}/>
        </Container>
    </div>
)