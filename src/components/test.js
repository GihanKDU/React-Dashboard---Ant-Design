import { Table,  } from 'antd';
import { useState } from 'react';
import Sidemenu from './sidemenu';
import {
  MoreOutlined,
   
  } from '@ant-design/icons';
const columns = [
  {
    title: 'Promotion Name',
    dataIndex: 'name',
    filters: [
       
  ],},
  {
    title: 'Promotion Type',
    dataIndex: 'text',
    filters: [
       
    ],
    
  },
  {
    title: 'Price',
    dataIndex: 'price',
    filters: [
       
    ],
    
  },
  {
    title: 'Start Date',
    dataIndex: 'start',
    filters: [
       
    ],
    
  },
  {
    title: 'End Date',
    dataIndex: 'end',
    filters: [
       
    ],
    
  },
  {
    title: 'QTY',
    dataIndex: 'qty',
    filters: [
       
    ],
    
  },
  {
    title: 'Min Saving',
    dataIndex: 'min',
    filters: [
       
    ],
    
  },
  {
    title: 'Max Saving',
    dataIndex: 'max',
    filters: [
       
    ],
    
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (_, record) => (
      <span>
        {record.address}
        <Sidemenu/>
        <MoreOutlined className='pointer' />

      </span>
    ),
    
  },
 
];

const data = [];

  data.push({
    
    name: `Prootion 1 `,
    text: `Prom_11_000 `,
    price: `$157 `,
    start: `25/01/2022 `,
    end: `25/01/2022 `,
    qty: `157 `,
    min: `184.123 `,
    max: `184.123 `,
    action: ` `,
  })
  



const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
   
  };

  return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
};

export default App;
