import { Col, Row } from 'antd';
import Countdown from 'components/Countdown';
import RelatedProduct from 'containers/ProductDetailPage/RelatedProduct';
import React, { useState } from 'react';
import '../../../../src/index.scss';

// chuyển thời gian thành chuỗi + số ngày quy định
// để làm deadline (nDate là số ngày)
function convertTime(nDate) {
  const milisec = nDate * 24 * 60 * 60 * 1000;
  const time = new Date(Date.now() + milisec);
  const m = time.getMonth() + 1;
  const d = time.getDate();
  const y = time.getFullYear();
  const h = time.getHours() % 12;
  return `${m} ${d} ${y}, ${h}:00 am`;
}

// Do cả chương trình chỉ có 1 list carousels
// Nên lưu thẳng vào đây để đỡ tốn chi phí query
const list = [
  {
    title: '  CHƯƠNG TRÌNH KHUYẾN MÃI',
    type: 8,
    deadline: convertTime(15),
  },
  {
    tilte: '',

  },
  {
    tilte: '',

  }
  
];

function DiscountList() {
  const [indexHeader, setIndexHeader] = useState(0);
  return (
    <div
      className={`Discount-List box-sha-home d-flex flex-direction-column bg-${indexHeader}`}>
      {/* menu header */}
      <div className="d-flex justify-content-between header">
        {list.map((item, index) => {
          let className = `header-item w-80 d-flex flex-direction-column align-i-left font-weight-500 bg-white`;
          return (
            <div
              key={index}
              onClick={() => {
                setIndexHeader(index);
              }}
              className={
                index !== indexHeader ? className : className + ' active'
              }>
              <h1> &nbsp;{item.title}</h1>
            </div>
          );
        })}
      </div>

      {/* content & product list */}
      <Row className="flex-grow-1">
        {/* countdown */}
        <Col
          span={24}
          md={6}
          className="d-flex flex-direction-column justify-content-center countdown">
          <Countdown
            timeTillDate={list[0].deadline}
            timeFormat="MM DD YYYY, h:mm a"
          />
        </Col>
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

export default DiscountList;
