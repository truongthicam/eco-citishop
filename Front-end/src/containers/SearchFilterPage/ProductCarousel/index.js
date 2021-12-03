import { Carousel } from 'antd';
import React from 'react';
import '../../../../src/index.scss';

// Do cả chương trình chỉ có 1 list carousel
// Nên lưu ở đây
const list = [
  'https://cf.shopee.vn/file/609faa9e3f563e902d38e31b1397ead1',
  'https://cf.shopee.vn/file/51a8c950b30166e6d4ed7ed938442a4e',
  'https://cf.shopee.vn/file/871963e3721c1925e5da510981fc7031',
];

function ProductCarousel() {
  return (
    <Carousel className="Product-Carousel m-tb-24 bor-rad-8" autoplay>
      {list.map((item, index) => (
        <img
          className="Product-Carousel-img bor-rad-8"
          src={item}
          key={index}
        />
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
