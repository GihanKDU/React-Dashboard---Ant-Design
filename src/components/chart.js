import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, YAxis } from 'recharts';
import { LineChartOutlined, TableOutlined, DownOutlined,} from '@ant-design/icons';
import {  Radio,  Space, Dropdown, Button } from 'antd';


const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },];
const items = [
    {
        key: '1',
        label: (
            <a >
                1
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a >
                2
            </a>
        ),
        
    },
    {
        key: '3',
        label: (
            <a >
                3
            </a>
        ),
       
    }
    
];

const Chart = () => {
    return (
        <div className="custom-chart">
            <div className="d-flex space-between mb-25">
                <div>
                <Radio.Group >
        <Radio.Button value="large"><LineChartOutlined /></Radio.Button>
        <Radio.Button value="default"><TableOutlined /></Radio.Button>
       
      </Radio.Group>
                </div>
                <div>
                <Dropdown className="mr-10"
                menu={{
                    items,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Button className="perfect-center">
                            
                           Last 30 Days
                            <DownOutlined />

                        </Button>


                    </Space>
                </a>
            </Dropdown>
                </div>
            </div>
            <div className="">
               <div className="d-flex mb-25 perfect-center">
               <div className="d-flex mr-10">
                    <div className="blue-label-box mr-10"></div>
                    <div className="">Sold</div>
                </div>
                <div className="d-flex mr-10">
                    <div className="purple-label-box mr-10"></div>
                    <div className="">Damaged</div>
                </div>
                <div className="d-flex mr-10">
                    <div className="orange-label-box mr-10"></div>
                    <div className="">Purchased</div>
                </div>
                <div className="d-flex mr-10">
                    <div className="green-label-box mr-10"></div>
                    <div className="">Expired</div>
                </div>
               </div>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
            </div>
        </div>
       
    )
}

export default Chart;