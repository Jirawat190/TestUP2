import React, { useEffect, useState } from 'react'
import { Breadcrumb, Button, Card, Col, Collapse, CollapseProps, DatePicker, DatePickerProps, Form, Input, Row, Select, Table, Typography } from 'antd/lib'
import { CaretLeftOutlined, FilterFilled, HighlightOutlined, SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import router from 'next/router';

const pageback = () => {
    router.push('/homesetting/dc-area/RouteUpload')
}

export default function history() {

    const [datatest, setDatalist] = useState<any[]>([]);

    console.log(datatest);

    const getdata = async () => {
        try {
            let datalist: any[] = [];

            const data = await axios.get('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_revert_tambon_with_amphure_province.json');
            // console.log(data.data);

            data.data.forEach((element: any) => {
                datalist.push({
                    dcstork: element.id, file: element.zip_code, sizefile: element.amphure_id, name: element.name_th, dateupload: element.updated_at, date: element.created_at
                });
                // console.log(datalist); 
            });

            if (datalist.length > 0) {
                setDatalist(datalist);
            }
        }
        catch (error) {
            console.log("เกิดข้อผิดพลาด", error);
        }
    }

    useEffect(() => {
        getdata();
    }, []);

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

    //Breadcrumb
    const pageoption = [
        { title: 'หน้าแรก' },
        { title: 'ตั้งค่าระบบ' },
        { title: 'พื้นที่รับผิดชอบของคลัง' },
        { title: 'ร้านสาขา' },
        { title: 'อัปโหลด' },
        { title: 'ดูประวัติการแก้ไข' },
    ];


    //ปฏิทิน
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    //ข้อมูลค้นหา
    const onFinish = (values: any) => {
        console.log(values);
    };

    //หัวตารางของอัปโหลด
    const columns = [
        { title: 'คลังที่ดำเนินการ', dataIndex: 'dcstork', key: 'dcstork', },
        { title: 'ชื่อไฟล์', dataIndex: 'file', key: 'file' },
        { title: 'ขนาดไฟล์', dataIndex: 'sizefile', key: 'sizefile' },
        { title: 'ผู้ดำเนินการ', dataIndex: 'name', key: 'name' },
        { title: 'วันที่อัปโหลด', dataIndex: 'dateupload', key: 'dateupload' },
        { title: 'วันที่เริ่มมีผลใช้งาน', dataIndex: 'date', key: 'date' },
    ];

    //ตารางสสับสี
    const getRowClassName = (record: any, index: number) => {
        return index % 2 === 0 ? 'even-row' : 'odd-row';
    };

    //แบบฟอร์มตัวกรองของเขตพื้นที่ 
    const text = (
        <Card className='bg-[#f5f5fa] w-full'>
            <Form onFinish={onFinish}>
                <Row>
                    <Col className='w-5/6'>

                        <Row className='w-full'>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'}>
                                <Form.Item label="คลังดำเนินการ" className='w-full' name="dcstork"  >
                                    <Select style={{ width: '80%' }} options={optioneDC}></Select>
                                </Form.Item>
                            </Row>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'} >
                                <Form.Item label="ชื่อไฟล์" className='w-full' name="file">
                                    <Input style={{ width: '80%' }} placeholder="ระบุชื่อไฟล์" />
                                </Form.Item>
                            </Row>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'} >
                                <Form.Item label="ชื่อผู้ดำเนินการ" className='w-full' name="name" >
                                    <Select style={{ width: '80%' }} options={optioneDC}></Select>
                                </Form.Item>
                            </Row>

                        </Row>


                        <Row className='w-full'>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'}>
                                <Form.Item label="วันที่อัปโหลด" className='w-full' name="dateupload" >
                                    <DatePicker style={{ width: '80%' }} onChange={onChange} placeholder="dd/mm/yyyy" />
                                </Form.Item>
                            </Row>

                            <Row className='w-1/3 text-center' justify={'center'} align={'middle'}>
                                <Form.Item label="วันที่เริ่มมีผลใช้งาน" className='w-full' name="date" >
                                    <DatePicker style={{ width: '80%' }} onChange={onChange} placeholder="dd/mm/yyyy" />
                                </Form.Item>
                            </Row>

                        </Row>
                    </Col>

                    <Col className='w-1/6' >
                        <Form.Item>
                            <Row className='w-full' justify={'center'} align={'middle'}>
                                <Button type="primary" htmlType="submit" style={{ backgroundColor: '#5687bc', color: '#fff', marginBottom: '10px' }} icon={<SearchOutlined />}>ค้นหา</Button>
                            </Row>
                            <Row className='w-full' justify={'center'} align={'middle'}>
                                <Button htmlType="button" style={{ color: '#5687bc' }} icon={<HighlightOutlined />}>เคลียร์</Button>
                            </Row>
                        </Form.Item>

                    </Col>
                </Row>
            </Form>
        </Card>
    );

    //ตัวกรองของเขตพื้นที่ 
    const items: CollapseProps["items"] = [
        {
            key: "1",
            label:
                <Row justify={'end'} className='w-full'>
                    <Col className='filterBotton'>
                        <Button icon={<FilterFilled />}>ตัวกรอง</Button>
                    </Col>
                </Row>,
            children: <p>{text}</p>,
            showArrow: false,
        },
    ];

    return (
        <>
            <Breadcrumb items={pageoption} style={{ margin: '16px 0', backgroundColor: '#ffffff', padding: '20px', borderRadius: '20px', fontWeight: 'bold', color: '#21266e' }} separator='>' />

            <Card headStyle={{ border: 0, padding: 30 }} style={{ width: "100%" }}>
                <Row className="w-full" style={{ color: "#191970", fontWeight: "bold" }}>
                    <Col className='w-1/2'>
                        <Row className=' text-2xl/loose'>
                            ดูประวัติการแก้ไขร้านสาขาที่คลังรับผิดชอบ
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Collapse className='w-full' style={{ marginTop: '-50px' }} ghost items={items}></Collapse>
                </Row>

                <Table dataSource={datatest} columns={columns} className='table custom-table' pagination={{ pageSize: 20 }} rowClassName={getRowClassName} />

                <Button className="mb-8 " onClick={pageback} style={{ color: 'red' }} icon={<CaretLeftOutlined />}>
                    ย้อนกลับ
                </Button>
            </Card>
        </>
    )
}
