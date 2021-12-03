

import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const menu = [
  {
    key: 0,
    to: '/filter?t=0',
    
    title: 'Sữa rửa mặt',
  },
  {
    key: 1,
    to: '/filter?t=1',
    title:'Sữa tắm',
  },
  {
    key: 2,
    to: '/filter?t=2',
    title: 'Tẩy trang',
  },
  {
    key: 3,
    to: '/filter?t=3',
    title: 'Toner',
  },
  {
    key: 4,
    to: '/filter?t=4',
    title: 'Tẩy tế bào chết',
  },
  {
    key: 5,
    to: '/filter?t=5',
    title: 'Serum',
  },
  {
    key: 6,
    to: '/filter?t=6',
    title: 'Kem dưỡng',
  },
  {
    key: 7,
    to: '/filter?t=7',
    title: 'Xịt khoáng',
  },
  {
    key: 8,
    to: '/filter?t=8',
    title: 'Son',
  },
  {
    key: 9,
    to: '/filter?t=9',
    title: 'Nước hoa',
  },
  {
    key: 10,
    to: '/filter?t=10',
    title: 'Kẻ mắt',
  },
  {
    key: 11,
    to: '/filter?t=11',
    title: 'Phấn má hồng',
  },
  {
    key: 12,
    to: '/filter?t=12',
    title: 'Phấn tạo khối',
  },
];

function MenuFilter(props) {
  const { onShow } = props;

  function renderFilterMenu(list) {
    return (
      list &&
      list.map((item, index) => {
        return (
          <div
            onMouseEnter={() => onShow(item.key)}
            key={index}
            className="w-100 p-lr-8 p-tb-4  Filter-menu-item">
            <Link to={item.to} className="d-flex align-i-center">
              <span className="title">{item.title}</span>
            </Link>
          </div>
        );
      })
    );
  }

  return (
    <div className="bor-rad-8 Filter-menu p-tb-4">{renderFilterMenu(menu)}</div>
  );
}

MenuFilter.propTypes = {
  onShow: PropTypes.func,
};

export default MenuFilter;
