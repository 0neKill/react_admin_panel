import React from 'react';
import {Empty, Pagination} from 'antd';

import {CardMaster, Container, Modal} from "../../../components";

import {InterfaceMaster} from "../../../types/response/Master";
import {InterfaceGalleryObject} from "../../../types/response/Gallery";

type MastersProps = {
    masters_list: Array<InterfaceMaster>,
    pagination: { minValue: number, maxValue: number },
    countOnPage: number,
    handlerPagination: (value: number) => void,
    gallery_work: Array<InterfaceGalleryObject>

}

export const Masters: React.FunctionComponent<MastersProps> = ({
                                                                   pagination,
                                                                   countOnPage,
                                                                   handlerPagination,
                                                                   masters_list,
                                                                   gallery_work
                                                               }) => (
    <div className='masters'>
        <Container size='small'>
            <Modal type='add_record' title='Добавить мастрера' layout='master' gallery_work={gallery_work}
                   handlerClickRequest={() => console.log(1)}/>
            <div className="masters__list">
                {
                    masters_list.length > 0 ?
                        masters_list.slice(pagination.minValue, pagination.maxValue).map(item => (
                            <CardMaster key={item.id} master={item} gallery_work={gallery_work}/>
                        )) : <Empty description={'Нет мастеров'}/>
                }
            </div>
            <div className="pagination">
                <Pagination
                    total={masters_list.length}
                    defaultCurrent={1}
                    defaultPageSize={countOnPage}
                    onChange={handlerPagination}/>
            </div>

        </Container>
    </div>
)
