import React from 'react'
import { Card, Col, Row, Typography, Button, Layout, Breadcrumb } from 'antd/lib'
import styles from '@/styles/portal.module.css';
import router from 'next/router';

const { Content } = Layout;
const { Text } = Typography;

const pageportal = () => {
  router.push('/portal')
}


const pagedccountry = () => {
  router.push('/mersetting/dc-countryarea')
}


const style1: React.CSSProperties = { background: '#cae5f4', padding: '8px 0', marginBottom: '30px', borderRadius: '15px', height: '17vh' };
const style2: React.CSSProperties = { background: '#d0bbdd', padding: '8px 0', marginBottom: '30px', borderRadius: '15px', height: '17vh' };
const style3: React.CSSProperties = { background: '#d0c6aa', padding: '8px 0', marginBottom: '30px', borderRadius: '15px', height: '17vh' };
const style4: React.CSSProperties = { background: '#cce6da', padding: '8px 0', marginBottom: '30px', borderRadius: '15px', height: '17vh' };
const style5: React.CSSProperties = { background: '#ffeed9', padding: '8px 0', marginBottom: '30px', borderRadius: '15px', height: '17vh' };

export default function homesetting() {

  //Breadcrumb
  const pageoption = [
    { title: 'หน้าแรก' },
    { title: 'จัดการข้อมูลลูกค้า' },
    { title: 'จัดการคำขอ' },
  ];

  return (
    <>
      <Breadcrumb items={pageoption} style={{ margin: '16px 0', backgroundColor: '#ffffff', padding: '20px', borderRadius: '20px', fontWeight: 'bold', color: '#21266e' }} separator='>' />

    </>

  )
}
