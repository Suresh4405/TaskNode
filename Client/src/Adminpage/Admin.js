import React, { useState, useEffect } from 'react';
import { Table, message } from 'antd';
import { GetAllUser } from '../Pages/Apicalls/user'; 

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    const fetchUsers = async () => {
      try {
        const response = await GetAllUser();
        if (response.success) {
          setUsers(response.data); 
        } else {
          message.error(response.message); 
        }
      } catch (error) {
        message.error('Failed to fetch users'); 
      }
    };

    fetchUsers(); 
  }, []);

  const columns = [
    {
      title: 'Profile URL',
      dataIndex: 'profileUrl',
      key: 'profileUrl',
      render: (text) => <img src={text} alt="Profile" style={{ width: 50, height: 50 }} />,
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Mobile Number',
      dataIndex: 'mobilenumber',
      key: 'mobilenumber',
    },
    
  ];

  return (
    <div>
      <h1>User details</h1>
      <br></br>
      <Table dataSource={users} columns={columns} />
    </div>
  );
};

export default Admin;
