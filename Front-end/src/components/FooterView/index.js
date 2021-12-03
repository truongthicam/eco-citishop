
import iconPhoneFooter from 'assets/imgs/icon-phone-footer.png';
import registeredImg from 'assets/imgs/registered.png';
import React from 'react';
import '../../../src/index.scss';
function FooterView() {
  return (
    <div className="container-fluid bg-white footer p-lr-0" id="footer">
      {/* Liên hệ */}
      <div className="footer-contact p-tb-16">
        <div className="container d-flex justify-content-between align-i-center">
          <div className="d-flex flex-direction-column">
            < h2 className = "footer-fact-item" > CHẤT LƯỢNG UY TÍN </h2>
            
          </div>
          <div className="d-flex flex-direction-column">
            <h2 className="footer-fact-item">GIAO HÀNG TOÀN QUỐC</h2>
          </div>
          <div className="d-flex flex-direction-column">
            <h2 className="footer-fact-item">7 NGÀY ĐỔI TRẢ MIỄN PHÍ</h2>
          </div>
          <div className="d-flex flex-direction-column">
            <h2 className="footer-fact-item">TƯ VẤN MIỄN PHÍ</h2>
            <h2 className="footer-fact-item">
              <b>0383060695</b>
            </h2>
          </div>
        </div>
      </div>
      {/* Thông tin chi tiết */}
      <div>
        <p p p className = "t-center"style = {{color: '##d4838d' }}>
          <span className="font-size-18px">
            CỬA HÀNG MỸ PHẨM - CITI SHOP
          </span>
          <br />
          <strong>ĐỊA CHỈ:</strong>&nbsp;01 VÕ VĂN NGÂN, PHƯỜNG LINH CHIỂU, TP. THỦ ĐỨC
          <br />
          <strong>Điện&nbsp;thoại:</strong>&nbsp;0383060695 |{' '}
          <strong>Email:</strong>&nbsp;citishop@gmail.com&nbsp;|{' '}
          <strong>Facebook:</strong>&nbsp;<a href="/">fb.com/citishop</a>
        </p>
       
      </div>
    </div>
  );
}

export default FooterView;
