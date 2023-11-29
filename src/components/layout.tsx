import React, { useState } from 'react'
import { Layout, MenuProps, Card, Col, Row, Modal, Typography, Space, Avatar, Dropdown, Breadcrumb, theme, Menu } from 'antd/lib';
import Image from "next/image";
import { FileOutlined, DownCircleOutlined, UserOutlined, HomeOutlined, FileDoneOutlined, EnvironmentOutlined, SwitcherOutlined, ProfileOutlined, ReadOutlined, ReconciliationOutlined, SettingOutlined, ExceptionOutlined } from '@ant-design/icons';
import speedsrc from "../../public/images/SPEED-D-LOGO.png";
import router from 'next/router';

const { Header, Content, Sider } = Layout;
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

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  style?: React.CSSProperties,
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    style,
  } as MenuItem;
}

const menuitems: MenuItem[] = [
  getItem('หน้าหลัก', '1', <HomeOutlined />, undefined,),
  getItem('ติดตามรายการพัสดุ', '2', <EnvironmentOutlined />, undefined,),
  getItem('นำเข้าโปรโมชั่น', '3', <SwitcherOutlined />, undefined,),
  getItem('สร้างโปรโมชั่น', '4', <ProfileOutlined />, undefined,),
  getItem('รายงานเงินพักรับ', '5', <ReadOutlined />, undefined,),
  getItem('ใบเสร็จรับเงิน/ใบกำกับภาษี', '6', <FileDoneOutlined />, undefined, { fontSize: '10px' }),
  getItem('รายการใบแจ้งหนี้', '7', <ReconciliationOutlined />, undefined,),
  getItem('รายการลดหนี้', '8', <FileOutlined />, undefined,),
  getItem('จัดการข้อมูลลูกค้า', '9', <UserOutlined />, undefined,),
  getItem('ตั้งค่าระบบ', '10', <SettingOutlined />, undefined,),
  getItem('รายงาน', '11', <ExceptionOutlined />, undefined,),
];

const headerStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  height: '14vh',
  width: '100%',
  paddingInline: 20,
};



export default function layout() {
  const [collapsed, setCollapsed] = useState(false);

  const handleMouseEnter = () => {
    setCollapsed(false);

  };

  const onCollapse = () => {
    setCollapsed(collapsed);
  };

  const handleMouseLeave = () => {
    setCollapsed(true);

  };


  const menu = {
    color: '#ffffff',
    marginTop: '25px',
    fontWeight: 'bold',
    backgroundColor: '#21266e',
  };

  return (
    <>
    {/* ส่วนของ  header */}
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

      <Layout style={{ minHeight: '100vh' }}>

        {/* ส่วน Navigation */}
        <Sider
          collapsed={collapsed}
          onCollapse={onCollapse}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='hover:bg-black'
          style={{ color: '#ffffff', backgroundColor: '#21266e' }}>
          <Menu
            mode="inline"
            items={menuitems}
            style={menu}
            className=''
          />
        </Sider>

        {/* ส่วนเนื้อหา */}
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0', backgroundColor: '#ffffff', padding: '20px', borderRadius: '20px' }}>
              <Breadcrumb.Item>หน้าแรก</Breadcrumb.Item>
              <Breadcrumb.Item>ตั้งค่าระบบ</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 360, background: '#ffffff', borderRadius: '20px' }}>
              content
            </div>
          </Content>
        </Layout>

      </Layout>

    </>
  )
}
