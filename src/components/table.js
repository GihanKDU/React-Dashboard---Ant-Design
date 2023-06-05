import React from 'react';
import { Table } from 'antd';

const data = [
  {
    name: 'John',
    age: 25,
    country: 'USA',
    address: '1234 Street, New York',
  },
  {
    name: 'Alice',
    age: 30,
    country: 'Canada',
    address: '5678 Avenue, Toronto',
  },
  {
    name: 'Bob',
    age: 28,
    country: 'UK',
    address: '9876 Road, London',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const App = () => {
  return (
    <Table dataSource={data} columns={columns} />
  );
};

export default App;
