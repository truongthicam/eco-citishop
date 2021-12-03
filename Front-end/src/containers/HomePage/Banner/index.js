import { Carousel } from 'antd';
import React from 'react';
import '../../../../src/index.scss';

// Do cả chương trình chỉ có 1 list carousel
// Nên lưu thẳng vào đây để đỡ tốn chi phí query
const list = [
  'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/256331088_877111043002332_5970199433240531316_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=qvVhsSSswecAX-meEqI&_nc_ht=scontent.fdad3-4.fna&oh=ceeacdff9ce039174183871f48edc6da&oe=61C35BC2',
  'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/256775686_1136357457191805_7938916422878421320_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=ejXx9JB3a8oAX8d8uHW&tn=SJlJmKLy_7gI3pLc&_nc_ht=scontent.fdad3-3.fna&oh=28ee56e6307c15f3660d687665ae23c8&oe=61C268F9',
  'https://scontent.fdad3-5.fna.fbcdn.net/v/t1.15752-9/257569390_918159775744495_6181910786278889612_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=o9tuVVlzIW0AX8hAThI&_nc_ht=scontent.fdad3-5.fna&oh=f603fe2f81ede4f920fd22ed20d9485d&oe=61C3CCB6'
  
];

function Banner() {
  return (
    <Carousel className="Sale-Off" autoplay>
      {list.map((item, index) => (
        <img className="Sale-Off-img" src={item} key={index} />
      ))}
    </Carousel>
  );
}

export default Banner;
