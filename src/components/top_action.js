import React from "react";
import { Button, Row,  DatePicker,Divider, Space, Dropdown, Input } from 'antd';
import { DownOutlined, SettingOutlined,FilterOutlined,  UserOutlined, SearchOutlined } from '@ant-design/icons';


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
const { RangePicker } = DatePicker;
const Top_Action = () => {
    return (
        <Row className="d-flex w-100 mb-50" justify="space-between" align="middle">
          <div className="d-flex">
          <div className="filter-section mr-10" justify="space-between" style={{display:'flex'}} >
            <Dropdown
                menu={{
                    items,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Button className="border-0 perfect-center">
                            
                            <div className="d-flex">
                            <div className="mr-10 blue-chip">All</div>
                            <DownOutlined />
                            </div>

                        </Button>


                    </Space>
                </a>
            </Dropdown>
            <Divider className="height-auto" type="vertical" />
            <Input className="border-0"
                placeholder="Enter your username"
                prefix={ <SearchOutlined className="site-form-item-icon" />}

            />
            </div>
            <Dropdown className="mr-10"
                menu={{
                    items,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Button className="perfect-center">
                            
                           Price
                            <DownOutlined />

                        </Button>


                    </Space>
                </a>
            </Dropdown>
            <RangePicker  className="mr-10" />
            <FilterOutlined className="filter-icon perfect-center pointer" />
            <Divider className="height-auto" type="vertical" />
            <div className="pointer">Clear All</div>
          </div>
          <div className=" d-flex ">
          <Dropdown
                menu={{
                    items,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Button className="btn-blue perfect-center">
                            
                           Add
                            <DownOutlined />

                        </Button>


                    </Space>
                </a>
            </Dropdown>
            <SettingOutlined className="icon btn-setting perfect-center" />
          </div>
        </Row>
    )
}

export default Top_Action;