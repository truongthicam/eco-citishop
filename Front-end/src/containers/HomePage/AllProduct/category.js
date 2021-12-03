import { Col, Row } from 'antd';
import Countdown from 'components/Countdown';
import RelatedProduct from 'containers/ProductDetailPage/RelatedProduct';
import React, { useState } from 'react';
import '../../../../src/index.scss';

// chuyển thời gian thành chuỗi + số ngày quy định
// để làm deadline (nDate là số ngày)

// Do cả chương trình chỉ có 1 list carousels
// Nên lưu thẳng vào đây để đỡ tốn chi phí query
const list = [
  {
    title: 'Chăm sóc da mặt',
    type: 12,
  },
  {
    title: 'Chăm sóc cơ thể',
    type: 0,
  },
  {
    title: 'Trang điểm',
    type: 10,
  },
  {
    title: 'Nước Hoa',
    type: 10,
  },
  {
    title: 'Chăm sóc tóc',
    type: 10,
  },
  
  
];

function Category() {
  const [indexHeader, setIndexHeader] = useState(0);
  return (
    <div
      className={`Discount-List box-sha-home d-flex flex-direction-column bg-${indexHeader+1}`}>
      {/* menu header */}
      <div className="d-flex justify-content-between header">
        {list.map((item, index) => {
          let className = `header-item w-80 d-flex flex-direction-column align-i-center font-weight-500 bg-white`;
          return (
            <div
              key={index}
              onClick={() => {
                setIndexHeader(index);
              }}
              className={
                index !== indexHeader ? className : className + ' active'
              }>
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>

      {/* content & product list */}
      <Row className="flex-grow-1">
        
        {/* product list */}
        <Col span={24} md={18}>
          <RelatedProduct
            type={list[indexHeader].type}
            span={{ span: 24, xs: 24, sm: 12, md: 12, lg: 6, xl: 6, xxl: 6 }}
          />
        </Col>
      </Row>
    
    </div>

    

    
  );
}

export default Category;
