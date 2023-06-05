import { Button, Drawer ,Divider  } from 'antd';
import { useState } from 'react';
import { EyeOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import Carousl from '../components/carousl';
import Chart from '../components/chart';
import Navbar from '../components/navbar';

const App = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className='btn-empty' type="primary" onClick={showDrawer}>
        <EyeOutlined />
      </Button>
      <Drawer title={
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>Offer Overview</div>
            <div>
              <Button className='btn-border mr-10' type="text">Delete</Button>
              <Button className='btn-blue border-radius-0' type="text">Edit</Button>
            </div>
          </div>
        </>
      } placement="right" onClose={onClose} visible={open} >
        <div className='d-flex mb-50'>
          <div className='mr-10'>
            <img className='main-img' src="https://img.freepik.com/premium-vector/potato-chips-package-design_633283-642.jpg" alt="" />
          </div>
          <div className='mb-auto w-100'>
            <div className='d-flex w-100'>
              <div className='w-100'>
                <div className='d-flex space-between w-100 mb-10'>
                  <div className='product-font-primary'>Set Vestibulm Offer</div>
                  <div className='green-chip'>Active</div>
                </div>
                <div className='d-flex mb-5'>
                  <div className='mr-10 product-font-secondry'>START DATE</div>
                  <div className='product-font-teritory'>25/01/2022</div>
                </div>
                <div className='d-flex mb-75'>
                  <div className='mr-10 product-font-secondry'>END DATE</div>
                  <div className='product-font-teritory' >14/02/2022</div>
                </div>
              </div>
            </div>
            <div className='d-flex '>
              <div className='mr-10'>
                <div className='product-font-primary'>$148.89</div>
                <div className='product-font-secondry'>Offer Price</div>
              </div>
              <div className='d-flex orange-chip'>
              <ExclamationCircleOutlined className='mr-10' />
                <div>Offer QTY 2</div>
                </div>
            </div>
          </div>
        </div>

        <div >
          <Carousl  />
          <Divider />
          <Chart />
        </div>
      </Drawer>
    </>
  );
};

export default App;
