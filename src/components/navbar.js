import React from "react";
import { Breadcrumb, Button, Row ,Divider} from 'antd';
import { DownOutlined, SmileOutlined, ShopOutlined, QuestionCircleOutlined, BellOutlined, UserOutlined  } from '@ant-design/icons';

import { Dropdown, Space } from 'antd';

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
       
    },
    {
        key: '4',
      
       
    },
];
const Navbar = () => {
    return (
        <Row justify="space-between" align="middle" >
            <Breadcrumb
                items={[
                    {
                        title: 'Inventory',
                    },
                    {
                        title: 'Offers',
                    },
                ]}
            />
            <Row align="middle">
            <Dropdown
                menu={{
                    items,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Button className="perfect-center">
                            <ShopOutlined />
                            KGC Food
                            <DownOutlined />
                        </Button>
                    </Space>
                </a>
            </Dropdown>
            <Divider type="vertical" />
            <QuestionCircleOutlined className="icon" />
            <BellOutlined className="icon" />
            <UserOutlined className="icon profile-icon perfect-center" />
            </Row>
        </Row>

    )
}

export default Navbar;