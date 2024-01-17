import React, { useState, ReactNode } from 'react'
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

const pagehome = (event: React.MouseEvent) => {
  router.push('/homesetting')
}

const pagemer = (event: React.MouseEvent) => {
  router.push('/mersetting')
}



const items: MenuProps['items'] = [
  {
    label:
      <Col>
        <Row onClick={pagehome}><Text strong className='mr-1 text-lg' style={{ color: '#F17444' }}>Role :</Text><Text className='text-lg'>Admin คลังสินค้า</Text></Row>
      </Col>,
    key: '1'

  },
  {
    label:
      <Col>
        <Row onClick={pagemer}><Text strong className='mr-1 text-lg' style={{ color: '#F17444' }}>Role :</Text><Text className='text-lg'>Mer</Text></Row>
      </Col>,
    key: '2'

  },
  {
    type: 'divider',
    style: { borderColor: '#E0E0E0', borderWidth: '1px', },
  },
  {
    label:
      <Col>
        <Row><Text strong className='mr-1 text-lg' style={{ color: '#F17444' }}>Name :</Text><Text className='text-lg'>กาลครั้งหนึ่ง  ดุจพินิจ</Text></Row>
      </Col>,
    key: '3'

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
    key: '4',
  },
];

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  items?: MenuItem[],
  style?: React.CSSProperties,
  onClick?: (event: React.MouseEvent) => void
): MenuItem {
  return {
    key,
    icon,
    label,
    items,
    style,
    onClick,
  } as MenuItem;
}

const menuitems: MenuItem[] = [
  getItem('หน้าหลัก', '1', <HomeOutlined />, undefined, undefined, pagehome),
  getItem('ติดตามรายการพัสดุ', '2', <EnvironmentOutlined />, undefined),
  getItem('นำเข้าโปรโมชั่น', '3', <SwitcherOutlined />, undefined),
  getItem('สร้างโปรโมชั่น', '4', <ProfileOutlined />, undefined),
  getItem('รายงานเงินพักรับ', '5', <ReadOutlined />, undefined),
  getItem('ใบเสร็จรับเงิน/ใบกำกับภาษี', '6', <FileDoneOutlined />, undefined, { fontSize: '10px' }),
  getItem('รายการใบแจ้งหนี้', '7', <ReconciliationOutlined />, undefined),
  getItem('รายการลดหนี้', '8', <FileOutlined />, undefined),
  getItem('จัดการข้อมูลลูกค้า', '9', <UserOutlined />, [
    getItem('ข้อมูลลูกค้าเก่า', '9.1'),
    getItem('อัปโหลดข้อมูลลูกค้า', '9.2'),
    getItem('จัดการคำขอ', '9.3'),
  ]),
  getItem('ตั้งค่าระบบ', '10', <SettingOutlined />, undefined),
  getItem('รายงาน', '11', <ExceptionOutlined />, undefined),
];


const headerStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  height: '14vh',
  width: '100%',
  paddingInline: 20,
};

interface Layoutpop { children: ReactNode; }


export default function layout({ children }: Layoutpop) {
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
            {children}
          </Content>
        </Layout>

      </Layout>

    </>
  );
}
