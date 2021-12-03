import React from 'react';
import messageIcon from 'assets/imgs/logo-message.png';
import { Tooltip } from 'antd';
import '../../../src/index.scss';

function ContactIcon() {
  return (
    <a
      className="Contact-Icon-Link"
      href="https://www.facebook.com/messages/t/cam6776"
      target="blank">
      <Tooltip title="Chat" placement="left">
        <img
          style={{ opacity: 0.8 }}
          className="Contact-Icon"
          src={messageIcon}
        />
      </Tooltip>
    </a>
  );
}

export default ContactIcon;
