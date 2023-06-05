import React, { useState } from 'react';
import { Layout, Menu, Divider, Row, } from 'antd';
import Navbar from './components/navbar';


import Top_Action from './components/top_action';
import Test from './components/test';
import Sidemenu from './components/sidemenu';
import Carousl from './components/carousl';
import Chart from './components/chart';

import {
  UserOutlined,
  FileOutlined,
  MenuOutlined,
  PushpinOutlined,
  ClockCircleOutlined,
  HomeOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  PieChartOutlined,
  SettingOutlined,
  TagOutlined,
  FundOutlined,
  DashboardOutlined,
  BulbOutlined
} from '@ant-design/icons';


const { Sider, Header, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [fileSliderVisible, setFileSliderVisible] = useState(false);

  const handleMenuClick = ({ key }) => {
    if (key === '9') {
      setFileSliderVisible(!fileSliderVisible);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
      >

        <div className="demo-logo-vertical" />
        <Menu

          defaultSelectedKeys={['1']}
          mode="inline"
          onClick={handleMenuClick}
        >
          <Menu.Item  className='main-logo'  >
            W
          </Menu.Item>
          <Menu.Item key="sub1" icon={<HomeOutlined />}>
            Home

          </Menu.Item>
          <Menu.Item key="9" icon={<AppstoreOutlined />}>
            Inventory
           
          </Menu.Item>
          <Menu.Item icon={<ClockCircleOutlined />}>
            Time
          </Menu.Item>
          <Menu.Item icon={<ShoppingCartOutlined />}>
            Logistic
          </Menu.Item>
          <Menu.Item icon={<PieChartOutlined />}>
            Stats
          </Menu.Item>
          <Menu.Item icon={<FileOutlined />}>
            Folder
          </Menu.Item>
          <Menu.Item icon={<SettingOutlined />}>
            Setting
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {fileSliderVisible && (
          <Sider className='bg-light' theme="dark"

          >
            <Menu className='bg-light'
              mode="vertical"
              
              defaultSelectedKeys={['1']}
              onClick={() => setFileSliderVisible(false)}
              icon={<UserOutlined />}
            >
              <Menu.Item  >
                <div className='space-between'>
                  Inventory
                  <PushpinOutlined />
                </div>

              </Menu.Item>
              <Menu.Item icon={<TagOutlined />}>
                Product
              </Menu.Item>
              <Menu.Item key="2" icon={<DashboardOutlined />}>
                Offers
              </Menu.Item>
              <Menu.Item key="2" icon={<FundOutlined />}>
                Category
              </Menu.Item>
              <Menu.Item key="2" icon={<BulbOutlined />}>
                Brand
              </Menu.Item>
            </Menu>
          </Sider>
        )}
        <Layout>
          <Header style={{ background: 'none' }}>
            <Navbar />
          </Header>
          <Content style={{ margin: '16px' }}>
            <Row>
              <Top_Action />


            </Row>
            <Test />

          </Content>
          <Footer style={{ textAlign: 'center' }}>
           Designed by Gihan Supun
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
