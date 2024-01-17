import React, { useState, useEffect } from 'react'
import { Card, Form, Col, Row, Typography, Button, DatePicker, Breadcrumb, Tabs, Table, CollapseProps, Collapse, Select, Input } from 'antd/lib'
import Styles from '@/styles/pouch&crossdock.module.scss'
import { CaretLeftOutlined, FilterFilled, FormOutlined, HighlightOutlined, SearchOutlined, UndoOutlined } from '@ant-design/icons';
import type { DatePickerProps } from 'antd';
import router from 'next/router';

const { Text } = Typography;

const pageback = () => {
    router.push('/homesetting')
}


export default function dcarea() {
    //API ดึงข้อมู
    // "id":100101,
    // "zip_code":10200,
    // "name_th":"พระบรมมหาราชวัง",
    // "name_en":"Phra Borom Maha Ratchawang",
    // "amphure_id":1001,
    // "created_at":"2019-08-09T03:33:09.000+07:00",
    // "updated_at":"2022-05-16T06:31:31.324+07:00",
    // "deleted_at":null,
    // "amphure":



    //ข้อมูล CP All
    const setdatalist2 = [
        { name: 'RDC KK', storkname: 'DC AC' , status:'สร้าง Pouch', namepouch:'DC BB', size:'ซองA4,ซองA3'},
        { name: 'DC SB', storkname: 'DC AC', status:'สร้าง Pouch', namepouch:'DC BB', size:'ซองA4,ซองA3,S' },
        { name: 'DC MC', storkname: 'DC AC', status:'สร้าง Pouch', namepouch:'DC MC', size:'ซองA4,ซองA3' },
        { name: 'RDC CB', storkname: 'DC AC1,DC AC2', status:'สร้าง Pouch', namepouch:'RDC CB', size:'ซองA4,ซองA3,S,M' },
        { name: 'RDC KK', storkname: 'DC AC' , status:'สร้าง Pouch', namepouch:'DC BB', size:'ซองA4,ซองA3'},
        { name: 'DC SB', storkname: 'DC AC', status:'สร้าง Pouch', namepouch:'DC BB', size:'ซองA4,ซองA3,S' },
        { name: 'DC MC', storkname: 'DC AC', status:'สร้าง Pouch', namepouch:'DC MC', size:'ซองA4,ซองA3' },
        { name: 'RDC CB', storkname: 'DC AC1,DC AC2', status:'สร้าง Pouch', namepouch:'RDC CB', size:'ซองA4,ซองA3,S,M' },
    ];

    //ตารางสสับสี
    const getRowClassName = (record: any, index: number) => {
        return index % 2 === 0 ? 'even-row' : 'odd-row';
    };

    const clearData = () => {
        console.log('กดแล้วน่ะ');

    };

    //หัวตารางของร้านสาขา
    const columns2 = [
        { title: 'ชื่อคลังปลายทาง', dataIndex: 'name', key: 'name', },
        { title: 'ชื่อคลัง Crossdock', dataIndex: 'storkname', key: 'storkname', },
        { title: 'สถานะการสร้าง Pouch', dataIndex: 'status', key: 'status', },
        { title: 'ชื่อคลังที่เปิด Pouch', dataIndex: 'namepouch', key: 'namepouch', },
        { title: 'Size พัสดุทีต้องสร้าง Pouch', dataIndex: 'size', key: 'size', },
    ];

    //Breadcrumb
    const pageoption = [
        { title: 'หน้าแรก' },
        { title: 'ตั้งค่าระบบ' },
        { title: 'ตั้งค่า Pouch และ Crossdock' },
    ];

    return (
        <>
            <Breadcrumb items={pageoption} style={{ margin: '16px 0', backgroundColor: '#ffffff', padding: '20px', borderRadius: '20px', fontWeight: 'bold', color: '#21266e' }} separator='>' />

            <Card headStyle={{ border: 0, padding: 30 }} title={<Text className="text-2xl" style={{ color: "#191970", fontWeight: "bold" }}>ตั้งค่า Pouch และ Crossdock</Text>} style={{ width: "100%" }}>


                <Row className='w-full pt-4 rounded-lg p-5 border-2 border-stone-600'>
                    <Row className='w-full'>
                        <Row className='w-1/5'>
                            <Col className='w-1/2'>
                                <Text className='text-xs font-bold'>ประเภทคลัง</Text>
                            </Col>
                            <Col className='w-1/2'>
                                <Text className='text-xs'>Dry</Text>
                            </Col>
                        </Row>

                        <Row className='w-1/5'>
                            <Col className='w-1/2'>
                                <Text className='text-xs font-bold'>คลังต้นทาง</Text>
                            </Col>
                            <Col className='w-1/2'>
                                <Text className='text-xs'>DC BB</Text>
                            </Col>
                        </Row>

                        <Row className='w-1/5'>
                            <Col className='w-1/2'>
                                <Text className='text-xs font-bold'>วันที่เริ่มมีผลใช้งาน</Text>
                            </Col>
                            <Col className='w-1/2'>
                                <Text className='text-xs'>dd/mm/yyyy</Text>
                            </Col>
                        </Row>

                        <Row className='w-1/5'>
                            <Col className='w-1/2'>
                                <Text className='text-xs font-bold'>ผู้ดำเนินการล่าสุด</Text>
                            </Col>
                            <Col className='w-1/2'>
                                <Text className='text-xs'>xxxx xxxxxx</Text>
                            </Col>
                        </Row>

                        <Row className='w-1/5'>
                            <Col className='w-1/2'>
                                <Text className='text-xs font-bold'>วันที่แก้ไขข้อมูลล่าสุด</Text>
                            </Col>
                            <Col className='w-1/2'>
                                <Text className='text-xs '>dd/mm/yyyy hh:mm</Text>
                            </Col>
                        </Row>
                    </Row>

                    <Row className='w-full pt-6'>
                        <Col className='w-1/12'>
                            <Text className='text-base font-bold'>ค้นหา</Text>
                        </Col>
                        <Col className='w-11/12'>
                            <Input style={{ width: '100%' }} placeholder="ค้นหาชื่อปลายทาง/ ชื่อคลัง Crossdock/ สถานะ การสร้าง Pouch/ ชื่อคลังที่เปิด Pouch/ Size พัสดุที่ต้องสร้าง Pouch" />
                        </Col>
                    </Row>

                    <Table dataSource={setdatalist2} columns={columns2} className='table custom-table' rowClassName={getRowClassName} />

                    <Row className='w-full' justify={'end'}>
                        <Button className="mt-5" style={{ backgroundColor: '#f5b131', color: '#000000' }} icon={<FormOutlined />}>
                            แก้ไข
                        </Button>
                    </Row>

                </Row>


                <div className='mt-8 w-full'>
                    <Button className="mb-8" onClick={pageback} style={{ color: 'red' }} icon={<CaretLeftOutlined />}>
                        ย้อนกลับ
                    </Button>
                    <Button className="mb-8 ml-4" style={{ backgroundColor: '#5687bc', color: '#ffffff' }} icon={<UndoOutlined />}>
                        ดูประวัติการแก้ไข
                    </Button>
                </div>

            </Card>
        </>
    )
}
