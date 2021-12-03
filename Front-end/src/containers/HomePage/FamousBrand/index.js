import { Col, Row } from 'antd';
import React from 'react';
import '../../../../src/index.scss';

// fn: hiển thị danh sách thương hiệu
function showBrandList(list) {
  return list.map((item, index) => (
    <Col span={12} md={6} key={index}>
      <div className="brand-item t-center">
        <a href={item.link} target="blank">
          <img className="bor-rad-8" width="30%" src={item.src} alt="Photo" />
        </a>
        <h4 className="font-size-12px">{item.title}</h4>
        <span className="font-size-16px">{item.desc}</span>
      </div>
    </Col>
  ));
}

// danh sách thương hiệu
const list = [
  {
    link: '#',//link
    src:
      'https://media.hasaki.vn/hsk/brand/Cetaphil400x2001621916364_img_140x70_45e3de_fit_center.jpg',
    title: 'CETAPHIL'
  },
  {
    link: '#',
    src:
      'https://media.hasaki.vn/brand/1585135003kaia_img_140x70_45e3de_fit_center.jpg',
    title: 'ANESSA'
  },
  {
    link: '#',
    src:
      'https://media.hasaki.vn/brand/1477456116GARNIER-logo_img_140x70_45e3de_fit_center.jpg',
    title: 'GARNIER'
  },
  {
    link: '#',
    src:
      'https://media.hasaki.vn/brand/1554713872huxley_img_140x70_45e3de_fit_center.jpg',
    title: 'Huxley'
  },
  {
    link: '#',
    src:
      'https://media.hasaki.vn/brand/1625111472loreal_img_140x70_45e3de_fit_center.jpg',
    title: 'LOREAL'
  },
];

// rendering ...
function FamousBrand() {
  return (
    <div className="p-16 Famous-Brand">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h2 className="font-weight-700">Thương hiệu nổi bật</h2>
        </Col>
        {showBrandList(list)}
      </Row>
    </div>
  );
}

export default FamousBrand;
