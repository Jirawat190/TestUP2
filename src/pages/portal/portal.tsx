import React from 'react'
import { Layout } from 'antd/lib';
import { MenuProps, Card, Col, Row, Modal, Typography, Space, Avatar, Dropdown } from 'antd/lib';
import Image from "next/image";
import speedsrc from "../../../public/images/SPEED-D-LOGO.png";
import styles from '../../styles/portal.module.css'
import { DownCircleOutlined, UserOutlined } from '@ant-design/icons';
import router from 'next/router';

const { Header, Content } = Layout;
const { Text } = Typography;

const pageLogout = () => {
  router.push('/login')
}

const items: MenuProps['items'] = [
  {
    label:
      <Col>
        <Row><Text strong className='mr-1 text-lg' style={{ color: '#F17444' }}>Role :</Text><Text className='text-lg'>พนักงานคลังสินค้า</Text></Row>
        <Row><Text strong className='mr-1 text-lg' style={{ color: '#F17444' }}>Name :</Text><Text className='text-lg'>กาลครั้งหนึ่ง  ดุจพินิจ</Text></Row>
      </Col>,
    key: '0'

  },
  {
    type: 'divider',
    style: { borderColor: '#E0E0E0', borderWidth: '1px', },
  },
  {

    label:
      <Row justify={'center'}>
        <button onClick={pageLogout}><Text strong className='mr-1 text-lg ' style={{ color: '#005390' }}>ออกจากระบบ</Text></button>
      </Row>,
    key: '1',
  },
];



const headerStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  height: '14vh',
  width: '100%',
  paddingInline: 20,

};

const contentStyle: React.CSSProperties = {
  backgroundColor: '#F5F5F5',
  minHeight: 120,
  height: "85vh",
  lineHeight: '120px',
  padding: '15px 25px 25px 25px'
};



const Portal: React.FC = () => (
  <>
    <Layout>
      <Header style={headerStyle}>

        <Row className='w-full'>
          <Col className='w-9/12'>
            <Image
              width={250}
              draggable={false}
              src={speedsrc}
              alt=""
              style={{ margin: '10px' }} />
          </Col>

          <Col className='w-3/12' style={{
            borderLeft: '3px solid #bfbfbf',
            borderLeftStyle: 'solid',
          }}>
            <Row justify={'space-around'} className='w-full h-full' >
              <Row align={'middle'} justify={'center'}>
                <Avatar
                  icon={<UserOutlined />}
                  size={55}
                  className='ml-3'
                />

                <Col className='m-5'>
                  <Row><Text strong className='text-lg'>กาลครั้งหนึ่ง  ดุจพินิจ</Text></Row>
                  <Row><Text strong className='text-lg'>Admin</Text></Row>
                </Col>
              </Row>
              <Row justify={'end'} align={'middle'} >
                <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <DownCircleOutlined className='text-xl' />
                    </Space>
                  </a>
                </Dropdown>
              </Row>
            </Row>
          </Col>
        </Row>
      </Header>

      <Row style={contentStyle}>
        <Card headStyle={{ border: 0, padding: '25px' }} title={<Text className="text-2xl" style={{ color: "#191970", fontWeight: "bold" }}> Portal </Text>} style={{ width: "100%" }}>
          
          <Row gutter={8} style={{ textAlign: 'center'}} align={'middle'}>
            
            <Col span={8} className='justify-center flex'>
              <Card className='bg-[#96b6c5] h-48 w-80' bodyStyle={{ padding: 0}}>
                <Row className={styles.container} align={'bottom'}>
                  <Row className={styles.box} align={'middle'} justify={'center'}>ระบบบริหารจัดการพัสดุ</Row>
                </Row>
              </Card>
            </Col>

            <Col span={8} className='justify-center flex'>
              <Card className='bg-[#c3acd0] h-48 w-80' bodyStyle={{ padding: 0 }}>
                <Row className={styles.container} align={'bottom'}>
                  <Row className={styles.box} align={'middle'} justify={'center'}>ระบบบริการลูกค้า All Speedy</Row>
                </Row>

              </Card>
            </Col>
            <Col span={8} className='justify-center flex'>
              <Card className='bg-[#ceddbd] h-48 w-80' bodyStyle={{ padding: 0 }}>
                <Row className={styles.container} align={'bottom'}>
                  <Row className={styles.box} align={'middle'} justify={'center'}>ระบบจัดการงานขนส่งพัสดุ</Row>
                </Row>

              </Card>
            </Col>
          </Row>
        </Card>
      </Row>
    </Layout>
  </>

);

export default Portal;

