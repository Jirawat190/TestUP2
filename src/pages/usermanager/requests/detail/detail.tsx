import React, { useState, useEffect } from 'react'
import { Card, Form, Col, Row, Typography, Button, DatePicker, Breadcrumb, Tabs, Table, CollapseProps, Collapse, Select, Input } from 'antd/lib'
import Styles from '@/styles/detail.module.scss'
import { CaretLeftOutlined, FilterFilled, FormOutlined, HighlightOutlined, PlusCircleOutlined, SearchOutlined, UndoOutlined } from '@ant-design/icons';
import { DatePickerProps, Modal } from 'antd';
import router from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';

const { Text } = Typography;
const { TabPane } = Tabs;

const pageadduser = () => {
    router.push('')
}

const pageedit = () => {
    router.push('')
}

export default function detail() {
    //แบบฟอร์ม
    const [form] = Form.useForm();

    //ข้อมูลฟอร์ม
    const onFinish = (values: any) => {
        console.log(values);
    };

    // value สถานะคำขอ 
    const optionestatus = [
        {
            value: 'อนุมัติ',
            label: 'อนุมัติ',
        },
        {
            value: 'รอตรวจสอบ',
            label: 'รอตรวจสอบ',
        },
        {
            value: 'รออนุมัติ',
            label: 'รออนุมัติ',
        },
        {
            value: 'ส่งกลับแก้ไข',
            label: 'ส่งกลับแก้ไข',
        },
        {
            value: 'ปฏิเสธ',
            label: 'ปฏิเสธ',
        },
        {
            value: 'รอมอบหมาย',
            label: 'รอมอบหมาย',
        },
        {
            value: 'รอลูกค้ายืนยัน',
            label: 'รอลูกค้ายืนยัน',
        },
    ];

    //แบบฟอร์มตัวกรองของจัดการคำขอ
    const text = (
        <Card className='bg-[#f5f5fa] w-full'>
            <Form onFinish={onFinish}>
                <Row>
                    <Col className='w-full'>

                        <Row className='w-full'>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'}>
                                <Form.Item label="รหัสลูกค้า" className='w-full' name="userID"  >
                                    <Input style={{ width: '80%' }} placeholder="ระบุรหัสลูกค้า" />
                                </Form.Item>
                            </Row>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'} >
                                <Form.Item label="ชื่อลูกค้า" className='w-full' name="username">
                                    <Input style={{ width: '80%' }} placeholder="ระบุชื่อลูกค้า" />
                                </Form.Item>
                            </Row>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'} >
                                <Form.Item label="สถานะใบคำขอ" className='w-full' name="status" >
                                    <Select style={{ width: '80%' }} options={optionestatus}></Select>
                                </Form.Item>
                            </Row>

                        </Row>


                        <Row className='w-full'>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'}>
                                <Form.Item label="เลขที่คำขอ" className='w-full' name="requestnum" >
                                    <Input style={{ width: '80%' }} placeholder="ระบุเลขที่คำขอ" />
                                </Form.Item>
                            </Row>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'}>

                            </Row>

                            <Row className='w-1/3 ' justify={'center'} align={'middle'}>
                                <Row className='w-full' justify={'end'} align={'middle'}>
                                    <Button type="primary" htmlType="submit" style={{ backgroundColor: '#5687bc', color: '#fff', marginBottom: '10px', marginLeft: '10px' }} icon={<SearchOutlined />}>ค้นหา</Button>
                                    <Button htmlType="button" style={{ color: '#5687bc', marginBottom: '10px', marginLeft: '10px' }} icon={<HighlightOutlined />}>เคลียร์</Button>
                                </Row>
                            </Row>
                        </Row>

                    </Col>
                </Row>
            </Form>
        </Card>
    );

    //Breadcrumb
    const pageoption = [
        { title: 'หน้าแรก' },
        { title: 'จัดการคำขอลูกค้า' },
        { title: 'จัดการคำขอ' },
        { title: 'Pre Register' },
    ];


    return (
        <>
            <Breadcrumb items={pageoption} style={{ margin: '16px 0', backgroundColor: '#ffffff', padding: '20px', borderRadius: '20px', fontWeight: 'bold', color: '#21266e' }} separator='>' />

            <Card headStyle={{ border: 0, padding: 30 }} title={
                <Text className="text-2xl" style={{ color: "#191970", fontWeight: "bold" }}>รายละเอียดคำขอ</Text>
            } style={{ width: "100%" }}>
                <div className={Styles.cardcontainer}>

                    <Card headStyle={{ border: 0, backgroundColor:'#CFE2FF' }} title={
                        <Text className="text-2xl" style={{ color: "#191970", fontWeight: "bold" , fontSize:'15px'}}>Pre Register</Text>
                    } style={{ width: "100%" }}>
                        <Row style={{backgroundColor:'#F8F8F8', width:'100%', padding:30}}>
                            <Row className='w-full'>
                                <Col className='w-1/3'>
                                    เลขที่คำขอ : 
                                </Col>
                                <Col className='w-1/3'>
                                    ชื่อผู้ติดต่อ : 
                                </Col>
                                <Col className='w-1/3'>
                                    วันที่ส่งคำขอ : 
                                </Col>
                            </Row>
                            <Row className='w-full'>
                                <Col className='w-1/3'>
                                    ประเภทคำขอ : 
                                </Col>
                                <Col className='w-1/3'>
                                    อ้างอิงคำขอ : 
                                </Col>
                                <Col className='w-1/3'>
                                    RM : 
                                </Col>
                            </Row>
                        </Row>

                    </Card>
                </div>
            </Card>
        </>
    )
}
