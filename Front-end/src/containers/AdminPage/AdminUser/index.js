import { Table } from 'antd';
import adminApi from 'apis/adminApi';
import React, { useEffect, useState } from 'react';

function AdminUser() {
  const [data, setData] = useState([]);

  const columns = [
    {
      title: 'User Name',
      key: 'userName',
      dataIndex: 'userName',
    },
    {
      title: 'Họ tên',
      key: 'fullName',
      dataIndex: 'fullName',
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Địa chỉ',
      key: 'address',
      dataIndex: 'address',
    },
    {
      title: 'Tuổi',
      key: 'age',
      dataIndex: 'age',
    },
    {
      title: 'Số điện thoại',
      key: 'phone',
      dataIndex: 'phone',
    },
    
  ];

  // event: Lấy danh sách admin user
  useEffect(() => {
    let isSubscribe = true;

    async function getUserAdminList() {
      try {
        const response = await adminApi.getUserAdminList();
        if (response && isSubscribe) {
          const list = response.data.list;
          const listWittKey = list.map((item, index) => {
            return { ...item, key: index };
          });
          setData(listWittKey);
        }
      } catch (error) {}
    }

    getUserAdminList();

    return () => {
      isSubscribe = false;
    };
  }, []);

  return <Table pagination={false} columns={columns} dataSource={data} />;
}

export default AdminUser;
