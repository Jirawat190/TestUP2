import React, { useEffect, useState } from 'react'
import { Breadcrumb, Button, Card, Col, Row, Typography, Select, Table, Tabs } from 'antd/lib'
import { CaretLeftOutlined, FileAddOutlined, ImportOutlined, SaveFilled, SaveOutlined, UndoOutlined } from '@ant-design/icons';
import Styles from '@/styles/RouteUpload.module.scss'
import router from 'next/router';
import axios from 'axios';

const { Text } = Typography;

const pageback = () => {
  router.push('/homesetting/dc-area')
}

const pagehistory = () => {
  router.push('/homesetting/dc-area/history')
}

export default function RouteUpload() {
  const getdata = async () => {
    try {
      const data11 = await axios.get('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_revert_tambon_with_amphure_province.json');
      console.log(data11.data[0].name_th);
    }
    catch (error) {
      console.log("เกิดข้อผิดพลาด", error);
    }
  }

  useEffect(() => {
    getdata();
  }, []);


  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const sumvalue = () => {
    console.log('ข้อมูลพร้อมบันทึก', data1);
  }

  const optioneDC = [
    {
      value: 'DC BB',
      label: 'DC BB',
    },
    {
      value: 'DC MC',
      label: 'DC MC',
    },
    {
      value: 'DC SB',
      label: 'DC SB',
    },
    {
      value: 'RDC LP',
      label: 'RDC LP',
    },
  ];

  //หัวตารางของอัปโหลด
  const columns = [
    { title: 'Route No.', dataIndex: 'RouteNo', key: 'RouteNo', },
    { title: 'Store ID', dataIndex: 'StoreId', key: 'StoreId' },
  ];

  const data1 = [
    { RouteNo: '5555', StoreId: '666' },
    { RouteNo: '5555', StoreId: '666' },
    { RouteNo: '5555', StoreId: '666' },
    { RouteNo: '5555', StoreId: '666' },
    { RouteNo: '5555', StoreId: '666' },
    { RouteNo: '5555', StoreId: '666' },
    { RouteNo: '5555', StoreId: '666' },
  ]

  //ตารางสสับสี
  const getRowClassName = (record: any, index: number) => {
    return index % 2 === 0 ? 'even-row' : 'odd-row';
  };

  //Breadcrumb
  const pageoption = [
    { title: 'หน้าแรก' },
    { title: 'ตั้งค่าระบบ' },
    { title: 'พื้นที่รับผิดชอบของคลัง' },
    { title: 'ร้านสาขา' },
    { title: 'อัปโหลด Route' },
  ];

  return (
    <>
      <Breadcrumb items={pageoption} style={{ margin: '16px 0', backgroundColor: '#ffffff', padding: '20px', borderRadius: '20px', fontWeight: 'bold', color: '#21266e' }} separator='>' />

      <Card headStyle={{ border: 0, padding: 30 }} style={{ width: "100%" }} title={
        <Row className="w-full" style={{ color: "#191970", fontWeight: "bold" }}>
          <Col className='w-1/5'>
            <Row className=' text-2xl/loose'>
              อัปโหลด Route
            </Row>

          </Col>
          <Col className='w-4/5'>
            <Row justify={'end'} className='text-xl/loose'>
              เลือกคลังที่ต้องการอัปโหลด
              <Select
                className='mx-3'
                showSearch
                placeholder="เลือกคลังสินค้า"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                options={optioneDC}
                style={{ width: '20%' }}
              />
              <Button className="mx-2" style={{ backgroundColor: '#5687bc', color: '#ffffff' }} icon={<FileAddOutlined />}>
                Download Template
              </Button>
              <Button style={{ backgroundColor: '#5687bc', color: '#ffffff' }} icon={<ImportOutlined />}>
                Import File
              </Button>
            </Row>
            <Row justify={'end'} className='w-full' style={{ color: 'gray', fontSize: '12px' }}>
              *หมายเหตุ: รองรับไฟล์นามสกุล XLSX, XLS และขนาดไม่เกิน 20MB/ไฟล์
            </Row>

          </Col>
        </Row>}>
        <div className={Styles.cardcontainer}>

          <Table dataSource={data1} columns={columns} className='table custom-table' pagination={{ pageSize: 20 }} rowClassName={getRowClassName} />

          <Row className='w-full mt-2'>
            <Col className='w-1/2'>
              <Button className="mb-8" onClick={pageback} style={{ color: 'red' }} icon={<CaretLeftOutlined />}>
                ย้อนกลับ
              </Button>
              <Button onClick={pagehistory} className="mb-8 ml-4" style={{ backgroundColor: '#5687bc', color: '#ffffff' }} icon={<UndoOutlined />}>
                ดูประวัติการแก้ไข
              </Button>
            </Col>

            <Col className='w-1/2'>
              <Row justify={'end'}>
                <Button onClick={sumvalue} className="mb-8 ml-4" style={{ backgroundColor: '#317b36', color: '#ffffff' }} icon={<SaveFilled />} >
                  บันทึก
                </Button>
              </Row>

            </Col>
          </Row>

        </div>
      </Card>
    </>
  )
}
